import PropTypes from "prop-types";

import addImage from "../../api/uploadImage";
import handleFormData from "../../utils/formData";

import "./styles.css";

const ImageInput = ({ setSuccess, setUploading, setUrl }) => {
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
    const formData = handleFormData(targetValue[0]);
    const { data } = await addImage(formData);
    if (data) {
      setUrl(data.secure_url);
      setSuccess(true);
      setUploading(false);
    }
  }
};

ImageInput.propTypes = {
  setSuccess: PropTypes.func.isRequired,
  setUploading: PropTypes.func.isRequired,
  setUrl: PropTypes.func.isRequired
};

export default ImageInput;
