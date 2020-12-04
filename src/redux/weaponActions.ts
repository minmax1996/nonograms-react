import { CHANGE_WEAPON_ACTION, ChangeWeaponAction } from "./weaponTypes";

export function changeWeapon(newWeapon: number): ChangeWeaponAction {
  return {
    type: CHANGE_WEAPON_ACTION,
    payload: newWeapon,
  };
}
