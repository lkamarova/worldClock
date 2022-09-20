import { v4 } from "uuid";
import moment from "moment";

function WorldClockForm({ setTimezone, dataForm, setDataForm }) {
  const handleChange = ({ value, name }) => {
    setDataForm((prev) => ({ ...prev, [name]: value }));
  };

  const getTime = (utc) =>
    moment.utc().utcOffset(`${utc}`).format("hh:mm:ss");
    console.log(getTime(dataForm.timezone))

  const handleSubmit = (dataForm) => {
    setTimezone((prev) => [
      ...prev,
      { ...dataForm, id: v4(), timezone: dataForm.timezone },
    ]);
    setDataForm((prev) => ({}));
  };

  return (
    <div className="form__group">
      <input
        type="text"
        name="name"
        className="form__input"
        id="name"
        value={dataForm.name || ""}
        onChange={(ev) => handleChange(ev.target)}
        placeholder="name"
        required
      />

      <input
        type="text"
        className="form__input"
        name="timezone"
        id="timezone"
        value={dataForm.timezone || ""}
        placeholder="timezone"
        onChange={(ev) => handleChange(ev.target)}
        required
      />

      <input
        type="button"
        className="form__button"
        id="submit"
        placeholder="add"
        value="Ok"
        onClick={() => handleSubmit(dataForm)}
      />
    </div>
  );
}

export default WorldClockForm;
