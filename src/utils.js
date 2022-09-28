import moment from "moment";

export const getTime = (utc) => moment.utc().utcOffset(utc).format("hh:mm:ss");
