import React, { useContext } from "react";
import "./RingNode.scss";
import { NodesContext } from "@/presentation/contexts/NodeContext";

interface RingNodeProps {
  node: any;
  x: number;
  y: number;
}

const RingNode: React.FC<RingNodeProps> = ({ node, x, y }) => {
  const { selectedNode, setSelectedNode } = useContext(NodesContext);

  console.log(`selectedNode 🏄‍♂️🏄‍♂️🏄‍♂️🏄‍♂️: ${selectedNode?.SSID}`);

  return (
    <>
      <circle cx={x} cy={y} r={20} fill={node.fill} />
      <circle
        cx={x}
        cy={y}
        r={15}
        fill="red"
        onMouseEnter={() => {
          setSelectedNode(node);
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
