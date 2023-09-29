import Widget from "components/widget/Widget";
import StockTable from "./components/StockTable";
import React, { useState, useEffect } from "react";
import { getFileStock } from "utils/APIStockTrans";
import { getCustomerById } from "utils/APICustomerById";
// import { getFileStock} from "src/utils/APIStockTrans";

const dataStock = [
  {
    No: 1,
    วันที่ทำรายการ: "24/02/25",
    จำนวน: "52",
    ถอนมูลค่า: "30",
    เพิ่มมูลค่า: "50",
    คงเหลือจำนวน: "40",
    คงเหลือมูลค่า: "50",
    สถานะ: "ปกติ",
  },
  {
    No: 2,
    วันที่ทำรายการ: "24/02/25",
    จำนวน: "52",
    ถอนมูลค่า: "30",
    เพิ่มมูลค่า: "50",
    คงเหลือจำนวน: "40",
    คงเหลือมูลค่า: "50",
    สถานะ: "ปกติ",
  },
  {
    No: 3,
    วันที่ทำรายการ: "24/02/25",
    จำนวน: "52",
    ถอนมูลค่า: "30",
    เพิ่มมูลค่า: "50",
    คงเหลือจำนวน: "40",
    คงเหลือมูลค่า: "50",
    สถานะ: "ปกติ",
  },
  {
    No: 4,
    วันที่ทำรายการ: "24/02/25",
    จำนวน: "52",
    ถอนมูลค่า: "30",
    เพิ่มมูลค่า: "50",
    คงเหลือจำนวน: "40",
    คงเหลือมูลค่า: "50",
    สถานะ: "ปกติ",
  },
  {
    No: 5,
    วันที่ทำรายการ: "24/02/25",
    จำนวน: "52",
    ถอนมูลค่า: "30",
    เพิ่มมูลค่า: "50",
    คงเหลือจำนวน: "40",
    คงเหลือมูลค่า: "50",
    สถานะ: "ปกติ",
  },
  {
    No: 6,
    วันที่ทำรายการ: "24/02/25",
    จำนวน: "52",
    ถอนมูลค่า: "30",
    เพิ่มมูลค่า: "50",
    คงเหลือจำนวน: "40",
    คงเหลือมูลค่า: "50",
    สถานะ: "ปกติ",
  },
];

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
    Header: "Quantity",
    accessor: "Quantity",
  },
  {
    Header: "Withdraw",
    accessor: "Withdraw",
  },
  {
    Header: "Deposit",
    accessor: "Deposit",
  },
  {
    Header: "QuantityBalance",
    accessor: "QuantityBalance",
  },
  {
    Header: "ValueBalance",
    accessor: "ValueBalance",
  },
  {
    Header: "Status",
    accessor: "Status",
  },
];

const Marketplace = () => {
  const [stockData, setStockData] = useState([]);
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
        const stockResponse = await getFileStock(customerData[0].Coop_ID);
        setStockData(stockResponse.data.data);
      } catch (error) {
        console.error("เกิดข้อผิดพลาดในการดึงข้อมูล: ", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex">
      <div>
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
          {stockData.length > 0 ? (
            <>
              <Widget
                title={"จำนวนหุ้นคงเหลือทั้งหมด"}
                subtitle={stockData[0].QuantityBalance}
              />
              <Widget
                title={"มูลค่าคงเหลือทั้งหมด"}
                subtitle={stockData[0].ValueBalance}
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
          <Widget title={"มูลค่าต่อหุ้น"} subtitle={"10 บาท"} />
        </div>
        <div className="mt-4">
          <StockTable
            columnsData={columnsDataDevelopment}
            tableData={stockData}
          />
        </div>
      </div>
      <div className="ml-5 h-[300px] w-[300px] rounded-3xl	bg-[#ffffff] p-10">
        <h1 className="mb-3 text-center text-[18px] font-bold">รายละเอียด</h1>
        <div className="text-[16px]">
          {customerData.length > 0 ? (
            <>
              <p>ชื่อ-ชื่อสุกล   <span>{customerData[0].Beneficiary}</span></p> 
              <p>หุ้นรายเดือน   <span>{customerData[0].StockPerMonth}</span></p> 
              <p>สถานะหุ้น   <span>{customerData[0].StockStatus}</span></p> 
              <p>ทุนเรือนหุ้น   <span>{customerData[0].StockCapital}</span></p> 
              <p>สถานะ   <span>{customerData[0].StockStatus}</span></p>
            </>
          ) : (
            <>
              <p>ชื่อ-ชื่อสุกล</p> <span>{"กำลังโหลด..."}</span>
              <p>หุ้นรายเดือน</p> <span>{"กำลังโหลด..."}</span>
              <p>สถานะหุ้น</p> <span>{"กำลังโหลด..."}</span>
              <p>ทุนเรือนหุ้น</p> <span>{"กำลังโหลด..."}</span>
              <p>สถานะ</p> <span>{"กำลังโหลด..."}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
