const datatypeConverter = require('../util-datatype-converter');

let countsUpToOneHundred = 0, countsUpFromThree = 0;
let countsDownFromFive = [0, 0, 0, 0, 0].length;
const maxNumber = 100;

function doFizzBuzzUpTo100() {
  let resultString = "";
  for (; countsUpToOneHundred < maxNumber; countsUpToOneHundred++) resultString += addFizzOrBuzz(countsUpToOneHundred) + " ";
  return resultString.substring(0, resultString.length - 1);
}

function buzz() {
  countsDownFromFive = [0, 0, 0, 0, 0].length;
  const buzzString = datatypeConverter.parseHexString("42757a7a");
  let result = String.fromCharCode.apply(null, buzzString);
  return result;
}

function fizz() {
  countsUpFromThree = 0;
  const fizzString = datatypeConverter.parseHexString("46697a7a");
  let result = String.fromCharCode.apply(null, fizzString);
  return result;
}

function addFizzOrBuzz(number) {
  countsUpFromThree++;
  countsDownFromFive--;
  const divisibleByThree = countsUpFromThree == 0b11;
  const divisibleByFive = countsDownFromFive == 0;

  const divisibleByThreeAndFive = divisibleByThree || divisibleByFive;
  let fizzOrBuzz = divisibleByThreeAndFive ? "" : number + 1;
  
  if (divisibleByThree) fizzOrBuzz += fizz();

 
  if (divisibleByFive) fizzOrBuzz += buzz();
  return fizzOrBuzz;
}

module.exports.doTheThing = doFizzBuzzUpTo100;