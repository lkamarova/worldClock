import { useState } from "react";
import WorldClockForm from "./WorldClockForm";
import { v4 } from "uuid";
import Clock from "./Clock";

const WorldClock = () => {
  const [timezoneArr, setTimezoneArr] = useState([]);
  const [dataForm, setDataForm] = useState({});

  const handleDelete = (id) => {
    setTimezoneArr((prev) => [...prev.filter((el) => el.id !== id)]);
    setDataForm({});
  };

  return (
    <div className="wrap">
      <WorldClockForm
        setTimezone={setTimezoneArr}
        dataForm={dataForm}
        setDataForm={setDataForm}
      />
      <div className="clocksWrap">
        {timezoneArr.map((el) => (
          <Clock
            key={v4()}
            id={el.id}
            handleDelete={handleDelete}
            name={el.name}
            timezone={el.timezone}
            timezoneArr={timezoneArr}
            setTimezoneArr={setTimezoneArr}
          />
        ))}
      </div>
    </div>
  );
};

export default WorldClock;
