// Write your code here:
const sortYears = array => {
  //the function in sort determines how the array is sorted
  const res = array.sort((a,b) => b - a);
  return res;
}






// Feel free to uncomment the below code to test your function:

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]
