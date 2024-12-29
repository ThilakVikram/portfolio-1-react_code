import ReactDom from "react-dom/client";
import "./styles.css";
import HomePage from "./pages/Home/index";

let root = ReactDom.createRoot(document.getElementById("root") as ReactDom.Container);
root.render(<HomePage/>)