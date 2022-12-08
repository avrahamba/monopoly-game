import React, { useEffect } from "react";
import { Iuser } from "../redux/state";
import { placeMoveblesSrc } from "../services/board.service";

export default function PlaceMoveble(props: any) {
  const users: Iuser[] = props.userList;
  const movebleObject: placeMoveblesSrc = props.movebleObject;

  useEffect(() => {
    if (props.userMove && movebleObject.functionOnMove) {
      movebleObject.functionOnMove();
    }
    const player = users.find((user) => user.id === props.player);
    if (player && player.location === movebleObject.location) {
      if (movebleObject.functionOnStop) movebleObject.functionOnStop();
      if (movebleObject.functionOnMove) movebleObject.functionOnMove();
    }
  });
  return (
    <div className="place-moveble-cmp">
      <div className="">{movebleObject.title}</div>
      <div className="user">
        {users.map((user) => user.name)}
        {props.userMove ? props.userMove.name : ""}
      </div>
    </div>
  );
}
