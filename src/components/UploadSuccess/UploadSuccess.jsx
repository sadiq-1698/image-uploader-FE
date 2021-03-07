import { useState } from "react";

import PropTypes from "prop-types";
import "./styles.css";
import UploadedImage from "../UploadedImage/UploadedImage";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";

const UploadSuccess = ({ imageUrl }) => {
  const [toast, showToast] = useState(false);

  return (
    <>
      <div className="upload-success mrb-12">
        <i className="fa fa-check" aria-hidden="true"></i>
      </div>

      <p className="header mrb-25">Uploaded Successfully!</p>

      <UploadedImage imageUrl={imageUrl} />

      <CopyToClipboard imageUrl={imageUrl} showToast={showToast} />

      <div className="toast-wrapper">
        {toast ? <div className="toast">Copied to clipboard</div> : null}
      </div>
    </>
  );
};

UploadSuccess.propTypes = {
  imageUrl: PropTypes.string.isRequired
};

export default UploadSuccess;
