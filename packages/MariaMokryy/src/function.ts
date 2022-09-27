export function getTimeToNewYear(now: Date): number {
    var nextYear = now.getFullYear() + 1;
    var newYear = new Date(nextYear, 0, 2, 0, 0, 0);


    var difference = Math.floor((newYear.getTime() - now.getTime()) / 1000);

    var ans = "До Нового Года осталось: ";

    var days = Math.floor(difference / (60 * 60 * 24));
    difference %= 60 * 60 * 24;
    var hours = Math.floor(difference / 3600);
    difference %= 3600;
    var minutes = Math.floor(difference / 60);
    var seconds = difference % 60;

    ans += days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds.";

    console.log(ans);

    return days;
}
