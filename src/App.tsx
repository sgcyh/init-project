// export const App = () => {
//   return <h1>...</h1>;
// };

import TestCss from "./cssTest/TestCss";
import TestImage from "./imageTest/TestImage";
import EnvTest from "./envTest/EnvTest";

function App() {
  return (
    <div>
      <TestCss />
      <TestImage />
      <EnvTest />
      <h1>...</h1>
    </div>
  );
}

export default App;
