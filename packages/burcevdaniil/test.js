var curD = new Date().toLocaleDateString();
var curT = new Date().toLocaleTimeString();
var months = 12-curD.slice(3,5);
var days =  31-curD.slice(0,2);
var hours = 24-curT.slice(0,2);
var minutes = 60-curT.slice(3,5);
var seconds = 60-curT.slice(6,8);
console.log(`${months} months, ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds left till christmas`);
