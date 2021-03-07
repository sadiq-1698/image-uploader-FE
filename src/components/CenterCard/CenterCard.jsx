import { useState } from "react";
import ImageDropzone from "../ImageDropzone/ImageDropzone";
import ImageInput from "../ImageInput/ImageInput";
import Loader from "../Loader/Loader";
import UploadSuccess from "../UploadSuccess/UploadSuccess";
import "./styles.css";

const CenterCard = () => {
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [url, setUrl] = useState("");

  return (
    <div className="center-card">
      {uploading ? (
        <Loader />
      ) : (
        <>
          {!success ? (
            <>
              <p className="header">Upload your image</p>
              <p className="instruction">File should be Jpeg, Png,...</p>
              <ImageDropzone />
              <p className="instruction mrb-21">or</p>
              <ImageInput
                setSuccess={setSuccess}
                setUploading={setUploading}
                setUrl={setUrl}
              />
            </>
          ) : (
            <UploadSuccess imageUrl={url} />
          )}
        </>
      )}
    </div>
  );
};

export default CenterCard;
