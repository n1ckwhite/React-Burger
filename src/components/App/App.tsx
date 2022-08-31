import MainPage from "../../pages/MainPage/MainPage";
import stylesApp from "./App.module.css";
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
import { clearIngredient } from "../../services/action/ingredient";
import { getIngredients } from "../../services/action/ingredients";
import {
  useDispatch,
  useSelector,
  ILocationApp,
} from "../../services/types/index";
import { FeedPage } from "../../pages/FeedPage/FeedPage";
import { OrdersDetails } from "../OrdersDetails/OrdersDetails";

const ModalSwitch = () => {
  const [ingredientsModal, openIngredientsModal] = useState<boolean>(false);
  const [orderDetailsModal, openOrderDetailsModal] = useState<boolean>(true);
  const ingredient = useSelector((state) => state.ingredient.ingredient);
  const location: ILocationApp = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const background = location.state && location?.state?.background;
  const openOrderModal = () => {
    openIngredientsModal(true);
  };
  const closeOrderModal = () => {
    openIngredientsModal(false);
    history.goBack();
    dispatch(clearIngredient());
  };

  const openOrderDetails = () => {
    openOrderDetailsModal(true);
  };
  const closeOrderDetails = () => {
    openOrderDetailsModal(false);
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
        <Route path="/feed" exact={true}>
          <FeedPage handleModal={openOrderDetails} />
        </Route>
        <Route path="/feed/:id" exact={true}>
          <>
            <div className={stylesApp.mb}></div>
            <OrdersDetails />
          </>
        </Route>
        <Route path="/profile/orders" exact={true}>
          <ProfileOrdersPage handleModal={openOrderDetails} />
        </Route>
        <Route path="/profile/orders/:id" exact={true}>
          <ProtectedRoute>
            <>
              <div className={stylesApp.mb}></div>
              <OrdersDetails />
            </>
          </ProtectedRoute>
        </Route>
        <ProtectedRoute>
          <ProfilePage />
        </ProtectedRoute>
      </Switch>
      {background && (
        <>
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
          <Route path="/feed/:id">
            <Modal
              isActive={orderDetailsModal}
              handleIsActive={openOrderDetails}
              closePopup={closeOrderDetails}
            >
              <OrdersDetails tal={true} />
            </Modal>
          </Route>
          <Route path="/profile/orders/:id">
            <Modal
              isActive={orderDetailsModal}
              handleIsActive={openOrderModal}
              closePopup={closeOrderDetails}
            >
              <OrdersDetails tal={true} />
            </Modal>
          </Route>
        </>
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
