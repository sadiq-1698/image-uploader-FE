import "./styles.css";

const Loader = () => {
  return (
    <div className="loader">
      <p className="uploading">Uploading...</p>
      <div className="outer">
        <div className="inner"></div>
      </div>
    </div>
  );
};

export default Loader;
