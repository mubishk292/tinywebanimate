import { useAnimatePresence } from "use-animate-presence";
// import "./styles.css";
// import * as React from "react";
import './boxToggle.css'
const diff = window.innerWidth / 2 + 300;

const frontVariants = {
  x: { from: -diff, to: 0 },
  deg: 360
};

const middleVariants = {
  x: { from: diff, to: 0 },
  deg: 360
};

const bgVariants = {
  y: { from: -diff, to: 0 },
  deg: 360
};

export default function BoxFile() {
  const frontSquare = useAnimatePresence({
    variants: frontVariants,
    initial: "hidden",
    debugName: "front-square"
  });

  const middleSquare = useAnimatePresence({
    variants: middleVariants,
    initial: "hidden",
    wait: frontSquare.togglePresence,
    debugName: "middle-square"
  });

  const bgSquare = useAnimatePresence({
    variants: bgVariants,
    initial: "visible",
    wait: middleSquare.togglePresence,
    debugName: "bq-square"
  });

  return (
    <>
      {<button onClick={() => bgSquare.togglePresence()}>Toggle</button>}
      {bgSquare.isRendered && (
        <div ref={bgSquare.ref} className="bg-square">
          {middleSquare.isRendered && (
            <div className="middle-square" ref={middleSquare.ref}>
              {frontSquare.isRendered && (
                <div className="front-square" ref={frontSquare.ref}></div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
