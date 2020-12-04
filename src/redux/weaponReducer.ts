import {
  FILL,
  CHANGE_WEAPON_ACTION,
  EMPTY,
  DOT,
  X,
  WeaponState,
  WeaponTypes,
} from "./weaponTypes";

const initialState: WeaponState = {
  currentWeapon: FILL,
  availableWeapons: [FILL, EMPTY, X, DOT],
};

export const weaponReducer = (state = initialState, action: WeaponTypes) => {
  switch (action.type) {
    case CHANGE_WEAPON_ACTION:
      return { ...state, currentWeapon: action.payload };
    default:
      return state;
  }
};
