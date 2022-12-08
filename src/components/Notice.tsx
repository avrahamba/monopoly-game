import React, { useState } from "react";

export default function Notice(props: any) {
  return <div className="notice-cmp">{props.msg}
  <button onClick={props.onClick}>OK</button>
  </div>;
}
