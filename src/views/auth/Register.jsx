import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const [inputs, setInputs] = useState({
    coop_id: "",
    national_id: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const apiUrl = process.env.REACT_APP_API_BASE_URL;

    const api = axios.create({
      baseURL: apiUrl,
    });

    try {
      const resp = await api.get("/api/member/check_user", {
        data: inputs, // ใช้ inputs เป็นข้อมูลส่งไปที่ API
      });
      
      // ตรวจสอบคำตอบจาก API และดำเนินการตามความต้องการของคุณ
      if (resp.data.success) {
        // ถ้า API ส่งกลับข้อมูลที่บอกว่าสำเร็จ
        MySwal.fire({
          title: "ลงทะเบียนสำเร็จ",
          icon: "success",
          showCancelButton: false,
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/login"); // ส่งผู้ใช้ไปยังหน้า Login หรือตำแหน่งที่คุณต้องการ
        });
      } else {
        // ถ้า API ส่งกลับข้อมูลที่บอกว่าไม่สำเร็จ
        MySwal.fire({
          title: "ลงทะเบียนไม่สำเร็จ",
          text: "ข้อมูลไม่ถูกต้องหรือซ้ำกับระบบ",
          icon: "error",
          showCancelButton: false,
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการส่งคำขอ:", error);
      // แสดงข้อความหรือทำอย่างอื่นตามที่คุณต้องการในกรณีเกิดข้อผิดพลาด
    }
  };

  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-end">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          ลงทะเบียนสมาชิก
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your email and password to sign in!
        </p>
        {/* เพิ่ม input สำหรับ Membership ID */}
        <input
          type="number"
          name="coop_id"
          value={inputs.coop_id}
          onChange={handleChange}
          placeholder="เลขที่ทะเบียนสมาชิก"
          className="mb-4 w-full rounded-lg border px-4 py-2"
        />

        {/* เพิ่ม input สำหรับรหัสผ่าน */}
        <input
          type="number"
          name="national_id"
          value={inputs.national_id}
          onChange={handleChange}
          placeholder="เลขที่บัตรประจำตัวประชาชน"
          className="mb-6 w-full rounded-lg border px-4 py-2"
        />
        <button
          className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          onClick={handleSubmit}
        >
          ต่อไป
        </button>
      </div>
    </div>
  );
};
