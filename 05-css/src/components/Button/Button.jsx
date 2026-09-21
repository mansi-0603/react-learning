import React from "react";
import styles from "./button.module.css";

const Button = () => {
  return (
    <div>
      <div className={styles.btn}>This is button</div>
      <div className="info">
        <h3 className={styles.btn}> hii! this is module css</h3>
        <p className={styles.para}>
          {/* {" "} */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          debitis.
        </p>
      </div>
    </div>
  );
};

export default Button;
