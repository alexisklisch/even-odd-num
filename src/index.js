function isOdd(num) {
  if (num % 2) {
    throw new Error('The num is not odd')
  }

  return true
}

export { isOdd }
