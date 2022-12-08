export interface Idispatch {
  type: string;
  payload: any;
}

/*
 * action types
 */
export const ADD_USER = "ADD_USER";
export const START_TURN = "START_TURN";
export const CONTINUE_MOVE = "CONTINUE_MOVE";
export const CHANGE_MANEY = "CHANGE_MANEY";



/*
 * action creatord
 */

export function addUser(name: string): Idispatch {
  return { type: ADD_USER, payload: name };
}
export function startTurn(count: number): Idispatch {
  return { type: START_TURN, payload: count };
}
export function continueMove(count: number): Idispatch {
  return { type: CONTINUE_MOVE, payload: count };
}
export function changeManey({count, player_id}:{count: number, player_id: number}): Idispatch {
  return { type: CHANGE_MANEY, payload: {count, player_id} };
}
