var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(Array,foo){
  return ['foo',...Array]
}

function destructivelyAddElementToBeginningOfArray(Array,foo){
  Array.unshift('foo')
  return Array
}