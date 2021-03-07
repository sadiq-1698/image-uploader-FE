import PropTypes from "prop-types";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import handleFormData from "../../utils/formData";
import addImage from "../../api/uploadImage";

import "./styles.css";

const ImageDropzone = ({ setUrl, setSuccess, setUploading }) => {
  const updateStates = useCallback(
    data => {
      setUrl(data.secure_url);
      setSuccess(true);
      setUploading(false);
    },
    [setUrl, setSuccess, setUploading]
  );

  const onDrop = useCallback(
    async acceptedFiles => {
      setUploading(true);
      const formData = handleFormData(acceptedFiles[0]);
      const { data } = await addImage(formData);
      if (data) updateStates(data);
    },
    [setUploading, updateStates]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false
  });

  return (
    <div
      {...getRootProps()}
      className={`image-dropzone ${isDragActive ? "active" : ""}`}
    >
      <input {...getInputProps()} />
      <img
        src={process.env.PUBLIC_URL + "/image.svg"}
        alt="marvel-logo"
        width="150px"
        height="75px"
      />
      <p className="dropzone-instruction">Drag & Drop your image here</p>
    </div>
  );
};

ImageDropzone.propTypes = {
  setSuccess: PropTypes.func.isRequired,
  setUploading: PropTypes.func.isRequired,
  setUrl: PropTypes.func.isRequired
};

export default ImageDropzone;
