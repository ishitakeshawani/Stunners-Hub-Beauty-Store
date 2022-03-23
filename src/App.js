import { Homepage, Navbar } from "./Components";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products from "./Components/Products/Products";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
