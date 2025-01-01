import "./App.css";
import Navbar from "./components/Navbar.js";

import Marketplace from "./components/Marketplace";
import Profile from "./components/Profile";
import SellNFT from "./components/SellNFT";
import NFTPage from "./components/NFTpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Navbar appears above all other content */}
      <Navbar />
      {/* Main content area */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Marketplace />} />
          <Route path="/nftPage" element={<NFTPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sellNFT" element={<SellNFT />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
