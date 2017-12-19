var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(Array,foo){
  return ['foo',...Array]
}

function destructivelyAddElementToBeginningOfArray(Array,foo){
  Array.unshift('foo')
  return Array
}

function addElementToEndOfArray(Array,foo){
  return [...Array,'foo']
}

function destructivelyAddElementToEndOfArray(Array,foo){
  Array.push('foo')
  return Array
}