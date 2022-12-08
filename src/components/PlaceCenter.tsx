import React from "react";
import { connect } from "react-redux";
import { Iuser } from "../redux/state";
import Cubes from "./Cubes";

const mapStateToProps = (state: any) => {
  return state;
};

function PlaceCenter(props: any) {
  const users: Iuser[] = props.users.users;
  const user = users.find((user) => user.id === props.users.whoNow);
  return (
    <div className="place-center-cmp">
      {user?.name} turn
      <Cubes />
      {
        users.map(user=>(<div key={user.id}>
          {user.name}: {user.maney}
        </div>))
      }
    </div>
  );
}
export default connect(mapStateToProps, null)(PlaceCenter);
