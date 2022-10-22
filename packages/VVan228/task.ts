import { getTimeBeforeNY } from "./lib";
let time = getTimeBeforeNY(new Date());
console.log("До нового года осталось " + time[0] + " дней, " + time[1] + " часов и " + time[2] + " минут!");