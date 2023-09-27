import { useState } from "react";
import { MetaData } from "../MetaData/metaData";

interface Details {
  url: string;
  size?: string;
  time: string;
}

export function QR(prop: Details) {
  const [details, setDetails] = useState({
    url: "",
    size: "",
    time: "",
  });
  return (
    <div>
      <img
        src={`https://api.qrserver.com/v1/create-qr-code/?data=${prop.url}&size=100x100`}
        alt="QR"
      ></img>
      <button
        onClick={() =>
          setDetails({
            url: prop.url,
            size: "100x100",
            time: prop.time,
          })
        }
      >
        more details
      </button>
      {details.url && (
        <MetaData url={details.url} size={details.size} time={details.time} />
      )}
    </div>
  );
}
