 var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array,element){
   var a = array;
   a.unshift(element);
   return a;
 }
addElementToBeginningOfArray(chocolateBars, 'foo');

function addElementToEndOfArray(array,element){
  var a = array;
  a.push(element);
  return a;
}
addElementToEndOfArray(chocolateBars, 'foo');


function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array;
}
destructivelyAddElementToBeginningOfArray(array,"foo");

  function destructivelyAddElementToEndOfArray(array,element){
    array.push(element);
    return array;
  }
  destructivelyAddElementToEndOfArray(array,"foo");

  function accessElementInArray (array, index){
    return array[index];
  }
  accessElementInArray([1, 2, 3],2);

  function destructivelyRemoveElementFromBeginningOfArray(array){
    array.shift();
    return array;
  }
  destructivelyRemoveElementFromBeginningOfArray([1, 2, 3]);
