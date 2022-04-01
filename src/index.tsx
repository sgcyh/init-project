// Before - React 18
// import ReactDOM from "react-dom";
// import App from "./App";
// ReactDOM.render(<App />, document.getElementById("root"));

// After - React 18
import {createRoot} from "react-dom/client";
import App from "./App";
const container = document.getElementById("root");
if (container) {
  createRoot(container).render(<App />);
}

// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html
