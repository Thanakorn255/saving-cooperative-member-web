import axios from 'axios';
import { auth_cooperative } from './authService';

const apiUrl = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL: apiUrl,
});

export const getFileCustomerDeposit = async () => {
  const token = await auth_cooperative(
    `${apiUrl}/api/authentication/`,
    "Osotspa",
    "29GPJWJSnTPv.XD?"
  );
  const resp = api.get("/api/customer/customer_deposit", {
    headers: { Authorization: `Bearer ${token}` }
  });
  return resp;
  // return api.get('/api/customer/customer_deposit'); 
};