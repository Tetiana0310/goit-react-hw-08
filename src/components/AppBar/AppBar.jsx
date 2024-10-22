import React from "react";
import css from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

const AppBar = () => {
  const username = useSelector(selectUser);
  return (
    <header className={css.header}>
      <Navigation />
      <div className={css.wrapper}>
        {selectIsLoggedIn ? (
          <>
            <span className={css.welcome}>Welcome, {username}!</span>
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
