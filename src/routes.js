import React from "react";

// Admin Imports
import MainDashboard from "views/admin/dashbord";
import StockTran from "views/admin/stock-tran";
import Profile from "views/admin/profile";
import DepositTran from "views/admin/customer-deposit";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";
import { CustomerLoan } from "views/admin/customer-loan";
import { Register } from "views/auth/Register";
import { CreatePassword } from "views/auth/CreatePassword";
import { ForgotPassword } from "views/auth/ForgotPassword";
import { ResetPassword } from "views/auth/ResetPassword";
import { CalculationTools } from "views/admin/calculation-tools";
import { DepositTrans } from "views/admin/deposit-trans";
import { LoanTrans } from "views/admin/loan-trans";

const routes = [
  {
    name: "ภาพรวม",
    layout: "/admin",
    path: "dashbord",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
    isShow:true
  },
  {
    name: "รายการหุ้น",
    layout: "/admin",
    path: "stock-trans",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <StockTran />,
    secondary: true,
    isShow:true
  },
  {
    name: "รายการเงินฝาก",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "customer-deposit",
    component: <DepositTran />,
    isShow:true
  },
  {
    name: "รายการเงินกู้",
    layout: "/admin",
    path: "customer-loan",
    icon: <MdPerson className="h-6 w-6" />,
    component: <CustomerLoan/>,
    isShow:true
  },
  {
    name: "เครื่องมือคำนวณ",
    layout: "/admin",
    path: "calculation-tools",
    icon: <MdPerson className="h-6 w-6" />,
    component: <CalculationTools/>,
    isShow:true
  },
  {
    name: "SignIn",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
    isShow:false
  },
  {
    name: "Register",
    layout: "/auth",
    path: "register",
    icon: <MdLock className="h-6 w-6" />,
    component: <Register/>,
    isShow:false
  },
  {
    name: "CreatePassword",
    layout: "/auth",
    path: "create-password",
    icon: <MdLock className="h-6 w-6" />,
    component: <CreatePassword/>,
    isShow:false
  },
  {
    name: "ForgotPassword",
    layout: "/auth",
    path: "forgot-password",
    icon: <MdLock className="h-6 w-6" />,
    component: <ForgotPassword/>,
    isShow:false
  },
  {
    name: "ResetPassword",
    layout: "/auth",
    path: "reset-password",
    icon: <MdLock className="h-6 w-6" />,
    component: <ResetPassword/>,
    isShow:false
  },
  {
    name: "ข้อมูลสมาชิกสหกรณ์",
    layout: "/admin",
    path: "profile",
    icon: <MdHome className="h-6 w-6" />,
    component: <Profile/>,
    isShow:false
  },
  {
    name: "รายการเงินฝาก",
    layout: "/admin",
    path: "deposit-trans/:id1/:id2",
    icon: <MdHome className="h-6 w-6" />,
    component: <DepositTrans/>,
    isShow:false
  },
  {
    name: "รายการเงินกู้",
    layout: "/admin",
    path: "loan-trans/:id",
    icon: <MdHome className="h-6 w-6" />,
    component: <LoanTrans/>,
    isShow:false
  },
];
export default routes;
