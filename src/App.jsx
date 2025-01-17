import { BrowserRouter, Route, Routes } from "react-router-dom";
import A from "./pages/a";
import B from "./pages/b";
import C from "./pages/c";

const App = () => {
  return (
    <BrowserRouter>
      <Routes path="/" element={<div>hello wordl</div>}>
        <Route path="/a" element={<A />} />
        <Route path="/b" element={<B />} />
        <Route path="/c" element={<C />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
