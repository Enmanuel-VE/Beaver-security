import { Outlet } from "react-router-dom";
import BottomNavigationBar from "../BottomNavigationBar";

const Layout = () => {
  return (
    <main
      data-theme="light"
      className="bg-[#f1f1f1f1] w-full flex justify-center h-full min-h-screen"
    >
      <div className="w-full max-w-xs ">
        <Outlet />
      </div>
      <BottomNavigationBar />
    </main>
  );
};
export default Layout;
