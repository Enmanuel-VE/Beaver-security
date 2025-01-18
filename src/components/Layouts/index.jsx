import { Outlet } from "react-router-dom";
import BottomNavigationBar from "../BottomNavigationBar";

export default function Layout() {
  return (
    <div data-theme="light">
      <main>
        <Outlet />
        <BottomNavigationBar />
      </main>
    </div>
  );
}
