import Options from "./Options";
import { availableOptionsSelector } from "../options.selector";
import { connect } from "react-redux";
import { toggleOption } from "../options.actions";

const mapState = (state) => {
  return {
    options: availableOptionsSelector(state),
  };
};

const mapDispatch = {
  toggleOption,
};

const connector = connect(mapState, mapDispatch);

export default connector(Options);
