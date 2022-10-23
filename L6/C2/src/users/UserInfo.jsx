import React from "react";
import { connect } from "react-redux";
import { showSpinner } from "../users.actions";
import Spinner from "./Spinner";

const UserInfo = ({ userData, isFetching }) => {
  if (isFetching) {
    return <Spinner />;
  }

  if (!userData) {
    return null;
  }

  return (
    <div className="user">
      <img
        alt="User Avatar"
        src={userData.avatar_url}
        className="user__avatar"
      />
      <div className="user__info">
        <span className="user__name">{userData.name}</span>
        <span className="user__location">{userData.location}</span>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    userData: state.userData,
    isFetching: state.isFetching,
  };
};

const mapDispatch = {
  showSpinner,
};

const connector = connect(mapState, mapDispatch);

export default connector(UserInfo);
