import MainPage from "../../pages/MainPage/MainPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage/RegisterPage";
import { ForgotPage } from "../../pages/ForgotPage/ForgotPage";
import { ResetPage } from "../../pages/ResetPage/ResetPage";
import { AppHeader } from "../AppHeader/AppHeader";
import { ProfilePage } from "../../pages/ProfilePage/ProfilePage";
import { ProfileOrdersPage } from "../../pages/ProfileOrdersPage/ProfileOrdersPage";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";

export const App = () => {
  return (
    <div>
      <Router>
        <AppHeader />
        <Switch>
          <Route path="/" exact={true}>
            <MainPage />
          </Route>
          <Route path="/login" exact={true}>
            <LoginPage />
          </Route>
          <Route path="/register" exact={true}>
            <RegisterPage />
          </Route>
          <Route path="/forgot-password" exact={true}>
          <ForgotPage />
          </Route>
          <Route path="/reset-password" exact={true}>
          <ResetPage />
          </Route>
          <ProtectedRoute route="/login">
          <ProfilePage/>
          </ProtectedRoute>
          <Route path="/profile/orders" exact={true}>
          <ProfileOrdersPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
