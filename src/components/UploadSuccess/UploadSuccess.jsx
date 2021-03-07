import PropTypes from "prop-types";
import "./styles.css";

const UploadSuccess = ({ imageUrl }) => {
  return (
    <div className="url-container">
      <span className="url">{imageUrl}</span>
      <span className="button-class">Copy link</span>
    </div>
  );
};

UploadSuccess.propTypes = {
  imageUrl: PropTypes.string.isRequired
};

export default UploadSuccess;
