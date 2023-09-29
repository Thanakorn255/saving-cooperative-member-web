import React, { useEffect, useState } from 'react'
import CustomerLoanTable from './components/CustomerLoanTable';
import { EndLoanTable } from './components/EndLoanTable';
import { getCustomerById } from 'utils/APICustomerById';
import { getFileCustomerLoanById } from 'utils/APICustomerLoanById';


const columnsDataCustomerLoan = [
  {
    Header: "LoanId",
    accessor: "LoanId",
  },
  {
    Header: "RegisterDate",
    accessor: "RegisterDate",
  },
  {
    Header: "TotalDebt",
    accessor: "TotalDebt",
  },
  {
    Header: "TotalPeriod",
    accessor: "TotalPeriod",
  },
  {
    Header: "PayOffDebt",
    accessor: "PayOffDebt",
  },
  {
    Header: "Balance",
    accessor: "Balance",
  },
  {
    Header: "TotalInterest",
    accessor: "TotalInterest",
  },
  {
    Header: "Status",
    accessor: "Status",
  },
];
export const CustomerLoan = () => {
  const [customerLoanData, setCustomerLoanData] = useState([]);
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
        const stockResponse = await getFileCustomerLoanById(customerData[0].Coop_ID);
        setCustomerLoanData(stockResponse.data.data);
      } catch (error) {
        console.error("เกิดข้อผิดพลาดในการดึงข้อมูล: ", error);
      }
    }

    fetchData();
  }, []);

  console.log(customerData);
  console.log(customerLoanData);
  return (
    <div>
      <div>
        <CustomerLoanTable
          columnsData={columnsDataCustomerLoan}
          tableData={customerLoanData.filter(item => item.Status === "ปกติ")}
        />
      </div>
      <div className="flex mt-5 justify-end	">
        <h1 className="font-bold mr-8">รวม</h1>
        <p className="mr-8">ยอดคงเหลือ 0 บาท</p>
        <p>ดอกเบี้ยสะสม 0 บาท</p>
      </div>
      <div className="my-10">
        <EndLoanTable
          columnsData={columnsDataCustomerLoan}
          tableData={customerLoanData.filter(item => item.Status != "ปกติ")}
        />
      </div>
    </div>
  )
}
