import React, { useState } from "react";
import { connect } from "react-redux";
import { startTurn } from "../redux/actions";

const mapDispatchToProps = (dispatch: Function) => ({
  startTurn: (count: number) => dispatch(startTurn(count)),
});

function Cubes(props: any) {
  const [cubesNum, setCubesNum] = useState([1, 1]);
  const drupCubes = () => {
    const num1 = Math.floor(Math.random() * 6) + 1;
    const num2 = Math.floor(Math.random() * 6) + 1;
    props.startTurn(num1 + num2);
    // props.startTurn(4);
    setCubesNum([num1, num2]);
  };
  return (
    <button className="cubes-cmp" onClick={drupCubes}>
      <div className="cube">{cubesNum[0]}</div>
      <div className="cube">{cubesNum[1]}</div>
    </button>
  );
}

export default connect(null, mapDispatchToProps)(Cubes);
