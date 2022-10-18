
export function timeToNewYear(d: Date): string {

    const date1: Date = new Date('January 1, 2023 00:00:00');
    date1.setFullYear(new Date().getFullYear() + 1)
    const date2: Date = new Date(Math.abs(d.getTime() - date1.getTime()))
    return `months: ${date2.getMonth()}, days: ${date2.getDate()}, hours: ${date2.getUTCHours()}, minutes: ${date2.getMinutes()} to new year`
}


