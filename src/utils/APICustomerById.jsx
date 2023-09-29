import axios from 'axios';
import { auth_cooperative } from './authService';

const apiUrl = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL: apiUrl,
});

export const getCustomerById = async (national_id) => {
  const token = await auth_cooperative(
    `${apiUrl}/api/authentication/`,
    "Osotspa",
    "29GPJWJSnTPv.XD?"
  );
  const resp = api.get("/api/customer/customer_by_id", {
    headers: { Authorization: `Bearer ${token}` },
    params: { national_id : national_id },
  });
  console.log("getCustomerById",resp);
  return resp;
  
  // return api.get('/api/customer/stock_trans'); 
};
