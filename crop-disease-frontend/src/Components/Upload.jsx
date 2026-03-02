import { useState, useEffect } from "react";
import "./Upload.css";

function Upload({ addHistory, reset }) {
  const [image, setImage] = useState(null);
  const [disease, setDisease] = useState("");
  const [remedy, setRemedy] = useState("");

  // Reset state when `reset` prop changes
  useEffect(() => {
    setImage(null);
    setDisease("");
    setRemedy("");
  }, [reset]);

  // Handle file upload
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(URL.createObjectURL(file));

    // TEMP fake detection result
    const detected = "Leaf Blight";
    const solution = "Use fungicide and remove infected leaves.";

    setDisease(detected);
    setRemedy(solution);

    addHistory(`${file.name} → ${detected}`);
  };

  return (
    <div className="main">
      <div className="glass">
        {!image && (
          <label className="upload-btn">
            Detect Disease
            <input type="file" hidden onChange={handleUpload} />
          </label>
        )}

        {image && <img src={image} className="preview" />}

        {disease && (
          <div className="result">
            <h3>Disease: {disease}</h3>
            <p>Remedy: {remedy}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Upload;
