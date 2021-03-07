import PropTypes from "prop-types";
import "./styles.css";

const UploadSuccess = ({ imageUrl }) => {
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
        <span className="button-class">Copy link</span>
      </div>
    </>
  );
};

UploadSuccess.propTypes = {
  imageUrl: PropTypes.string.isRequired
};

export default UploadSuccess;
