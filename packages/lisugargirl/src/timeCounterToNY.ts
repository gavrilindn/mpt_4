export { NYTime }

function NYTime(date:Date) {

    let NYDate = new Date(date.getFullYear() + 1, 0, 1, 0, 0, 0)

    let NDate = NYDate.getTime() - date.getTime()

    let days = Math.floor(NDate / (24*60*60*1000))
    let hours = Math.floor(NDate / (60*60*1000) % 24)
    let minutes = Math.floor(NDate / (60*1000) % 60)
    let seconds = Math.floor(NDate / (1000) % 60)

    return 'До нового года осталось ' + days + ' дней ' + hours + ' часов ' + minutes + ' минут ' + seconds + ' секунд '
}