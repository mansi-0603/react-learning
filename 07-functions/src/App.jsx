import React from "react";

const App = () => {
  const doubledclicked = (elem) => {
    console.log(elem.clientX);
  };
  return (
    <div>
      <button
        onDoubleClick={doubledclicked}
        className="m-5 p-2 bg-gray-400 underline underline-offset-2 rounded-sm tracking-wide"
      >
        click here
      </button>

      <input className="m-2 p-2 rounded-xl border-solid border-green-500 tracking-wider italic font-bold border-4" 
      type="text" 
      placeholder="apply now" 
      onChange={(elem) => {
        console.log(elem.target.value);
        
      }}>
      </input>
    </div>
  );
};

export default App;
