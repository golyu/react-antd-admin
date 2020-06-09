/**
 * 小数转百分比,并保留4位小数
 * @param point
 */
export function toPercent4(point: number) {
  return Math.round(point * 1000000) / 10000 + '%'
}
