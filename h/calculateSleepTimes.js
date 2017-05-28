const min = 3
const interval = 1.5
const quantity = 4

const calculateSleepTimes = time => {
  const date = new Date()
  date.setHours(time.split(':')[0])
  date.setMinutes(time.split(':')[1])

  const points = (new Array(quantity))
    .fill(0)
    .map((v, k) => min + (k + 1) * interval)

  const sleepTimes = points
    .map(point => {
      const sleepDate = new Date()
      sleepDate.setHours(date.getHours() - Math.floor(point))
      sleepDate.setMinutes(date.getMinutes() - 60 * (point % 1))
      return sleepDate
    })
    .map(sleepDate => sleepDate
      .toLocaleTimeString()
      .replace(/:\d\d\s/, ' ')
    )
    .reverse()
  return sleepTimes
}

export default calculateSleepTimes
