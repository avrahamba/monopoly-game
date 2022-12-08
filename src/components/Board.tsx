import React, { useState, useEffect } from "react";
import { addUser, changeManey, continueMove } from "../redux/actions";
import { connect } from "react-redux";
import PlaceCenter from "./PlaceCenter";
import PlaceMoveble from "./PlaceMoveble";
import { basicboard, movebleType } from "../services/board.service";
import { Iuser } from "../redux/state";
import Notice from "./Notice";

function downInterval(fn: Function, arr: any[], ms: number, endFn: Function) {
  if (!arr.length) {
    endFn();
    return;
  } else fn(arr[0]);
  let i = 1;
  const int = setInterval(() => {
    if (i === arr.length) {
      clearInterval(int);
      endFn();
    } else fn(arr[i]);
    i++;
  }, ms);
}

const mapDispatchToProps = (dispatch: Function) => ({
  addUser: (name: string) => dispatch(addUser(name)),
  continueMove: (step: number) => dispatch(continueMove(step)),
  changeManey: (count: number, player_id: number) =>
    dispatch(changeManey({ count, player_id })),
});

const mapStateToProps = (state: any) => {
  return state;
};

function Board(props: any) {
  useEffect(() => {
    props.addUser("avraham");
    props.addUser("Yzhak");
  }, []);
  const [player, setPlayer] = useState(0);
  const [step, setStep] = useState(-1);
  const msgSample: { msg: string; func: null | Function } = {
    msg: "",
    func: null,
  };
  const [msg, setMsg] = useState(msgSample);

  useEffect(() => {
    const { whoNow } = props.users;
    if (player === whoNow) return;
    setPlayer(whoNow);
    downInterval(
      (s: number) => {
        setStep(s);
      },
      props.users.step,
      1000,
      () => {
        setStep(-1);
      }
    );
  });
  const goTo = (loc: number) => {
    console.log("player", player);
    const users: Iuser[] = props.users.users;
    const currUser = users.find((user) => user.id === player);
    if (!currUser) return;
    const steps = (loc + 40 - currUser.location) % 40;
    setPlayer(-1);
    props.continueMove(steps);
    console.log("steps :>> ", steps);
    console.log("loc :>> ", loc);
  };
  const changeManey = (count: number) => {
    props.changeManey(count, player)
  };
  const communityChest = () => {
    console.log("community chest");
  };
  const chance = () => {
    if (msg.msg) return;
    const chanceCardList = [
      { msg: "Advance to Go (Collect $200)", func: () => goTo(0) },
      {
        msg: "Advance to Trafalgar Square. If you pass Go, collect $200",
        func: () => goTo(24),
      },
      { msg: "Advance to Mayfair", func: () => goTo(39) },
      {
        msg: "Advance to Pall Mall. If you pass Go, collect $200",
        func: () => goTo(11),
      },
      //   {
      //     msg: "Advance to the nearest Station. If unowned, you may buy it from the Bank. If owned, pay wonder twice the rental to which they are otherwise entitled",
      //     func: () => {},
      //   },
      //   {
      //     msg: "Advance to the nearest Station. If unowned, you may buy it from the Bank. If owned, pay wonder twice the rental to which they are otherwise entitled",
      //     func: () => {},
      //   },
      //   {
      //     msg: "Advance token to nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total ten times amount thrown.",
      //     func: () => {},
      //   },
      { msg: "Bank pays you dividend of $50", func: () => changeManey(50) },
      //   { msg: "Get Out of Jail Free", func: () => {} },
      //   { msg: "Go Back 3 Spaces", func: () => {} },
      //   {
      //     msg: "Go to Jail. Go directly to Jail, do not pass Go, do not collect $200",
      //     func: () => {},
      //   },
      //   {
      //     msg: "Make general repairs on all your property. For each house pay $25. For each hotel pay $100",
      //     func: () => {},
      //   },
      //   { msg: "Speeding fine $15", func: () => changeManey(15) },
      //   {
      //     msg: "Take a trip to Kings Cross Station. If you pass Go, collect $200",
      //     func: () => {},
      //   },
      //   {
      //     msg: "You have been elected Chairman of the Board. Pay each player $50",
      //     func: () => {},
      //   },
      //   { msg: "Your building loan matures. Collect $150", func: () => {} },
    ];
    const card =
      chanceCardList[Math.floor(Math.random() * chanceCardList.length)];
    setMsg(card);
    // if (card.func) card.func();
  };
  const goTojail = () => {
    console.log("goTojail");
  };

  const movebleList = basicboard.map((moveble) => {
    if (moveble.type === movebleType.function) {
      switch (moveble.location) {
        case 0:
          moveble.functionOnMove = () => changeManey(200);
          break;
        case 2:
        case 17:
        case 33:
          moveble.functionOnStop = communityChest;
          break;
        case 4:
          moveble.functionOnStop = () => changeManey(-200);
          break;
        case 7:
        case 22:
        case 36:
          moveble.functionOnStop = chance;
          break;
        case 30:
          moveble.functionOnStop = goTojail;
          break;
        case 38:
          moveble.functionOnStop = () => changeManey(-100);
          break;
      }
    }
    return moveble;
  });
  const users: Iuser[] = props.users.users;
  const userOnMove = users.find((user) => user.id === props.users.whoNow);
  return (
    <>
      <div className="board-cmp">
        <PlaceCenter />
        {movebleList.map((moveble) => (
          <PlaceMoveble
          key={moveble.location}
            movebleObject={moveble}
            userList={users.filter(
              (user) =>
                user.location === moveble.location &&
                (player !== user.id || step === -1)
            )}
            userMove={step === moveble.location ? userOnMove : 0}
            player={props.users.whoNow === player ? player : -1}
          ></PlaceMoveble>
        ))}
      </div>
      {msg.msg ? (
        <Notice
          onClick={() => {
            setMsg({ func: null, msg: "" });
            if (msg.func) msg.func();
          }}
          msg={msg.msg}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
