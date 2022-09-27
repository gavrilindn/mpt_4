// const button = document.getElementById("calculate");
// const dateField = document.getElementById("date");
// const daysField = document.getElementById("days");
// const hoursField = document.getElementById("hours");
// const minutesField = document.getElementById("minutes");
// const secondsField = document.getElementById("seconds");

// var start = false;
// alert("it works");

// var options = {
//     era: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     weekday: 'long',
//     timezone: 'UTC',
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric'
// };


// function addZero(value: string) {
//     if (parseInt(value) < 10) value = `0${value}`;
//     return value;
// }

export function calculate(beginDate: Date) {
    let newYear = new Date(beginDate.getFullYear() + 1, 0, 1, 0, 0, 0, 0);
    let diff = (newYear.getTime() - beginDate.getTime()) / 1000;
    var day: number, hour: number, minute: number, second: number;
    day = Math.round(diff / 60 / 60 / 24);
    hour = Math.round(diff / 60 / 60 % 24);
    minute = Math.round(diff / 60 % 60);
    second = Math.round(diff % 60);
    return {
        days: day,
        hours: hour,
        minutes: minute,
        seconds: second
    }
}

// function updateValues() {
//     let day = parseInt(daysField!.innerText)
//     let hour = parseInt(hoursField!.innerText)
//     let minute = parseInt(minutesField!.innerText)
//     let second = parseInt(secondsField!.innerText)

//     second -= 1;
//     if (second == -1) {
//         second = 59;
//         minute -= 1;
//     }
//     if (minute == -1) {
//         minute = 59;
//         hour -= 1;
//     }
//     if (hour == -1) {
//         day -= 1;
//         hour = 23;
//     }

//     daysField!.innerText = addZero(day.toString());
//     hoursField!.innerText = addZero(hour.toString());
//     minutesField!.innerText = addZero(minute.toString());
//     secondsField!.innerText = addZero(second.toString());

// }

// button!.addEventListener("click", function () {
//     if (!start) {
//         // let beginDate = new Date(dateField!.ariaValueNow);
//         let beginDate = new Date();
//         console.log(beginDate);
//         if (beginDate != null) {
//             let result = calculate(beginDate);
//             daysField!.innerText = result.days.toString();
//             hoursField!.innerText = result.hours.toString();
//             minutesField!.innerText = result.minutes.toString();
//             secondsField!.innerText = result.seconds.toString();
//             console.log(`До нового года: ${result.days} дней ${result.hours} часов ${result.minutes} минут ${result.seconds} секунд`);
//             start = true;
//             setInterval(updateValues, 1000);
//         }
//     }
// });