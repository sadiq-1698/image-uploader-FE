import "./styles.css";
import { PRESET } from "../../constants/constants";
import addImage from "../../api/uploadImage";

const ImageInput = ({ setSuccess, setUploading }) => {
  return (
    <div>
      <label className="custom-file-upload">
        <input type="file" accept="image/*" onChange={e => uploadImage(e)} />
        <span className="button-class">Choose a file</span>
      </label>
    </div>
  );

  async function uploadImage(e) {
    setUploading(true);
    let targetValue = e.target.files;
    const formData = new FormData();
    formData.append("file", targetValue[0]);
    formData.append("upload_preset", PRESET);
    const { data } = await addImage(formData);
    if (data) {
      setSuccess(true);
      setUploading(false);
    }
  }
};

export default ImageInput;
