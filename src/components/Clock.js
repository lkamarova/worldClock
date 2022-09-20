import moment from "moment";
import { useEffect, useRef } from "react";
import { v4 } from "uuid";

const Clock = ({ handleDelete, id, name, timezone }) => {
  const getTime = (utc) => moment.utc().utcOffset(utc).format("hh:mm:ss");
  console.log("getTime", moment.utc().utcOffset(5).format("hh:mm:ss"))
  let time = getTime(+timezone);
  const timeRef = useRef();

  useEffect(() => {
    const intervalId = setInterval(() => {
      timeRef.current.innerHTML = getTime(+timezone);
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
        <span className="time" ref={timeRef} >{time}</span>
      </div>
    </div>
  );
};

export default Clock;
