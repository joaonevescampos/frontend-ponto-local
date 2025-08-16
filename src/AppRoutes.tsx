import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { LandingPage } from "./pages/LandingPage";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Coloque suas rotas aqui  */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}
