"use strict";


// 1. printIndice

  // for i in range(len(items)):
  //       print(f'{items[i]} {i}')
function prtIndices(items) {

  for (const i in items) {
    console.log(`${items[i]} ${i}`);
  }
}
prtIndices(['apple', 'berry', 'cherry']);

// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];
  for (const i in items){
    if (i % 2 === 0) {
      result.push(items[i]);
    }
  }
  return result
 }
console.log(everyOtherItem(['apple', 'berry', 'cherry','grapefruit']))

// 3. smallestNItems
function smallestNItems(items, n) {
  let answer = items.sort().slice(0, n);
  return answer.reverse()
}


// function smallestNItems(items, n) {
//   const sortedItems = items.sort().slice(0, n);
//   sortedItems.reverse();

//   console.log(sortedItems);
// }
console.log(smallestNItems(['apple', 'berry', 'cherry','grapefruit'],3))