import axios from "axios";

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get("https://deshbord-backend.vercel.app" + url);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const catData = async (url) => {
  try{
    const {data} = await axios.get("https://deshbord-backend.vercel.app" + url);
    return data
  }catch(error){
    console.log(error);
    return error
  }
};


export const userData = async (url, fromdata) => {
  try {
    const { data } = await axios.post("https://deshbord-backend.vercel.app" + url, fromdata);
    return data;
  } catch (error) {
    console.error("POST Error:", error.response?.data || error.message);
    throw error;
  }
};

export const loginData = async (url, formData) => {
  try {
    const { data } = await axios.post("https://deshbord-backend.vercel.app" + url, formData);
    return data;
  } catch (error) {
    console.error("POST Error:", error.response?.data || error.message);
    throw error;
  }
};

