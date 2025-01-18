import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Safe from "./pages/Safe";
import Register from "./pages/Register";
import GeneratorPasswords from "./pages/GeneratorPasswords";
import Config from "./pages/Config";
import Layout from "./components/Layouts";

const App = () => {
  return (
    <BrowserRouter>
      <Routes path="/" element={<Layout />}>
        <Route path="/" element={<Layout />}>
          <Route path="/safe" element={<Safe />} />
          <Route path="/config" element={<Config />} />
          <Route path="/generator-passwords" element={<GeneratorPasswords />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
