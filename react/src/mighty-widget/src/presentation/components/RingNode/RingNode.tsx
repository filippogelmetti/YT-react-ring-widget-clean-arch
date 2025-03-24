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

  const isSelected = selectedNode && selectedNode.SSID === node.SSID;

  return (
    <>
      <g
        className={`ring-node ${isSelected ? "selected" : ""}`}
        onMouseEnter={() => {
          setSelectedNode(node);
          console.log("ENTER CIRCLE 🔴");
        }}
      >
        <circle cx={x} cy={y} r={20} className="ring-node-border" />
        <circle cx={x} cy={y} r={15} className="ring-node-core" />
        <text x={x} y={y + 30} textAnchor="middle">
          {node.SSID}
        </text>
      </g>
    </>
  );
};

export default RingNode;
