import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-q0h0gw3ao1j353ab.us.auth0.com"
      clientId="yZz0NMdZ7IJ35figaAcjNQfHPbBoMj1y"
      authorizationParams={{
        redirect_uri: "https://estateflow.vercel.app/"
      }}
      audience="https://estateflow-backend.vercel.app"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
