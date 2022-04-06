import pngFile from "./image/logo.png";
import svgFile from "./image/yellow.svg";
import icoFile from "./image/favicon.ico";

const TestImage = () => {
  return (
    <div>
      <p>이미지 테스트</p>
      <img src={icoFile} alt="favicon" />
      <img src={svgFile} alt="status" />
      <img src={pngFile} alt="logo" />
      <img src="./image/logo.png" alt="logo" />
      <img src="./images/21c68226249dc4a505dc.png" alt="logo" />
      <img src="./images/06b8624d4c8d4d0cd5b5.ico" alt="logo" />
    </div>
  );
};

export default TestImage;
