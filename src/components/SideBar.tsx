import React from "react";
import { RootState } from "../redux/rootReducer";
import { connect, ConnectedProps } from "react-redux";

export const SideBar = (props: ConnectedProps<typeof connector>) => {
  return RenderSideBar(props.sides, [], props.side_errors);
};

export const RenderSideBar = (
  sides: number[][],
  col_errors: number[],
  row_errors: number[],
  id_initial: number = 1
) => {
  let counter = id_initial;
  let initial_class = "";
  return (
    <div>
      <table style={{ border: "1px solid" }}>
        <tbody>
          {sides.map((row, i) => (
            <tr key={"tr" + counter++}>
              {row.map((element, j) => (
                <td
                  style={{ border: "1px solid" }}
                  key={"el" + counter++}
                  className={
                    col_errors.includes(j) || row_errors.includes(i)
                      ? initial_class + " errorClass"
                      : initial_class
                  }
                >
                  {element}
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
    sides: state.board.sides,
    side_errors: state.board.side_errors,
  };
};
const mapDispatchToProps = {
  clickON: () => console.log(11),
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(SideBar);
