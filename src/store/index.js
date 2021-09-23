import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from "./reducer";
import apiMW from  "./middlewares/api";

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(apiMW)
  )
);

export default store;