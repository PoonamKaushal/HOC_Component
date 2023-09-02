import React, { useState } from "react";
//This is higher Order Component it will take the component which is been wrapped in this higher order component
//  Higher Order Component also take a second parameter 
//like if we want to increase the count by a particular number so we can pass that number from our original component
const withCommonCount = (OriginalComponent, key) => {
  //Using this NewComponent higher order component updates our OriginalComponent that has been wrapped
  const NewComponent = (props) => {
    const [count, setCount] = useState(0);
    const incrementCount = () => setCount((count) => count + 1);
    let users = [...(props.users || []), "Poonam"];
    return (
      <OriginalComponent
        {...props}
        clickName="Onclick of button"
        hoverName="OnMouseOver on button"
        count={count}
        users={users}
        incrementCounter={incrementCount}
      />
    );
  };
  // this higher order component then return the NewComponent in which common functionality or logic is there.
  return NewComponent;
};

export default withCommonCount;
