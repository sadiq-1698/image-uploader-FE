import axios from "axios";
import { API } from "../constants/constants";

const addImage = async formData => {
  const response = await axios.post(API, formData);
  return response;
};

export default addImage;
