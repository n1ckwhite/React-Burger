import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {rootReducer} from "./services/reducers";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
        <App />
        </DndProvider>
      </Provider>
  </React.StrictMode>
);

reportWebVitals();
