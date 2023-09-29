import axios from "axios";
import { auth_cooperative } from "./authService";

const apiUrl = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL: apiUrl,
});

export const getFileLoanTrans = async (
  coop_id,
  loan_id,
) => {
  const token = await auth_cooperative(
    `${apiUrl}/api/authentication/`,
    "Osotspa",
    "29GPJWJSnTPv.XD?"
  );
  const resp = api.get("/api/customer/loan_trans_by_id", {
    headers: { Authorization: `Bearer ${token}` },
    params: {
      coop_id: coop_id,
      loan_id: loan_id,
    },
  });
  return resp;
  // return api.get('/api/customer/stock_trans');
};
