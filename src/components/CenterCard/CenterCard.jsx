import "./styles.css";
import ImageDropzone from "../ImageDropzone/ImageDropzone";
import ImageInput from "../ImageInput/ImageInput";

const CenterCard = () => {
  return (
    <div className="center-card">
      <p className="header">Upload your image</p>
      <p className="instruction">File should be Jpeg, Png,...</p>
      <ImageDropzone />
      <p className="instruction mrb-21">or</p>
      <ImageInput />
    </div>
  );
};

export default CenterCard;
