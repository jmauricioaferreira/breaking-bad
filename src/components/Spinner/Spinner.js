import React from "react";
import spinner from "../../assets/img/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{
        width: "160px",
        margin: "auto",
        display: "block",
        paddingTop: "80px",
      }}
      alt="Loading"
    />
  );
};

export default Spinner;
