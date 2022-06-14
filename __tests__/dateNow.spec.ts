import dateNow from '../src/util/dateNow'
describe('dateNow', () => {
  it('should return current day', () => {
    const today = new Date().getDate()
    expect(dateNow.day).toBe(today)
  })

  it('should return current month', () => {
    const currentMonth = new Date().getMonth() + 1
    expect(dateNow.month).toBe(currentMonth)
  })

  it('should return current year', () => {
    const currentYear = new Date().getFullYear()
    expect(dateNow.year).toBe(currentYear)
  })

  it('should return date', () => {
    const currentDate = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
    expect(`${dateNow.day}/${dateNow.month}/${dateNow.year}`).toBe(currentDate)
  })

  it('should return current hour', () => {
    const currentHour = new Date().getHours()
    expect(dateNow.hours).toBe(currentHour)
  })

  it('should return current minute', () => {
    const currentMinute = new Date().getMinutes()
    expect(dateNow.minutes).toBe(currentMinute)
  })

  it('should return current second', () => {
    const currentSecond = new Date().getSeconds()
    expect(dateNow.seconds).toBe(currentSecond)
  })

  it('should return hours', () => {
    const currentHours = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    expect(`${dateNow.hours}:${dateNow.minutes}:${dateNow.seconds}`).toBe(currentHours)
  })
})
