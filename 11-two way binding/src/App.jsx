import React from "react";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted by", title);
    // agr submt krne ke baad hume inp box khali chahiye toh wps se setTtile ko blanck bhej doh
    setTitle('');
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="enter your name"
          // explicitly hum value de chuke h
          value={title}
          // function chlne prr value input box mei type nhi hoga bt console prr print hoga.
          onChange={(e) => {
            // console.log(e.target.value);
            // so agr hum input boxe prr bhi changes chahiye toh do this instead
            setTitle(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
