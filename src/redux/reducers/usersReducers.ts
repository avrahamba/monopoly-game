import {
  ADD_USER,
  CHANGE_MANEY,
  CONTINUE_MOVE,
  Idispatch,
  START_TURN,
} from "../actions";
import { Istate, Iuser } from "../state";

function newState(): Istate {
  return {
    users: [],
    whoNow: 0,
    step: [],
  };
}

function manageList(state: Istate, action: Idispatch) {
  if (!state) state = newState();

  switch (action.type) {
    case ADD_USER:
      const oldUsers = state.users || [];
      const newUser: Iuser = {
        name: action.payload,
        id: oldUsers.length,
        maney: 200,
        location: 0,
      };
      return {
        ...state,
        users: oldUsers.concat(newUser),
      };
    case START_TURN: {
      let player = state.whoNow + 1;
      if (player === state.users.length) {
        player = 0;
      }
      const step = [];
      const users = state.users;
      const currUser = users.find((user) => user.id === player);
      if (!currUser) return state;
      const location = currUser.location;
      for (let i = location + 1; i < location + action.payload; i++) {
        step.push(i % 40);
      }
      currUser.location = (currUser.location + action.payload) % 40;
      return { ...state, users, step, whoNow: player };
    }
    case CONTINUE_MOVE: {
      let player = state.whoNow;
      const step = [];
      const users = state.users;
      const currUser = users.find((user) => user.id === player);
      if (!currUser) return state;
      const location = currUser.location;
      for (let i = location + 1; i < location + action.payload; i++) {
        step.push(i % 40);
      }
      currUser.location = (currUser.location + action.payload) % 40;
      return { ...state, users, step, whoNow: player };
    }
    case CHANGE_MANEY:
      const { count, player_id }: { count: number; player_id: number } =
      action.payload;
      const user = state.users.find((u) => u.id === player_id);
      if (!user) return state;
      user.maney += count;
      return state;
    default:
      return state;
  }
}

export default manageList;
