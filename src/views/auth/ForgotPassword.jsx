import React from 'react'
import InputField from "components/fields/InputField";

export const ForgotPassword = () => {
  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-end">
    {/* Sign in section */}
    <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
      <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
      ตรวจสอบบัญชีของคุณ
      </h4>
      <p className="mb-9 ml-1 text-base text-gray-600">
      โปรดป้อนเลขทะเบียนสมาชิกและเลขบัตรประจำตัวประชาชนของคุณ
เพื่อตรวจสอบบัญชีของคุณ
      </p>
      {/* Email */}
      <InputField
        variant="auth"
        extra="mb-3"
        label="เลขทะเบียนสมาชิก*"
        placeholder="mail@simmmple.com"
        id="email"
        type="text"
      />

      <InputField
        variant="auth"
        extra="mb-3"
        label="เลขบัตรประจำตัวประชาชน*"
        placeholder=""
        id="interID"
        type="text"
      />
      <a href="http://localhost:3000/auth/reset-password">
        <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          ต่อไป
        </button>
      </a>
    </div>
  </div>
  )
}
