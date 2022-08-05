import MainPage from "../../pages/MainPage/MainPage";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage/RegisterPage";
import { ForgotPage } from "../../pages/ForgotPage/ForgotPage";
import { ResetPage } from "../../pages/ResetPage/ResetPage";
import { AppHeader } from "../AppHeader/AppHeader";
import { ProfilePage } from "../../pages/ProfilePage/ProfilePage";
import { ProfileOrdersPage } from "../../pages/ProfileOrdersPage/ProfileOrdersPage";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { ModalIngredientsDetails } from "../ModalIngredientDetails/ModalIngredientsDetails";
import { Modal } from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { clearIngredient } from "../../services/action/ingredient";
import { getIngredients } from "../../services/action/ingredients";
const ModalSwitch = () => {
  const [ingredientsModal, openIngredientsModal] = useState<boolean>(false);
  const ingredient = useSelector((state : any) => state.ingredient.ingredient);
  const location : any = useLocation();
  const dispatch : any = useDispatch();
  const history = useHistory();
  const background = location.state && location?.state?.background;
  const openOrderModal = () => {
    openIngredientsModal(true);
  };
  const closeOrderModal = () => {
    dispatch (clearIngredient());
    openIngredientsModal(false);
    history.goBack();
  };

  useEffect(() => {
    if (ingredient) {
      openIngredientsModal(true);
    }
  }, [ingredient]);
  return (
    <div>
      <AppHeader />
      <Switch location={background || location}>
        <Route path="/" exact={true}>
          <MainPage openModal={openOrderModal} />
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
        <Route path="/ingredients/:id" exact={true}>
          <ModalIngredientsDetails />
        </Route>
        <ProtectedRoute>
          <ProfilePage />
        </ProtectedRoute>

        <Route path="/profile/orders" exact={true}>
          <ProfileOrdersPage />
        </Route>
      </Switch>
      {background && (
        <Route path="/ingredients/:id">
          <Modal
            isActive={ingredientsModal}
            handleIsActive={openOrderModal}
            closePopup={closeOrderModal}
            title="Детали ингредиента"
          >
            <ModalIngredientsDetails />
          </Modal>
        </Route>
      )}
    </div>
  );
};

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);
  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
};

export default App;