// Code your solution in this file!
    // const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
    // const firstTwo = drivers.slice(0, 2);
    // const lastTwo = drivers.slice(-2);
    
  function returnFirstTwoDrivers(driversArray) {
      return driversArray.slice(0, 2);
  }
  function returnLastTwoDrivers(driversArray) {
      return driversArray.slice(-2);
  }
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function() {
       return integer * integer;
    }
}
 
const fareDoubler = fare => fare * 2;
const fareTripler = fare => fare * 3;
let fareQuintupler = fare => fare * 4;

function selectDifferentDrivers(driversArray, callBack) {
  return callBack(driversArray);
}