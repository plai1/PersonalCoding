const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:

const declineEverything = (array) => {
  array.forEach(politelyDecline);
}

const acceptEverything = (array) => {
  array.forEach(item =>{
    console.log(`Ok, I guess I will eat some ${item}.`)
  })
}

declineEverything(veggies);
acceptEverything(veggies);
