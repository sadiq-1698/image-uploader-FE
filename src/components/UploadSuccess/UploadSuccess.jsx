import { useState } from "react";

import PropTypes from "prop-types";
import "./styles.css";

const UploadSuccess = ({ imageUrl }) => {
  const [toast, showToast] = useState(false);

  return (
    <>
      <div className="upload-success mrb-12">
        <i class="fa fa-check" aria-hidden="true"></i>
      </div>
      <p className="header mrb-25">Uploaded Successfully!</p>
      <div
        className="img-container"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="url-container">
        <span className="url">{imageUrl}</span>
        <span className="button-class" onClick={copyToClipboard}>
          Copy link
        </span>
      </div>
      <div className="toast-wrapper">
        {toast ? <div className="toast">Copied to clipboard</div> : null}
      </div>
    </>
  );

  function copyToClipboard() {
    navigator.clipboard.writeText(imageUrl);
    showToast(true);
    setTimeout(() => {
      showToast(false);
    }, 1500);
  }
};

UploadSuccess.propTypes = {
  imageUrl: PropTypes.string.isRequired
};

export default UploadSuccess;
