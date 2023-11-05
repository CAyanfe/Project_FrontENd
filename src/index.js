// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import ReactDOMClient from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <MantineProvider> */}
//     <App />
//     {/* </MantineProvider> */}
//     {/* , document.getElementById("root") */}
//   </React.StrictMode>
// );

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(<App />);
