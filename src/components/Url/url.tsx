import { useState } from "react";
import { QR } from "../QR/QR";

export function Url() {
  const [url, setUrl] = useState<string>("");
  const [check, setCheck] = useState<string>("");
  return (
    <div>
      <input
        onChange={(event) => setUrl(event.target.value)}
        placeholder="enter url"
      ></input>
      <button onClick={() => setCheck(url)}>click me!</button>
      {check && <QR url={check} time={new Date().toLocaleString()} />}
    </div>
  );
}
