import ReactDom from "react-dom/client";
// import ChessBoard from "./chess";
import "./styles.css";
import App from "./App";

let root = ReactDom.createRoot(document.getElementById("root") as HTMLElement);

root.render(<App/>)