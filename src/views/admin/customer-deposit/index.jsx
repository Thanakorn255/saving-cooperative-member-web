
import { getFileCustomerDepositById } from "utils/APICustomerDepositById";
import ComplexTable from "./components/ComplexTable";
import { EndDpositTable } from "./components/EndDpositTable";
import React, { useState, useEffect } from 'react';
import { getCustomerById } from "utils/APICustomerById";


const columnsDataComplex = [
  {
    Header: "AccountNo",
    accessor: "AccountNo",
  },
  {
    Header: "AccountType",
    accessor: "AccountType",
  },
  {
    Header: "RegisterDate",
    accessor: "RegisterDate",
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

// const tableDataComplex = [
//   {
//     ประเภทรายการ: "Marketplace",
//     วันเริ่มสัญญา: "Approved",
//     วงเงินอนุมัติ: "24.Jan.2021",
//     งวดทั้งหมด: 30,
//     ชำระต่องวด: 300,
//     คงเหลือ: 300,
//     ดอกเบี้ยรวม: 600,
//     สถานะ: "ดำเนินการ",
//   },
//   {
//     ประเภทรายการ: "Marketplace",
//     วันเริ่มสัญญา: "Approved",
//     วงเงินอนุมัติ: "24.Jan.2021",
//     งวดทั้งหมด: 30,
//     ชำระต่องวด: 300,
//     คงเหลือ: 300,
//     ดอกเบี้ยรวม: 600,
//     สถานะ: "ดำเนินการ",
//   },
//   {
//     ประเภทรายการ: "Marketplace",
//     วันเริ่มสัญญา: "Approved",
//     วงเงินอนุมัติ: "24.Jan.2021",
//     งวดทั้งหมด: 30,
//     ชำระต่องวด: 300,
//     คงเหลือ: 300,
//     ดอกเบี้ยรวม: 600,
//     สถานะ: "ดำเนินการ",
//   },
// ];

const Tables = () => {
  const [customerDepositData, setCustomerDepositData] = useState([]);
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
        const stockResponse = await getFileCustomerDepositById(customerData[0].Coop_ID);
        setCustomerDepositData(stockResponse.data.data);
      } catch (error) {
        console.error("เกิดข้อผิดพลาดในการดึงข้อมูล: ", error);
      }
    }

    fetchData();
  }, []);

  // console.log(customerData);

  // console.log(customerDepositData);

  return (
    <div>
      <div>
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={customerDepositData.filter(item => item.Status === "ปกติ")}
        />
      </div>
      <div className="flex mt-5 justify-end	">
        <h1 className="font-bold mr-8">รวม</h1>
        <p className="mr-8">ยอดคงเหลือ 0 บาท</p>
        <p>ดอกเบี้ยสะสม 0 บาท</p>
      </div>
      <div className="my-10">
        <EndDpositTable
          columnsData={columnsDataComplex}
          tableData={customerDepositData.filter(item => item.Status != "ปกติ")}
        />
      </div>
    </div>
  );
};

export default Tables;
