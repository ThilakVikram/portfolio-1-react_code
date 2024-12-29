import ReactDom from "react-dom/client";
import "./styles.css";
import HomePage from "./HomePage"

let root = ReactDom.createRoot(document.getElementById("root"));
root.render(<HomePage/>)