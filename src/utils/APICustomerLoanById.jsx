import axios from 'axios';
import { auth_cooperative } from './authService';

const apiUrl = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL: apiUrl,
});

export const getFileCustomerLoanById = async (coop_id) => {
  const token = await auth_cooperative(
    `${apiUrl}/api/authentication/`,
    "Osotspa",
    "29GPJWJSnTPv.XD?"
  );
  const resp = api.get("/api/customer/customer_loan_by_id", {
    headers: { Authorization: `Bearer ${token}` },
    params: { coop_id: coop_id },
  });
  return resp;
  // return api.get('/api/customer/customer_deposit'); 
};