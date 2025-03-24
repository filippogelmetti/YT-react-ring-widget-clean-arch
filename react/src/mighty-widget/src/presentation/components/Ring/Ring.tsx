import { NodesContext } from "@/presentation/contexts/NodeContext";
import { useContext } from "react";
import RingNode from "../RingNode/RingNode";
import "./Ring.scss";

const Ring = () => {
  const { wifiNodes } = useContext(NodesContext);
  return (
    <>
      <svg
        viewBox="0 0 600 600"
        width="600"
        height="600"
        className="ring-container"
      >
        <g>
          {wifiNodes.map((node, i) => {
            const angle = (i / wifiNodes.length) * 2 * Math.PI;
            const x = 300 + 250 * Math.cos(angle);
            const y = 300 + 250 * Math.sin(angle);
            return (
              <g key={i}>
                <RingNode node={node} x={x} y={y} />
              </g>
            );
          })}
        </g>
      </svg>
    </>
  );
};

export default Ring;
