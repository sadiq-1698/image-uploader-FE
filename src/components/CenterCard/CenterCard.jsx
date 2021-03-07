import { useState } from "react";
import ImageDropzone from "../ImageDropzone/ImageDropzone";
import ImageInput from "../ImageInput/ImageInput";
import "./styles.css";

const CenterCard = () => {
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <div className="center-card">
      {uploading ? (
        <p>Loading...</p>
      ) : (
        <>
          {!success ? (
            <>
              <p className="header">Upload your image</p>
              <p className="instruction">File should be Jpeg, Png,...</p>
              <ImageDropzone />
              <p className="instruction mrb-21">or</p>
              <ImageInput setSuccess={setSuccess} setUploading={setUploading} />
            </>
          ) : (
            <div>Success</div>
          )}
        </>
      )}
    </div>
  );
};

export default CenterCard;
