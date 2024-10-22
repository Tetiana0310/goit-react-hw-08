import { Outlet } from "react-router-dom";
import Appbar from "../AppBar/Appbar";

const Layout = ({ children }) => {
  return (
    <>
      <Appbar />
      <main>
        {children}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
