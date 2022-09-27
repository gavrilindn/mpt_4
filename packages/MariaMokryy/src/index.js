var now = new Date();
var nextYear = now.getFullYear() + 1;
var newYear = new Date(nextYear, 0, 2, 0, 0, 0);

var difference = Math.floor((newYear.getTime() - now.getTime()) / 1000);

ans = "До Нового Года осталось: ";

days = Math.floor(difference / (60 * 60 * 24));
difference %= 60 * 60 * 24;
hours = Math.floor(difference / 3600);
difference %= 3600;
minutes = Math.floor(difference / 60);
seconds = difference % 60;

ans +=
  days +
  " days " +
  hours +
  " hours " +
  minutes +
  " minutes " +
  seconds +
  " seconds.";

console.log(ans);
