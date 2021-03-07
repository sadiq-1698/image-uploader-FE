import PropTypes from "prop-types";
import "./styles.css";

const UploadSuccess = ({ imageUrl }) => {
  return (
    <>
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
