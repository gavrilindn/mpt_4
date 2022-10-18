export function getTimeBeforeNY(date: Date) : number[]{
    date.setHours(date.getHours()+8)//UTF+8))
    let newYearDate = new Date(0);
    newYearDate.setFullYear(date.getFullYear()+1);
    
    let timeMillis = newYearDate.getTime() - date.getTime();
    
    
    let days = Math.floor(timeMillis/(1000*60*60*24))
    let hours = Math.floor((timeMillis - days*1000*60*60*24)/(1000*60*60));
    let minutes = Math.floor((timeMillis - days*1000*60*60*24 - hours*1000*60*60)/(1000*60));

    return [days, hours, minutes];
}