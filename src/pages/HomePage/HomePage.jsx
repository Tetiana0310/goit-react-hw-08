import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import css from "./HomePage.module.css";

export default function HomePage() {
  const isLogged = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <section>
      <div className="container">
        {isLogged ? (
          <div className={css.LogIn}>
            <h1>
              Welcome <b>{user.name}</b>
            </h1>
          </div>
        ) : (
          <div className={css.notLogIn}>
            <h1>Welcome! Nice to meet YOU!</h1>
          </div>
        )}
      </div>
    </section>
  );
}
