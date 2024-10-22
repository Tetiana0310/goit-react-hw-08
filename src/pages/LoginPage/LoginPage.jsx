import React from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  console.log("Rendering LoginPage");
  const dispatch = useDispatch();

  const handleLogin = (values) => {
    dispatch(logIn(values));
  };

  return (
    <section>
      <div className="container">
        <LoginForm onSubmit={handleLogin} />
      </div>
    </section>
  );
};

export default LoginPage;
