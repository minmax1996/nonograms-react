export const FILL = 10;
export const EMPTY = 0;
export const X = -1;
export const PERMA_X = -2;
export const DOT = 5;

export const CHANGE_WEAPON_ACTION = "WEAPON/CHANGE_WEAPON_ACTION";

export interface WeaponState {
  currentWeapon: number;
  availableWeapons: number[];
}

export interface ChangeWeaponAction {
  type: typeof CHANGE_WEAPON_ACTION;
  payload: number;
}

export type WeaponTypes = ChangeWeaponAction;
