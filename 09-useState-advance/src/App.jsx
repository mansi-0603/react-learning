import React, { useState } from "react";

const App = () => {
  const [obj, setObj] = useState({ user: "riya", age: 30 });

  const btnClicked = () => {
    console.log(obj);

    setObj({
      ...obj,
      user: "sneha",
      age: 34,
    });
  };
  return (
    <div>
      <h1>{obj.user} {obj.age}</h1>
      <button onClick={btnClicked}>click here</button>
    </div>
  );
};

export default App;
