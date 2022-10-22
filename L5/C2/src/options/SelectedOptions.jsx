import Options from "./Options";
import { selectedOptionsSelector } from "../options.selector";
import { connect } from "react-redux";
import { toggleOption } from "../options.actions";

const mapState = (state) => {
  return {
    options: selectedOptionsSelector(state),
  };
};

const mapDispatch = {
  toggleOption,
};

const connector = connect(mapState, mapDispatch);

export default connector(Options);
