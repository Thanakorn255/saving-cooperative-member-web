import { IoDocuments } from "react-icons/io5";
import { MdBarChart } from "react-icons/md";

import Widget from "components/widget/Widget";

import { FaPhone } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <>
      <div className="relative mt-12 mb-5 rounded-3xl bg-[#23408E] p-[60px] text-[#fff]">
        <h1 className="text-[26px] font-bold">ยินดีตอนรับเข้าสู่ระบบ</h1>
        <p className="text-[18px]">สหกรณ์ออมทรัพย์พนักงานโอสถสภา จำกัด</p>
        <img
          src="/image/contact/banner.svg"
          alt=""
          className="absolute bottom-0 right-0"
        />
      </div>

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"จำนวนหุ้น"}
          subtitle={"1,250"}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"รายการเงินฝากทั้งหมด"}
          subtitle={"15,000,000"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"ยอดเงินกู้ทั้งหมด"}
          subtitle={"12,000,000"}
        />
      </div>

      <div className="mt-5 flex flex-col md:flex-row h-[340px] w-full">
        <div className="mr-7 w-full rounded-3xl  bg-[#fff]	p-8">
          <h1 className="text-[22px] font-bold text-[#23408E]">
            บัญชีธนาคารของสหกรณ์
          </h1>
          <p>เพื่อนำฝากเงิน หรือ ชำระหนี้ของสหกรณ์</p>
          <div className="container">
            <div className="relative flex flex-col items-center justify-between py-5 ">
              <div className="w-full items-center justify-end">
                <div className="flex items-center pb-8">
                  <img
                    src="/image/contact/scb.svg"
                    alt=""
                    className="w-[70px]"
                  />
                  <div className="ml-4">
                    <p className="text-purple -mt-2 text-lg font-bold">
                      ธนาคารไทยพาณิชย์ จำกัด (มหาชน)
                    </p>
                    <p className="-mt-1 text-base">
                      <b>ชื่อบัญชี</b>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; สหกรณ์
                      ออมทรัพย์พนักงานโอสถสภา จำกัด
                    </p>
                    <p className="-mt-1 text-base">
                      <b>เลขที่บัญชี</b> &nbsp;&nbsp; 004-400296-5
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full items-center justify-end">
                <div className="flex items-center">
                  <img src="/image/contact/ktb.svg" alt="" />
                  <div className="ml-4">
                    <p className="text-sky -mt-2 text-lg font-bold">
                      ธนาคารกรุงไทย จำกัด (มหาชน)
                    </p>
                    <p className="-mt-1 text-base">
                      <b>ชื่อบัญชี</b>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; สหกรณ์
                      ออมทรัพย์พนักงานโอสถสภา จำกัด
                    </p>
                    <p className="-mt-1 text-base">
                      <b>เลขที่บัญชี</b> &nbsp;&nbsp; 077-0-11391-5
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex w-full flex-col rounded-3xl bg-[#fff] p-8">
          <h1 className="text-[22px] font-bold text-[#23408E]">ติดต่อสหกรณ์</h1>
          <div className="mt-3">
            <p>วันจันทร์ถึงวันศุกร์ ยกเว้นวันหยุด</p>
            <p>เวลา 08.00 - 15.00 น.</p>
          </div>
          <div className="mt-3">
            <div className="flex items-center">
              <FaPhone />
              <p className="mt-2 ml-3">02-351-1103 </p>
            </div>
            <div className="flex items-center">
              <FaPhone />
              <p className="mt-2 ml-3">063-206-0521 </p>
            </div>
            <div className="flex items-center">
              <FaPhone />
              <p className="mt-2 ml-3">063-206-0342 </p>
            </div>
          </div>
          <img
            src="/image/contact/contact 1.png"
            alt=""
            className="absolute bottom-0 right-0"
          />
        </div>
      </div>
      
    </>
  );
};

export default Dashboard;
