import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { CardProvider } from "./contexts/CardContext";
import { KosarProvider } from "./contexts/KosarContext";
import { UrlapProvider } from "./contexts/UrlapContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CardProvider>
      <KosarProvider>
         <UrlapProvider>
           <App />
        </UrlapProvider>
    
      </KosarProvider>
    </CardProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
