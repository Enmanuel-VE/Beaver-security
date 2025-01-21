import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Safe from "./pages/Safe";
import SignIn from "./pages/SignIn";
import PasswordsGenerator from "./pages/PasswordsGenerator";
import Config from "./pages/Config";
import Layout from "./components/Layouts";
import CreateItem from "./pages/CreateItem";
import ItemDetail from "./pages/ItemDetail";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/" element={<Layout />}>
          <Route path="/safe" element={<Safe />} />
          <Route path="/safe/:itemId" element={<ItemDetail />} />

          <Route path="/safe/create-item" element={<CreateItem />} />
          <Route path="/config" element={<Config />} />
          <Route path="/passwords-generator" element={<PasswordsGenerator />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
