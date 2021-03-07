import PropTypes from "prop-types";
import "./styles.css";

const CopyToClipboard = ({ imageUrl, showToast }) => {
  return (
    <div className="url-container">
      <span className="url">{imageUrl}</span>
      <span className="button-class" onClick={copyToClipboard}>
        Copy link
      </span>
    </div>
  );

  function copyToClipboard() {
    navigator.clipboard.writeText(imageUrl);
    showToast(true);
    setTimeout(() => {
      showToast(false);
    }, 1500);
  }
};

CopyToClipboard.propTypes = {
  imageUrl: PropTypes.string.isRequired
};

export default CopyToClipboard;
