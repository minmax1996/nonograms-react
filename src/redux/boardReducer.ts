import {
  BoardState,
  FILL_CELL_ACTION,
  BoardTypes,
  BoardCell,
  CHECK_BOARD_ACTION,
} from "./boardTypes";
import { EMPTY, FILL, PERMA_X } from "./weaponTypes";

const hiddenBoard = [
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 1, 1, 0, 1],
];

const initialState: BoardState = {
  workingBoard: createClearWorkBoard(hiddenBoard),
  sides: getSideArrays(hiddenBoard),
  //tops: getSideArrays(transposeSideArray(hiddenBoard)),
  tops: transposeSideArray(getSideArrays(transposeSideArray(hiddenBoard))),
  top_errors: [],
  side_errors: [],
};

export const boardReducer = (state = initialState, action: BoardTypes) => {
  switch (action.type) {
    case CHECK_BOARD_ACTION:
        console.log(checkBoard(state.workingBoard, state.sides))
        return state
    case FILL_CELL_ACTION:
      return {
        ...state,
        workingBoard: state.workingBoard.map((row, _) =>
          row.map((el, _) => getNewBoardCell(el, action.payload))
        ),
      };
    default:
      return state;
  }
};

function getNewBoardCell(element: BoardCell, payload: BoardCell) {
  //not changes
  if (element.id !== payload.id || element.value === PERMA_X) return element;
  //there change
  if (element.value !== payload.value) return payload;
  //undo
  else return { ...element, value: EMPTY };
}

function createClearWorkBoard(board: number[][]): BoardCell[][] {
  let counter = 10;
  let boardC: BoardCell[][] = [];
  board.forEach((row, i) => {
    boardC.push([]);
    row.forEach((_, j) => (boardC[i][j] = { id: counter++, value: EMPTY }));
  });
  return boardC;
}

function getSideArrays(board: number[][]): number[][] {
  let sides: number[][] = [];
  for (let row = 0; row < board.length; row++) {
    let counter = 0;
    sides[row] = [];
    for (let column = 0; column < board[row].length; column++) {
      const element = board[row][column];
      if (element > 0) {
        counter++;
      } else if (counter > 0) {
        sides[row].push(counter);
        counter = 0;
      }
    }
    if (sides[row].length === 0 || counter > 0) {
      sides[row].push(counter);
    }
  }
  return sides;
}

function transposeSideArray(sides: any[][]): any[][] {
  let tsides: any[][] = [];
  for (let index = 0; index < sides[0].length; index++) {
    tsides.push([]);
  }
  sides.map((x, i) => x.map((y, j) => (tsides[j][i] = y)));
  return tsides;
}

function checkBoard(
  board: BoardCell[][],
  sides: number[][],
): [number[], number[]] {
  let side_errors: number[] = [];
  let perma_closed_ids: number[] = [];

  for (let i = 0; i < board.length; i++) {
    if (sides[i].length == 1 && sides[i][0]===0) sides[i].shift()
    for (let j = 0; j < board[i].length; j++) {
      const element = board[i][j];
    //   if (element.value === FILL) {
    //     if (sides[i].length > 0 && --sides[i][0] < 0){
    //         sides[i].shift()
    //     } else {
    //         side_errors.push(i)
    //     }
    //   }
    }
    console.log(i, sides[i],side_errors);
    
    if (sides[i].length == 0 && !side_errors.includes(i)){
        perma_closed_ids.push(i)
    }
  }


  return [side_errors, perma_closed_ids];
}
