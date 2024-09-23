import React, { useState, useEffect, useRef } from "react";

const CustomerCounter = ({ targetCount }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let animationFrameId;
    const start = performance.now();

    const increment = (timestamp) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / 10000, 1); // Adjust duration here (e.g., 6000ms)
      const nextCount = Math.round(progress * targetCount);
      setCount(nextCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(increment);
      }
    };

    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting) {
        setCount(0); // Reset count
        animationFrameId = requestAnimationFrame(increment);
      }
    };

    const observer = new IntersectionObserver(handleIntersection);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [targetCount]);

  return (
    <div ref={ref}>
      <h2 className="flex justify-center">{count}+</h2>
    </div>
  );
};

export default CustomerCounter;
