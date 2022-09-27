export function countDays(now: Date){
    var now3 = new Date(now.getFullYear()+1,0,1,0,0,0)
    var timeInMs = now3.getTime()-now.getTime()
    var weeks=Math.floor(timeInMs/(3600000*24*7))
    timeInMs = timeInMs-weeks*3600000*24*7
    var days=Math.floor(timeInMs/(3600000*24))
    timeInMs = timeInMs-days*3600000*24
    var hours=Math.floor(timeInMs/(3600000))
    timeInMs = timeInMs-hours*3600000
    var minutes=Math.floor(timeInMs/(60000))
    timeInMs = timeInMs-minutes*60000
    var sec=Math.floor(timeInMs/(1000))
    timeInMs = timeInMs-sec*1000
    console.log("До нового года осталось " + weeks + " недель, " + days +" дней, " + hours +" часов, " + minutes +" минут, " + sec +" секунд, " + timeInMs +" миллисекунд.")    
}