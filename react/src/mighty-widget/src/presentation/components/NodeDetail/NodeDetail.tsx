import { NodesContext } from "@/presentation/contexts/NodeContext";
import { useContext } from "react";
import "./NodeDetail.scss";

const NodeDetail = () => {
  const { selectedNode } = useContext(NodesContext);
  return (
    <>
      <h2>NodeDetail</h2>
      <div>
        {selectedNode ? (
          <div>
            <h3>{selectedNode.SSID}</h3>
            <p>
              <span className="info-label">BSSID: </span>
              {selectedNode?.BSSID}
            </p>
            <p>
              <span className="info-label">Band: </span>
              {selectedNode?.Band}
            </p>
            <p>
              <span className="info-label">Encryption: </span>
              {selectedNode?.Encryption}
            </p>
            <p>
              <span className="info-label">Signal Strength: </span>
              {selectedNode?.SignalStrength}
            </p>
          </div>
        ) : (
          <div>
            <p>No node selected</p>
          </div>
        )}
      </div>
    </>
  );
};

export default NodeDetail;
