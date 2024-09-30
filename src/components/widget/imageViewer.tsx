import React, { useContext } from "react";
import { useTransition, animated } from "react-spring";
import { ImageModelContext } from "../../providers/Providers";

function ImageViewer() {
    const {value} = useContext(ImageModelContext)
  const transitions = useTransition(value.isOpen, {
    from: { scale: "85%", opacity: 0, backgroundColor: "rgba(0, 0, 0, 0)" },
    enter: {
      scale: "100%",
      opacity: 1,
      backgroundColor: "rgba(0, 0, 0, 0.55)",
    },
    leave: { scale: "85%", opacity: 0, backgroundColor: "rgba(0, 0, 0, 0)" },
    config: {
      tension: 120,
      friction: 14,
    },
  });
  return transitions(
    (style, isOpen) => isOpen && 
        <animated.div style={{backgroundColor: style.backgroundColor}} className="fixed w-full h-full z-20">

        </animated.div>
  );
}

export default ImageViewer;
