import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import FarmPage from "./components/FarmPage";
import GraveyardPage from "./components/GraveyardPage";
import BuddydexPage from "./components/BuddydexPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/farm" element={<FarmPage />}></Route>
        <Route path="/graveyard" element={<GraveyardPage />}></Route>
        <Route path="/buddydex" element={<BuddydexPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
