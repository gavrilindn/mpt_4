const dateNow = new Date();
const dateNewYear = new Date(dateNow.getFullYear() + 1, 0, 1, 0, 0, 0, 0);

const secs = 1000,
  mins = secs * 60,
  hours = mins * 60,
  days = hours * 24;

console.log(
  "Time left before New Year: " +
    Math.floor((dateNewYear - dateNow) / days) +
    " days " +
    Math.floor(((dateNewYear - dateNow) % days) / hours) +
    " hours " +
    Math.floor((((dateNewYear - dateNow) % days) % hours) / mins) +
    " minutes " +
    Math.floor(((((dateNewYear - dateNow) % days) % hours) % mins) / secs) +
    " seconds"
);

console.log("Updated.");
