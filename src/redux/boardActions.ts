import { FILL_CELL_ACTION, FillCellAction } from "./boardTypes";

export function fillCell(id: number, value: number): FillCellAction {
  return {
    type: FILL_CELL_ACTION,
    payload: { id, value },
  };
}

