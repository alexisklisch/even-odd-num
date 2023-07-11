function isOdd (num, { flex = true }) {
  if (!flex && isNaN(num)) {
    throw new Error('The value is not a number')
  }

  if (!num % 2) {
    throw new Error('The num is not odd')
  }

  return true
}

export { isOdd }
