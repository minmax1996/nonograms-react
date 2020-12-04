import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { EMPTY, FILL, X, DOT, PERMA_X } from "../redux/weaponTypes";
import { changeWeapon } from "../redux/weaponActions";
import { RootState } from "../redux/rootReducer";

export const GetSymbolByValue = (value: number) => {
  switch (value) {
    case FILL:
      return "◼︎";
    case EMPTY:
      return "_";
    case X:
    case PERMA_X:
      return "☒";
    case DOT:
      return "•";
    default:
      return " ";
  }
};

export const GetCallbackByValue = (
  value: number,
  props: ConnectedProps<typeof connector>
) => {
  switch (value) {
    case FILL:
      return props.setFill;
    case EMPTY:
      return props.setEmpty;
    case X:
      return props.setX;
    case DOT:
      return props.setDot;
    default:
      return props.setEmpty;
  }
};

const WeaponBar = (props: ConnectedProps<typeof connector>) => (
  <div>
    {props.availableWeapons.map((weap) => {
      let style = { border: "1px solid red" };
      if (weap === props.currentWeapon) {
        style = { border: "3px solid red" };
      }
      return (
        <span
          style={style}
          key={weap}
          onClick={GetCallbackByValue(weap, props)}
        >
          {GetSymbolByValue(weap)}
        </span>
      );
    })}
  </div>
);

const mapStateToProps = (state: RootState) => {
  return {
    currentWeapon: state.weapon.currentWeapon,
    availableWeapons: state.weapon.availableWeapons,
  };
};

const mapDispatchToProps = {
  setEmpty: () => changeWeapon(EMPTY),
  setFill: () => changeWeapon(FILL),
  setDot: () => changeWeapon(DOT),
  setX: () => changeWeapon(X),
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(WeaponBar);
