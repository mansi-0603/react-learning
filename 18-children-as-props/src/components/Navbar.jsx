// Demonstrates: children as props, Context API for shared state.
import { Children } from "react";
import Nav2 from "./Nav2";

const Navbar = ({ children }) => {
  // Children.toArray is safe for 0, 1 or many children
  // (props.children is NOT an array when there is only one child).
  const items = Children.toArray(children);

  return (
    <header className="nav">
      <h2 className="nav-logo">XYZ</h2>
      {items.map((child, i) => (
        <div key={i} className="nav-slot">{child}</div>
      ))}
      <Nav2 />
    </header>
  );
};

export default Navbar;
