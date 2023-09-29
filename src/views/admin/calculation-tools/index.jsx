import React, { useState, useEffect } from "react";

export const CalculationTools = () => {
  const [loanType, setLoanType] = useState("standard");
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [numberOfInstallments, setNumberOfInstallments] = useState("");
  const [result, setResult] = useState(null);

  const handleLoanTypeChange = (event) => {
    setLoanType(event.target.value);
  };

  const handleLoanAmountChange = (event) => {
    setLoanAmount(event.target.value);
  };

  const handleInterestRateChange = (event) => {
    setInterestRate(event.target.value);
  };

  const handleInstallmentsChange = (event) => {
    setNumberOfInstallments(event.target.value);
  };

  const handleCalculate = () => {
    calculateResult();
  };

  const handleReset = () => {
    setLoanType("standard");
    setLoanAmount("");
    setInterestRate("");
    setNumberOfInstallments("");
    setResult(null);
  };

  const calculateResult = () => {
    if (loanAmount && numberOfInstallments && interestRate) {
      const loanAmountNumber = parseFloat(loanAmount);
      const numberOfInstallmentsNumber = parseFloat(numberOfInstallments);
      const interestRateNumber = parseFloat(interestRate);

      const resultValue =
        loanAmountNumber / numberOfInstallmentsNumber +
        interestRateNumber / 100;

      setResult(resultValue.toFixed(2));
    } else {
      setResult(null);
    }
  };
  return (
    <div>
      <div className="mt-5 flex ">
        <div className="h-[50vh] w-full rounded-l-3xl bg-[#fff] p-10">
          <div className="flex text-[16px]">
            <div className="">
              <h2>ประเภทเงินกู้</h2>
              <h2>จำนวนเงินกู้</h2>
              <h2 className="text-[#fff]">v</h2>
              <h2>อัตราดอกเบี้ย (%)</h2>
              <h2>จำนวนงวด</h2>
            </div>
            <div className="">
              <label>
                <input
                  type="radio"
                  name="loanType"
                  value="standard"
                  checked={loanType === "standard"}
                  onChange={handleLoanTypeChange}
                />
                เงินกู้สามัญ
              </label>
              <label>
                <input
                  type="radio"
                  name="loanType"
                  value="emergency"
                  checked={loanType === "emergency"}
                  onChange={handleLoanTypeChange}
                />
                เงินกู้ฉุกเฉิน
              </label>
              <div>
                <input
                  type="text"
                  value={loanAmount}
                  onChange={handleLoanAmountChange}
                  className="border-sky-500 border-2"
                />
                <p>เงื่อนไข: ...</p>
              </div>
              <div>
                <input
                  type="text"
                  value={interestRate}
                  onChange={handleInterestRateChange}
                  className="border-sky-500 border-2"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={numberOfInstallments}
                  onChange={handleInstallmentsChange}
                  className="border-sky-500 border-2"
                />
              </div>
            </div>

            <div>
              <button
                onClick={handleCalculate}
                className="border border-[#23408E] bg-[#23408E] p-2 text-[#fff]"
              >
                คำนวณ
              </button>
              <button
                onClick={handleReset}
                className="border border-[#23408E] p-2 text-[#23408E]"
              >
                ล้างข้อมูล
              </button>
            </div>
          </div>
        </div>
        <div className="h-[50vh] w-[40vw] rounded-r-3xl bg-[#0E56B0]	p-10">
          <div>
            <h2 className="text-[22px] font-bold text-[#fff]">
              ผลลัพธ์การคำนวณ
            </h2>
            <div>
              <p>เงินกู้</p>
              <span>{loanAmount}</span>
              <p>ดอกเบี้ย</p>
              <span>{interestRate}</span>
            </div>
            <p>{result !== null ? result : "กรุณากรอกข้อมูล"}</p>
          </div>
        </div>
      </div>
      <div className="flex h-[15vh] w-full flex-col justify-center bg-[#F0F0F0]	">
        <p className="text-center text-[#0E56B0]">
          *การคำนวณนี้เป็นการคำนวณเบื้องต้นเท่านั้น
          และไม่รวมกับกองทุนสำรองเลี้ยงชีพ
        </p>
        <p className="text-center">
          หากต้องการคำนวณอย่างละเอียดติดต่อเจ้าหน้าที่ โทร. 02-351-1103
        </p>
      </div>
    </div>
  );
};
