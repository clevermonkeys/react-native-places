import { combineReducers, createStore } from "redux";
import places from "./reducers/places";
import placesFilter from "./reducers/placesFilter";
import navigation from "./reducers/navigation";

let reducer = combineReducers({
  places,
  placesFilter: placesFilter,
  navigation
});
let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
