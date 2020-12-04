import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { fillCell } from "../redux/boardActions";
import { RootState } from "../redux/rootReducer";
import { GetSymbolByValue } from "./WeaponBar";

export const Board = (props: ConnectedProps<typeof connector>) => {
  return (
    <div>
      <table style={{ border: "1px solid" }}>
        <tbody>
          {props.workingBoard.map((row) => (
            <tr key={row.map((rr) => rr.id).reduce((a, b) => a + b, 0)}>
              {row.map((element) => (
                <td style={{ border: "1px solid" }} key={element.id}>
                  <div
                    key={"eldiv" + element.id}
                    onClick={() =>
                      props.clickON(element.id, props.currentWeapon)
                    }
                  >
                    {GetSymbolByValue(element.value)}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    workingBoard: state.board.workingBoard,
    currentWeapon: state.weapon.currentWeapon,
  };
};
const mapDispatchToProps = {
  clickON: (id: number, value: number) => fillCell(id, value),
};
const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Board);
