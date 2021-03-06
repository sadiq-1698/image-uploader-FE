import "./styles.css";

const ImageInput = () => {
  return (
    <div>
      <label class="custom-file-upload">
        <input type="file" accept="image/*" />
        <span className="button-class">Choose a file</span>
      </label>
    </div>
  );
};

export default ImageInput;
