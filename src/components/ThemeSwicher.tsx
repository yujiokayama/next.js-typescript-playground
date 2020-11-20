import React, { useEffect, useState, useRef } from "react";
import { useTheme } from "~/components/Context";

const ThemeSwicher: React.FC = () => {
  /**
   * useContext
   */
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div style={{ backgroundColor: theme }}>
        <select value ={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="black">black</option>
          <option value="lightblue">Blue</option>
          <option value="lightgreen">Green</option>
        </select>
        <span>Hello!</span>
      </div>
    </>
  );
};

export default ThemeSwicher;
