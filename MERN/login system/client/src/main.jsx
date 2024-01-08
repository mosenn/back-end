import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="427261378913-kd9rda57e7l0b6jbf9tc74t678fn1rdq.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
