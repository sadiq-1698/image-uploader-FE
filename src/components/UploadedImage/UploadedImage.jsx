import PropTypes from "prop-types";
import "./styles.css";

const UploadedImage = ({ imageUrl }) => {
  return (
    <div
      className="img-container"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  );
};

UploadedImage.propTypes = {
  imageUrl: PropTypes.string.isRequired
};

export default UploadedImage;
