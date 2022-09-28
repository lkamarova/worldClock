import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { getTime } from "../utils";

const Clock = ({ handleDelete, id, name, timezone }) => {
  const [time, setTime] = useState(getTime(+timezone));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTime(+timezone));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div key={v4()} className="timeWrap">
      <span className="material-icons" onClick={() => handleDelete(id)}>
        close
      </span>
      <span className="name">{name}</span>
      <div className="clock">
        <span className="time">{time}</span>
      </div>
    </div>
  );
};

export default Clock;
