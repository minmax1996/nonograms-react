import { combineReducers } from "redux";
import { boardReducer } from "./boardReducer";
import { weaponReducer } from "./weaponReducer";

export const rootReducer = combineReducers({
  board: boardReducer,
  weapon: weaponReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
