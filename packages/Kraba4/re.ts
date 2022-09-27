export function re(now: Date){
    var newYear = new Date("January 1, "+(now.getFullYear()+1))
    var time= newYear.getTime()- now.getTime()
    var days = Math.floor(time / 86400000)
    time = time % 86400000
    var hours = Math.floor(time / 3600000)
    time = time % 3600000
    var minutes = Math.floor(time / 60000)
    time = time % 60000
    var seconds = Math.floor(time / 1000)
    time = time % 1000
    console.log("Осталось ", days , " дней ", hours, " часов ", minutes, " минут ", seconds, " секунд ", time, "миллисекунд") 
} 
