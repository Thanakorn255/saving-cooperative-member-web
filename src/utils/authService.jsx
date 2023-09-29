import axios from "axios";

export const auth_cooperative = async (url, username, password) => {
  try {
    const resp = await axios.post(url, {
      username: username,

      password: password,
    });
    console.log("Auth" ,resp.data.data);
    return resp.data.data;
  } catch (error) {
    throw error;
  }
};
