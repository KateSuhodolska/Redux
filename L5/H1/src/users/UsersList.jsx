import React from "react";
import { connect } from "react-redux";
import { goToNextPage, goToPrevPage } from "../users.actions";
import Pagination from "./Pagination";
import User from "./User";
import { usersSelector } from "./users.selector";

const UsersList = ({ users, goToNextPage, goToPrevPage }) => {
  const itemsPerPage = 3;
  const { usersList, currentPage } = users;
  const startIndex = currentPage * itemsPerPage;
  return (
    <div>
      <Pagination
        goPrev={goToPrevPage}
        goNext={goToNextPage}
        currentPage={currentPage}
        totalItems={usersList.length}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">
        {usersList.slice(startIndex, startIndex + itemsPerPage).map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    users: usersSelector(state),
  };
};

const mapDispatch = {
  goToNextPage,
  goToPrevPage,
};

const connector = connect(mapState, mapDispatch);

export default connector(UsersList);
