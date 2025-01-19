import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Safe from "./pages/Safe";
import Register from "./pages/Register";
import PasswordsGenerator from "./pages/PasswordsGenerator";
import Config from "./pages/Config";
import Layout from "./components/Layouts";
import CreateItem from "./pages/CreateItem";

const App = () => {
  return (
    <BrowserRouter>
      <Routes path="/" element={<Layout />}>
        <Route path="/" element={<Layout />}>
          <Route path="/safe" element={<Safe />} />
          <Route path="/config" element={<Config />} />
          <Route path="/createitem" element={<CreateItem />} />
          <Route path="/passwords-generator" element={<PasswordsGenerator />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
