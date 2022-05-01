import React from "react";
import { connect } from "react-redux";

let Loading = () => (
  <div style={{ textAlign: "center" }}>
    <h1>Loading</h1>
  </div>
);
const mapStateToProps = (state) => ({ loading: state.loading });
Loading = connect(mapStateToProps, null)(Loading);

export default Loading;
