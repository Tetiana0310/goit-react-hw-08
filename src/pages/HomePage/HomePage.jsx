import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from "./HomePage.module.css";

const HomePage = () => {
  const user = useSelector(selectUser);

  return (
    <div className={css.container}>
      {user ? (
        <div className={css.LogIn}>
          <h1>Welcome, {user.name || user.email}!</h1>
        </div>
      ) : (
        <div className={css.notLogIn}>
          <h1>Please log in to see personalized content.</h1>
        </div>
      )}
    </div>
  );
};

export default HomePage;
