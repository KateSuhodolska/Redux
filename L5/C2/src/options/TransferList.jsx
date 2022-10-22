import React from "react";
import { connect } from "react-redux";
import AvailableOption from "./AvailableOptions.jsx";
import SelectedOption from "./SelectedOptions.jsx";
import {
  optionsListSelector,
  selectedOptSelector,
} from "../options.selector.js";

const TransferList = () => {
  return (
    <div className="transfer-list">
      <AvailableOption title="Available options" />
      <SelectedOption title="Selected options" />
    </div>
  );
};

const mapState = (state) => {
  return {
    options: optionsListSelector(state),
    selected: selectedOptSelector(state),
  };
};

const connector = connect(mapState);

export default connector(TransferList);
