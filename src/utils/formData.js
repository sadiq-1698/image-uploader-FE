import { PRESET } from "../constants/constants";

const handleFormData = file => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", PRESET);
  return formData;
};

export default handleFormData;
