import React from "react";
import withCommonCount from "./withCommonCount";

const Click = ({ count, incrementCounter, clickName, users }) => {
  return (
    <div>
      <button onClick={incrementCounter}>Increase</button>
      <p>
        {clickName}Count:{count}
      </p>

      {/* <div>{users}</div> */}
    </div>
  );
};

export default withCommonCount(Click);
