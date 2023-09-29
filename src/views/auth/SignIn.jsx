import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function SignIn() {
  const navigate = useNavigate()
  const MySwal = withReactContent(Swal)

  const [inputs, setInputs] = useState({
    national_id: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      national_id: inputs.national_id,
      password: inputs.password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/member/login`, requestOptions)
      .then((response) => response.json())
      .then((result) => {console.log(result) 
        if(result.code === 200) {
          MySwal.fire({
            // title: <strong>Good job!</strong>,
            html: <i>{result.message}</i>,
            icon: 'success'
        
          }).then((value) => {
            localStorage.setItem("token" , result.data.access_token)
            localStorage.setItem("national_id",inputs.national_id)
            navigate("/admin/dashbord")
          })
      }
      else{
        MySwal.fire({
          // title: <strong>Good job!</strong>,
          html: <i>{result.message}</i>,
          icon: 'error'
        })
      }
    })
      .catch((error) => console.log("error", error));

    
  };

  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-end">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          เข้าสู่ระบบสมาชิก
        </h4>
        {/* <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your email and password to sign in!
        </p> */}

        {/* เพิ่ม input สำหรับ Membership ID */}
        <input
          type="text"
          name="national_id"
          value={inputs.national_id}
          onChange={handleChange}
          placeholder="เลขบัตรประชาชน"
          className="mb-4 px-4 py-2 w-full border rounded-lg"
        />

        {/* เพิ่ม input สำหรับรหัสผ่าน */}
        <input
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
          placeholder="รหัสผ่าน"
          className="mb-6 px-4 py-2 w-full border rounded-lg"
        />

        <div>
          <a
            className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            href=" "
          >
            ลืมรหัสผ่าน?
          </a>
        </div>
        <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200" onClick={handleSubmit}>
          เข้าสู่ระบบ
        </button>
        <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            คุณเคยลงทะเบียนระบบสมาชิกหรือยัง?
          </span>
          <a
            href="/auth/register"
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            ลงทะเบียน
          </a>
        </div>
      </div>
    </div>
  );
}
