import axios from "axios";
import { API } from "../constants/constants";

const addImage = async formData => {
  const response = await axios.post(API, formData);
  console.log("jinglis", response);
};

export default addImage;
