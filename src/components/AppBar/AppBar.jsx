import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <header className={css.header}>
      <Navigation />
      <div className={css.wrapper}>
        {isLoggedIn ? (
          <>
            <span className={css.welcome}>
              Welcome, {user.name || user.email}!
            </span>
            <UserMenu />
          </>
        ) : (
          <AuthNav />
        )}
      </div>
    </header>
  );
};

export default AppBar;
