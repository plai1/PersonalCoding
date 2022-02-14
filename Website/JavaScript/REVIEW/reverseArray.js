// Write your code here:
function reverseArray(array){
  resut = []
  for (let i = array.length-1; i >= 0; i--){
    resut.push(array[i])
  }
  return resut
}


// When you're ready to test your code, uncomment the below and run:

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence))
// Should print ['This', 'will', 'all', 'make', 'sense.'];
