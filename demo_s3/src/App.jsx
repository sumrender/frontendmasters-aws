import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function Comp({ comp }) {
  return (
    <div className="comp">
      <p>You are at {comp}</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Comp comp="Home" />} />
        <Route path="/about" element={<Comp comp="About" />} />
        <Route path="/contact" element={<Comp comp="Contact" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
