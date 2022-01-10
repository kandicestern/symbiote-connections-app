import { createStore } from "redux";
import addCxn from "./addCxn";
import DataSet from "../stop-data";
// STORE -> GLOBALISED STATE

// ACTION -> SAVE CONNECTION
const newCxn = () => ({
  type: "SAVE",
});


// DISPATCH -> SENDS ACTION TO REDUCER
//store.dispatch(newCxn());
