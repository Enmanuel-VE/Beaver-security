import { Outlet } from "react-router-dom";
import BottomNavigationBar from "../BottomNavigationBar";

const Layout = () => {
  return (
    <div data-theme="light">
      <main>
        <Outlet />
        <BottomNavigationBar />
      </main>
    </div>
  );
};
export default Layout;
