import DataSet from "../sample-data";

// REDUCER -> DESCRIBE HOW ACTION WILL AFFECT/MODIFY STORE

// ADD NEW CONNECTION
const initialState = DataSet;

export default function addCxn(state = initialState, { type, payload }) {
  switch (type) {
    case "SAVE":
      return state; // RETURN NEW CONNECTION FORM DATA

    default:
      return state;
  }
}