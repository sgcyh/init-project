import pngFile from "./image/logo.png";
import svgFile from "./image/yellow.svg";
import icoFile from "./image/favicon.ico";

const TestImage = () => {
  return (
    <div>
      <img src={icoFile} alt="favicon" />
      <img src={svgFile} alt="status" />
      <img src={pngFile} alt="logo" />
      <img src="./image/logo.png" alt="logo" />
    </div>
  );
};

export default TestImage;
