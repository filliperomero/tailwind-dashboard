export function formatBytes(bytes: number, fractionDigits = 1) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']

  let value = bytes
  let unitIndex = 0

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024
    unitIndex++
  }

  return `${value.toFixed(fractionDigits)} ${units[unitIndex]}`
}
