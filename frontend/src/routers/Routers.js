import { Routes, Route } from "react-router-dom";
import App from "../App.js";
import Admin from "../components/Dashboard/App.js"

function Routers() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </>
  );
}

export default Routers
