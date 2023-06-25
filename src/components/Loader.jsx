import { Html, useProgress } from "@react-three/drei";
import React from "react";

const Loader = () => {
  const progress = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-load">
        <p
          style={{
            fontSize: 14,
            color: "#f1f1f1",
            fontWeight: 800,
            marginTop: 40,
          }}
        >
          {progress.total.toFixed(2)}%
        </p>
      </span>
    </Html>
  );
};

export default Loader;
