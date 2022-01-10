import DataSet from "../stop-data";

// ADD NEW CONNECTION
const initialState = DataSet;

export default function addCxn(state = initialState, { type, payload }) {
  switch (type) {
    case "SAVE":
      return state; // RETURN STATE + NEW CONNECTION FORM DATA

    default:
      return state;
  }
}