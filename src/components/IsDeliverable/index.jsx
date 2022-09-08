import React from "react";
import { connect } from "react-redux";
import StartPage from "../../pages/StartPage";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

const IsDeliverable = ({ location, children }) => {
  if (location?.deliverable && location?.name) {
    return children;
  } else {
    return <StartPage errorMsg={true} />;
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(IsDeliverable);
