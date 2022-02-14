// Write your code here:
const greetAliens = (list) =>{
  for (alien in list){
    console.log(`Oh powerful ${list[alien]}, we humans offer our unconditional surrender!`)
  }
}


// When you're ready to test your code, uncomment the below and run:

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);
