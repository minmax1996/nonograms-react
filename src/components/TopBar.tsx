import { RootState } from "../redux/rootReducer";
import { connect, ConnectedProps } from "react-redux";

import { RenderSideBar } from "./SideBar";

export const TopBar = (props: ConnectedProps<typeof connector>) => {
  return RenderSideBar(props.tops,props.top_errors, [],1000);
};

const mapStateToProps = (state: RootState) => {
  return {
    tops: state.board.tops,
    top_errors: state.board.top_errors,
  };
};

const mapDispatchToProps = {
  clickON: () => console.log(11),
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(TopBar);
