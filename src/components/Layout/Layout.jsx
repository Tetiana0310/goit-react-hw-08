import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/Appbar";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <main>
        {children}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
