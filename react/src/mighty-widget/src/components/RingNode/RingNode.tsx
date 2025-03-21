import React from "react";
import "./RingNode.scss";

interface RingNodeProps {
  node: any;
  x: number;
  y: number;
}

const RingNode: React.FC<RingNodeProps> = ({ node, x, y }) => {
  return (
    <>
      <circle cx={x} cy={y} r={20} fill={node.fill} />
      <circle
        cx={x}
        cy={y}
        r={15}
        fill="red"
        onMouseEnter={() => {
          console.log("ENTER CIRCLE 🔴");
        }}
      />
      <text x={x} y={y + 30} textAnchor="middle">
        {node.SSID}
      </text>
    </>
  );
};

export default RingNode;
