export const genSelect = <K, V>(map: Map<K, V>, def: V): ((key: K) => V) => {
  return (key: K) => {
    const value = map.get(key)
    return value === undefined ? def : value
  }
}
