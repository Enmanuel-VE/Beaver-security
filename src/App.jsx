import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Safe from "./pages/Safe";
import SignIn from "./pages/SignIn";
import PasswordsGenerator from "./pages/PasswordsGenerator";
import Config from "./pages/Config";
import Layout from "./components/Layouts";
import CreateItem from "./pages/CreateItem";
import ShowItem from "./pages/ShowItem";

const App = () => {
  return (
    <BrowserRouter>
      <Routes path="/" element={<Layout />}>
        <Route path="/" element={<Layout />}>
          <Route path="/safe" element={<Safe />} />
          <Route path="/config" element={<Config />} />
          <Route path="/createitem" element={<CreateItem />} />
          <Route path="/passwords-generator" element={<PasswordsGenerator />} />
          <Route path="/show-item" element={<ShowItem />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
