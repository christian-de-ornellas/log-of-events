type DateNow = {
  day: number
  month: number
  year: number
  hours: number
  minutes: number
  seconds: number
}

const dateNow: DateNow = {
  day: new Date().getDate(),
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
  hours: new Date().getHours(),
  minutes: new Date().getMinutes(),
  seconds: new Date().getSeconds(),
}

export default dateNow
