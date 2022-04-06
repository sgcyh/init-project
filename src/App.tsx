// export const App = () => {
//   return <h1>...</h1>;
// };

import TestCss from "./cssTest/TestCss";
import TestImage from "./imageTest/TestImage";
import EnvTest from "./envTest/EnvTest";
import {useEffect} from "react";
import icoFile from "./imageTest/image/favicon.ico";
import {Counter} from "./reloadingTest/Counter";

function App() {
  useEffect(() => {
    // favicon 설정
    const favicon: any = document.getElementById("favicon");
    favicon.href = icoFile;
  }, []);

  return (
    <div>
      <TestCss />
      <TestImage />
      <EnvTest />
      <Counter />
      <h1>...</h1>
    </div>
  );
}

export default App;
