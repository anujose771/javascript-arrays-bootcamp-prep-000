 var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array,element){
   var a = array;
   a.unshift(element);
   return a;
 }
addElementToBeginningOfArray(chocolateBars, 'foo')

function addElementToEndOfArray(array,element){
  var a = array;
  a.push(element);
  return a;
}
addElementToEndOfArray(chocolateBars, 'foo')


function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array;
}
destructivelyAddElementToBeginningOfArray(array,"foo")

  function destructivelyAddElementToEndOfArray(array,element){
    array.push("foo");
    return array;
  }
  destructivelyAddElementToEndOfArray(array,"foo")
