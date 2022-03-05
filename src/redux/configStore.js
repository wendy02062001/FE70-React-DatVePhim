import { combineReducers, createStore } from "redux";
import { datVePhimReducer } from "./datVePhimReducer";

const rootReducer = combineReducers({
  //Nơi chứa các state của ứng dụng
  datVePhimReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
