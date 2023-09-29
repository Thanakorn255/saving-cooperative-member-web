import React, { useEffect, useState } from "react";
import Widget from "components/widget/Widget";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import { getCustomerById } from "utils/APICustomerById";
import { getFileLoanTrans } from "utils/APILoanTrans";
import LoanTransTable from "./components/LoanTransTable";

const columnsDataDevelopment = [
  {
    Header: "No",
    accessor: "No",
  },
  {
    Header: "PostingDate",
    accessor: "PostingDate",
  },
  {
    Header: "Period",
    accessor: "Period",
  },
  {
    Header: "Settle",
    accessor: "Settle",
  },
  {
    Header: "Pay",
    accessor: "Pay",
  },
  {
    Header: "Interest",
    accessor: "Interest",
  },
  {
    Header: "AccruedInterest",
    accessor: "AccruedInterest",
  },
  {
    Header: "Balance",
    accessor: "Balance",
  },
  {
    Header: "Status",
    accessor: "Status",
  },
];

export const LoanTrans = () => {
  const { id } = useParams();
  const [loanTransData, setLoanTransData] = useState([]);
  const [customerData, setCustomer] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // ดึงค่า national_id จาก localStorage
        const national_id = localStorage.getItem("national_id");
        console.log(national_id);

        // ดึงข้อมูลลูกค้าและตั้งค่า state
        const customerResponse = await getCustomerById(national_id);
        const customerData = customerResponse.data.data;
        setCustomer(customerData);

        // ดึงข้อมูลสต็อกและตั้งค่า state
        const depositTransResponse = await getFileLoanTrans(
          customerData[0].Coop_ID,
          id
        );
        setLoanTransData(depositTransResponse.data.data);
      } catch (error) {
        console.error("เกิดข้อผิดพลาดในการดึงข้อมูล: ", error);
      }
    }

    fetchData();
  }, []);

  console.log("oanTransData",loanTransData);
  console.log(customerData);

  return (
    <div className="flex">
      <div>
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
          {loanTransData.length > 0 ? (
            <>
              <Widget
                title={"ชำระต่องวด"}
                subtitle={loanTransData[0].Pay}
              />
              <Widget
                title={"งวดล่าสุด"}
                subtitle={loanTransData[0].Period}
              />
              <Widget
                title={"ยอดคงเหลือทั้งหมด"}
                subtitle={loanTransData[0].Balance}
              />
            </>
          ) : (
            <>
              <Widget
                title={"ชำระต่องวด"}
                subtitle={"กำลังโหลด..."}
              />
              <Widget
                title={"งวดล่าสุด"}
                subtitle={"กำลังโหลด..."}
              />
              <Widget
                title={"ยอดคงเหลือทั้งหมด"}
                subtitle={"กำลังโหลด..."}
              />
            </>
          )}
        </div>
        <div className="mt-4">
          <LoanTransTable
            columnsData={columnsDataDevelopment}
            tableData={loanTransData}
          />
        </div>
      </div>
      <div className="ml-5 h-[300px] w-[300px] rounded-3xl	bg-[#ffffff] p-10">
        <h1 className="mb-3 text-center text-[18px] font-bold">รายละเอียด</h1>
        <div className="text-[16px]">
          {customerData.length > 0 ? (
            <>
              <p>
                ชื่อ-ชื่อสุกล <span></span>
              </p>
              <p>
              เลขที่สัญญา <span></span>
              </p>
              <p>
              เริ่มสัญญา <span></span>
              </p>
              <p>
              วงเงินขอกู้ <span></span>
              </p>
              <p>
              วงเงินอนุมัติ <span></span>
              </p>
              <p>
              สถานะ <span></span>
              </p>
            </>
          ) : (
            <>
              <p>ชื่อ-ชื่อสุกล</p> <span>{"กำลังโหลด..."}</span>
              <p>เลขที่บัญชี</p> <span>{"กำลังโหลด..."}</span>
              <p>ประเภทบัญชี</p> <span>{"กำลังโหลด..."}</span>
              <p>สถานะ</p> <span>{"กำลังโหลด..."}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
