import React from "react";

const Card = (props) => {
  // we get object as the value that is been passed from App.jsx
//   console.log(props);

  // to see the exact value means to extract
//   console.log(props.user, props.age);

  return (
    <div className="card">
      <img
        src={props.img}
        alt="image not found"
      />
      <h3>Hii! My name is {props.user} from Boston University.</h3>
      <p>I am {props.age} Years old.</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, maxime.
      </p>
      <button>View Profile</button>
    </div>
  );
};

export default Card;
