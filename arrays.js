 var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array,element){
   var a = array;
   a.unshift(element);
   return a;
 }
addElementToBeginningOfArray([1], 'foo');

function addElementToEndOfArray(array,element){
  var a = array;
  a.push(element);
  return a;
}
addElementToEndOfArray([1], 'foo');


function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array;
}
destructivelyAddElementToBeginningOfArray([1], 'foo');

  function destructivelyAddElementToEndOfArray(array,element){
    array.push(element);
    return array;
  }
  destructivelyAddElementToEndOfArray([1], 'foo');

  function accessElementInArray (array, index){
    return array[index];
  }
  accessElementInArray([1, 2, 3],2);

  function destructivelyRemoveElementFromBeginningOfArray(array){
    array.shift();
    return array;
  }
  destructivelyRemoveElementFromBeginningOfArray([1, 2, 3]);
