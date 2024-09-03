import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavbarComponents/Navbar";
import MainContent from "./components/MainContent/MainContent";
import Login from "./components/AuthorizationComponents/LoginForm";
import Register from "./components/AuthorizationComponents/RegisterForm";
import Footer from "./components/Footer/Footer";
import Updates from "./components/UpdatesComponents/Updates";
import CardDetailPage from "./components/GamesComponents/GameDetail/CardDetailPage";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/home" element={<MainContent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/game/:id" element={<CardDetailPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
