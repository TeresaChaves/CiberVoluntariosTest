import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import App from "../App.js";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
