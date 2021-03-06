import "./styles.css";
import ImageDropzone from "../ImageDropzone/ImageDropzone";

const CenterCard = () => {
  return (
    <div className="center-card">
      <p className="header">Upload your image</p>
      <p className="instruction">File should be Jpeg, Png,...</p>
      <ImageDropzone />
      <p className="instruction">or</p>
    </div>
  );
};

export default CenterCard;
