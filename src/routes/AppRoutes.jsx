import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import App from "../App.js";
import FormSubmit from "../components/FormSubmit.jsx";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<FormSubmit />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
