/******************
 * YOUR CODE HERE *
 ******************/
const addMeToEnd = (arr) => arr.push('Colin');

const addMeToStart = (arr) => arr.unshift('Colin');

const changeLast = (arr, change) => arr[arr.length-1] = change;

const changeAllValuesTo = (arr, value) => arr.forEach((current, i) => arr[i] = value);

const oddOrEven = (arr) => arr.forEach((current, i) => arr[i] = (current % 2) ? 'odd' : 'even')

const changeNextThreeToValue = (index, arr, value) => arr.splice(index, 3, value, value, value)




/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}
