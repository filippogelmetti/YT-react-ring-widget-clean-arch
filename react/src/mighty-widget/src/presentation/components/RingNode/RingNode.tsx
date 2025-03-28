import React, { useContext } from "react";
import { NodesContext } from "@/presentation/contexts/NodeContext";
import "./RingNode.scss";

interface RingNodeProps {
  node: any;
  x: number;
  y: number;
}

const RingNode: React.FC<RingNodeProps> = ({ node, x, y }) => {
  const { setSelectedNode, isNodeSelected } = useContext(NodesContext);
  const isSelected = isNodeSelected(node);

  return (
    <>
      <g
        className={`ring-node ${isSelected ? "selected" : ""}`}
        onMouseEnter={() => {
          setSelectedNode(node);
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
