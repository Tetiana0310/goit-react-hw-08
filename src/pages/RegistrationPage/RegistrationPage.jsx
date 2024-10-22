import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleRegistration = (values) => {
    dispatch(register(values));
  };

  return (
    <section>
      <div className="container">
        <h1>Registration</h1>
        <RegistrationForm onSubmit={handleRegistration} />
      </div>
    </section>
  );
};

export default RegistrationPage;
