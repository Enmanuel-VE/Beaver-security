import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Safe from "./pages/Safe";
import Register from "./pages/Register";
import GeneratorPasswords from "./pages/GeneratorPasswords";

const App = () => {
  return (
    <BrowserRouter>
      <Routes path="/" element={<div>hello wordl</div>}>
        <Route path="/safe" element={<Safe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/generatorPasswords" element={<GeneratorPasswords />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
