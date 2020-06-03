function add0(m: number) {
  return m < 10 ? '0' + m : m
}
export function timeFormat(timestamp: number) {
  if (timestamp < 2000000000) {
    timestamp *= 1000
  }
  //timestamp是整数，否则要parseInt转换,不会出现少个0的情况
  const time = new Date(timestamp)
  const year = time.getFullYear()
  const month = time.getMonth() + 1
  const date = time.getDate()
  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  return [year + '-' + add0(month) + '-' + add0(date), add0(hours) + ':' + add0(minutes) + ':' + add0(seconds)]
}
