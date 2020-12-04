export const FILL_CELL_ACTION = "BOARD/FILL_CELL_ACTION";
export const CHECK_BOARD_ACTION = "BOARD/CHECK_BOARD_ACTION";

export interface BoardState {
  workingBoard: BoardCell[][];
  tops: number[][];
  sides: number[][];
  top_errors: number[];
  side_errors: number[];
}

export type BoardCell = {
  id: number;
  value: number;
};

export interface FillCellAction {
  type: typeof FILL_CELL_ACTION;
  payload: BoardCell;
}

export interface CheckBoardAction {
  type: typeof CHECK_BOARD_ACTION;
  payload: any;
}

export type BoardTypes = FillCellAction | CheckBoardAction;
