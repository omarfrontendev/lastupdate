import React from "react";
import { connect } from "react-redux";
import styles from "./.module.scss";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

export const OverlayModal = (props) => {
  return <div className={styles.overlay__modal}>OverlayModal</div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(OverlayModal);
