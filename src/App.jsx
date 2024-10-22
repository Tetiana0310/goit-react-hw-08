import { lazy, useEffect, Suspense } from "react"; // Імпортуємо Suspense
import { Circles } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";

const Home = lazy(() => import("./pages/HomePage/HomePage"));
const Register = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const Login = lazy(() => import("./pages/LoginPage/LoginPage"));
const Contacts = lazy(() => import("./pages/ContactsPage/ContactsPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div className="loader">
      <Circles height="80" width="80" color="#4fa94d" />
    </div>
  ) : (
    <Layout>
      <Suspense
        fallback={
          <div className="loader">
            <Circles height="80" width="80" color="#4fa94d" />
          </div>
        }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/contacts" component={Register} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={Login} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
