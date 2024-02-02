import React from "react";
import styles from "./pie.module.css";

const PieChart = ({ color, p }) => {
  return (
    <div
      className={`${styles.pie} ${styles.animate}`}
      style={{ "--p": p, "--c": color }}
    >
      {p}%
    </div>
  );
};

export default PieChart;
