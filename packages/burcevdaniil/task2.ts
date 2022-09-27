
export function calculateTimeDifference(date: Date){
    var targetDate = new Date(date);
    var today = new Date();
    targetDate.setTime(targetDate.getTime() - targetDate.getTimezoneOffset()*60*1000);
    today.setTime(today.getTime() - today.getTimezoneOffset()*60*1000);
    var years = Math.abs(targetDate.getFullYear()-today.getFullYear());
    var months = Math.abs(targetDate.getMonth() - today.getMonth());
    var days = Math.abs(targetDate.getDay() - today.getDay());
    var hours = Math.abs(targetDate.getHours() - today.getHours());
    var minutes = Math.abs(targetDate.getMinutes() - today.getMinutes());
    console.log(`${years} years, ${months} months, ${days} days, ${hours} hours and ${minutes} minutes`);
}

calculateTimeDifference(new Date());
