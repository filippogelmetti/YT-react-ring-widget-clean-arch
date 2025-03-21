import RingNode from "../RingNode/RingNode";
import "./Ring.scss";

const Ring = () => {
  const wifiNodes = [
    {
      BSSID: "28:87:ba:5e:7d:63:",
      Band: "5GHz",
      Encryption: ["WPA2-PSK"],
      SSID: "WiFi-5E7D61",
      "Signal Strength": -28,
    },
    {
      BSSID: "22:b0:01:d6:fb:69:",
      Band: "5GHz",
      Encryption: ["WPA2-PSK"],
      SSID: "Vodafone5G-6FB60",
      "Signal Strength": -70,
    },
    {
      BSSID: "8c:90:2d:4e:46:d6:",
      Band: "5GHz",
      Encryption: ["WPA2-PSK"],
      SSID: "WiFi-4E46D4_5G",
      "Signal Strength": -81,
    },
  ];

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
