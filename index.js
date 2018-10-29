// Code your solution in this file!
//return new array containing first two drivers from passed in array
const returnFirstTwoDrivers =
  function(drivers) {
  return drivers.slice(0,2)
  }

//return new array with last two drivers from passed in array
const returnLastTwoDrivers =
  function(drivers) {
    return drivers.slice(-2)
  }
//has the returnFirstTwoDrivers function to as its first element
// has returnLastTwoDrivers as last element
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//returns a function
//should mutiply a given value using the created multiplier
 function createFareMultiplier(multiply){
  return function(integer) {
    return multiply * integer;
    }
  }

  const fareDoubler = function(createFareMultiplier) {
      return createFareMultiplier * 2
  }

  const fareTripler = function(createFareMultiplier) {
    return createFareMultiplier * 3
  }

  function fetchSpecifiedDrivers(drivers, func) {
    return func(drivers)
  }
