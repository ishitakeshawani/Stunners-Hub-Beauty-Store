import { Homepage, Navbar, Login, Signup, Cart } from "./Components";
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
