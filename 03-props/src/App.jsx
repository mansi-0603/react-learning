import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      {/* this show two different card values */}
      <Card
        user="Marry"
        age={20}
        img="https://images.unsplash.com/photo-1742210019103-478c7140efbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Joe"
        age={18}
        img="https://plus.unsplash.com/premium_photo-1783296842875-f8ea1e06e52c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};

export default App;
