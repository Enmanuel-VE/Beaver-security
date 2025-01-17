import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import GeneratorPasswords from "./pages/GeneratorPasswords";

const App = () => {
  return (
    <BrowserRouter>
      <Routes path="/" element={<div>hello wordl</div>}>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/generatorPasswords" element={<GeneratorPasswords />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
