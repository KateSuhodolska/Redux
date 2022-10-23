import React, { useState } from "react";
import { connect } from "react-redux";
import { showSpinner, fetchUserData } from "../users.actions";

const SearchField = ({ showSpinner, fetchUserData }) => {
  const [userName, setUserName] = useState("");

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSearch = () => {
    showSpinner();
    fetchUserData(userName);
  };

  return (
    <div className="name-form">
      <input type="text" className="name-form__input" onChange={handleChange} />
      <button className="name-form__btn btn" onClick={handleSearch}>
        Show
      </button>
    </div>
  );
};

const mapDispatch = {
  fetchUserData,
  showSpinner,
};

export default connect(null, mapDispatch)(SearchField);
