import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";
import { getCustomerById } from 'utils/APICustomerById';
import { getFileDepositTrans } from 'utils/APIDepositTrans';
import Widget from "components/widget/Widget";
import DepositTransTable from './components/DepositTransTable';


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
      Header: "Deposit",
      accessor: "Deposit",
    },
    {
      Header: "Balance",
      accessor: "Balance",
    },
    {
      Header: "AccumulatInterest",
      accessor: "AccumulatInterest",
    },
    {
      Header: "Status",
      accessor: "Status",
    },
  ];

export const DepositTrans = () => {
    const { id1, id2 } = useParams();
    const [depositTransData, setDepositTransData] = useState([]);
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
            const depositTransResponse = await getFileDepositTrans(customerData[0].Coop_ID,id1,id2);
            setDepositTransData(depositTransResponse.data.data);
          } catch (error) {
            console.error("เกิดข้อผิดพลาดในการดึงข้อมูล: ", error);
          }
        }
    
        fetchData();
      }, []);

      // console.log("depositTransData",depositTransData);
      // console.log("customerData",customerData);
      // console.log(id1);
      // console.log(id2);
  return (
    <div className="flex">
    <div>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        {depositTransData.length > 0 ? (
          <>
            <Widget
              title={"ดอกเบี้ยสะสม"}
              subtitle={depositTransData[0].AccumulatInterest}
            />
            <Widget
              title={"ยอดคงเหลือทั้งหมด"}
              subtitle={depositTransData[0].Balance}
            />
          </>
        ) : (
          <>
            <Widget
              title={"จำนวนหุ้นคงเหลือทั้งหมด"}
              subtitle={"กำลังโหลด..."}
            />
            <Widget
              title={"มูลค่าคงเหลือทั้งหมด"}
              subtitle={"กำลังโหลด..."}
            />
          </>
        )}
        <Widget title={"อัตราดอกเบี้ยเงินฝาก"} subtitle={"0.50%"} />
      </div>
      <div className="mt-4">
        <DepositTransTable
          columnsData={columnsDataDevelopment}
          tableData={depositTransData}
        />
      </div>
    </div>
    <div className="ml-5 h-[300px] w-[300px] rounded-3xl	bg-[#ffffff] p-10">
      <h1 className="mb-3 text-center text-[18px] font-bold">รายละเอียด</h1>
      <div className="text-[16px]">
        {customerData.length > 0 ? (
          <>
            <p>ชื่อ-ชื่อสุกล   <span>{customerData[0].Beneficiary}</span></p> 
            <p>เลขที่บัญชี   <span>{id1}</span></p> 
            <p>ประเภทบัญชี   <span>{id2}</span></p> 
            <p>สถานะ  <span>{customerData[0].Status}</span></p> 
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
  )
}
