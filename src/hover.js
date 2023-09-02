import React from "react";
import withCommonCount from "./withCommonCount";

const Hover = ({ count, incrementCounter, hoverName }) => {
  return (
    <div>
      <button onMouseOver={incrementCounter}>Increase</button>
      <p>
        {hoverName} Count:{count}
      </p>
    </div>
  );
};

export default withCommonCount(Hover);
