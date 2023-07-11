function isOdd (num, config = { flex: true, float: false }) {
  if (!config.flex && typeof num !== 'number') {
    throw new Error('The value is not a number')
  }

  const number = +num

  if (!config.float && number - Math.floor(number) > 0) {
    throw new Error('The number is a float number. Change the options to enable floating numbers.')
  }

  if (number % 2 === 0) {
    throw new Error('The num is not odd ⛔️')
  }
  console.log(Math.abs(num) + ' is odd ✅')
  return true
}

function isEven (num, config = { flex: true, float: false }) {
  if (!config.flex && typeof num !== 'number') {
    throw new Error('The value is not a number')
  }

  const number = +num

  if (!config.float && number - Math.floor(number) > 0) {
    throw new Error('The number is a float number. Change the options to enable floating numbers.')
  }

  if (number % 2 !== 0) {
    throw new Error('The num is not even ⛔️')
  }
  console.log(Math.abs(num) + ' is even ✅')
  return true
}

export { isOdd, isEven }
