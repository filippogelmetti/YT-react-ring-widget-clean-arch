import { useEffect, useState } from "react";
import { WifiNode } from "@/domain/models/WifiNode";
import { LoadWifiNodesUseCase } from "@/application/usecases/LoadWifiNodesUseCase";
import RingNode from "../RingNode/RingNode";
import "./Ring.scss";

const Ring = () => {
  const [wifiNodes, setWifiNodes] = useState<WifiNode[]>([]);

  useEffect(() => {
    const loadWifiNodes = async () => {
      const nodes = await new LoadWifiNodesUseCase().execute();
      setWifiNodes(nodes);
    };

    loadWifiNodes();
  }, []);

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
