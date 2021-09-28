import React from "react";
import { useEffect, useState } from "react/cjs/react.development";

const FunctionalTimer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Count : " + count);
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  return <div>This is the timer</div>;
};
export default FunctionalTimer;
