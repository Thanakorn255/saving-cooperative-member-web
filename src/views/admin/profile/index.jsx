const ProfileOverview = () => {
  return (
    <>
      <div className="mt-5 ">
        <h1 className="mb-3 text-[20px] font-bold text-[#23408E]">
          รายละเอียดข้อมูลสมาชิก
        </h1>
        <div className="grid  grid-rows-2 grid-flow-col gap-4 min-h-[200px] w-full 	rounded-3xl bg-[#fff]	p-8 ">
          <div className="mr-10">
            <h1 className="text-[#595959]">ทะเบียนสมาชิก</h1>
            <p className="text-[18px]">07249</p>
          </div>
          <div className="mr-10">
            <h1 className="text-[#595959]">ชื่อ-นามสกุล</h1>
            <p className="text-[18px]">นายวีระยุทธ วงษ์จันทร์</p>
          </div>
          <div className="mr-10">
            <h1 className="text-[#595959]">หน่วยสมาชิก</h1>
            <p className="text-[18px]">116000</p>
          </div>
          <div className="mr-10">
            <h1 className="text-[#595959]">ระดับ</h1>
            <p className="text-[18px]">-</p>
          </div>
          <div className="mr-10">
            <h1 className="text-[#595959]">ตำแหน่ง</h1>
            <p className="text-[18px]">ผู้ช่วยหัวหน้าแผนกผสมเครื่อง</p>
          </div>
          <div className="mr-10">
            <h1 className="text-[#595959]">หน่วย</h1>
            <p className="text-[18px]">Beverage Mixing (บริษัท โอสถสภา จำกัด)</p>
          </div>
          <div className="mr-10">
            <h1 className="text-[#595959]">ประเภท</h1>
            <p className="text-[18px]">ปกติ</p>
          </div>
          <div className="mr-10">
            <h1 className="text-[#595959]">วันที่เป็นสมาชิก</h1>
            <p className="text-[18px]">12/03/2556</p>
          </div>

          <div className="mr-10">
            <h1 className="text-[#595959]">อายุสมาชิก</h1>
            <p className="text-[18px]">10 ปี 3 เดือน </p>
          </div>
          <div className="mr-10">
            <h1 className="text-[#595959]">วันที่ลาออก</h1>
            <p className="text-[18px]">-</p>
          </div>
        </div>
      </div>
      <div className="flex mt-8  ">
        <div >
          <h1 className="mb-3 text-[20px] font-bold text-[#23408E]">
            รายละเอียดข้อมูลบัญชี
          </h1>
          <div className="grid  grid-rows-2 grid-flow-col gap-4 min-h-[200px] w-full	rounded-3xl bg-[#fff]	p-8 ">
            <div className="mr-10">
              <h1 className="text-[#595959]">หุ้นรายเดือน</h1>
              <p className="text-[18px]">1,000.00</p>
            </div>
            <div className="mr-10">
              <h1 className="text-[#595959]">สถานะหุ้น</h1>
              <p className="text-[18px]">ปกติ</p>
            </div>
            <div className="mr-10">
              <h1 className="text-[#595959]">ทุนเรือนหุ้น</h1>
              <p className="text-[18px]">123,200.00</p>
            </div>
            <div className="mr-10">
              <h1 className="text-[#595959]">งวดหุ้น</h1>
              <p className="text-[18px]">123</p>
            </div>
            <div className="mr-10">
              <h1 className="text-[#595959]">ดอกเบี้ยสะสม</h1>
              <p className="text-[18px]">15,261.50</p>
            </div>
          </div>
        </div>
        <div className="ml-8">
          <h1 className="mb-3 text-[20px] font-bold text-[#23408E]">
            รายละเอียดข้อมูลส่วนตัว
          </h1>
          <div className="grid  grid-rows-2 grid-flow-col gap-4  min-h-[200px] w-full 	rounded-3xl bg-[#fff]	p-8 ">
            <div className="mr-10">
              <h1 className="text-[#595959]">วันเกิด</h1>
              <p className="text-[18px]">20/04/2525</p>
            </div>
            <div className="mr-10">
              <h1 className="text-[#595959]">อายุ</h1>
              <p className="text-[18px]">41 ปี 1 เดือน</p>
            </div>
            <div className="mr-10">
              <h1 className="text-[#595959]">ที่อยู่</h1>
              <p className="text-[18px]">1/1 ต.ขวัญเมือง อ.บางปะหัน 
              จ.พระนครศรีอยุธยา 13220</p>
            </div>
            <div className="mr-10">
              <h1 className="text-[#595959]">ผู้รับผลประโยชน์</h1>
              <p className="text-[18px]">คลิกเพื่อดูผู้รับผลประโยชน์</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileOverview;
