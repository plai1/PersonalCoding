const menu = {
  _courses : {
    appetizers:[] ,
    mains:[] ,
    desserts:[]
  },

  //get lists of each food
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  get courses(){
    return{
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },

  //set list of each food
  set appetizers(food) {
    this._courses.appetizers.append(food)
  },
  set mains(food) {
    this._courses.mains.append(food)
  },
  set desserts(food) {
    this._courses.desserts.append(food)
  },





  addDishToCourse (courseName, name, price){
    var dish = {name : name, price : price}
    this._courses[courseName].push(dish)
  },

  getRandomDishFromCourse (coursename){
    const dishes = this._courses[coursename];
    var choose = Math.floor(Math.random() * dishes.length)
    return dishes[choose]
  },

  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers')
    const mains = this.getRandomDishFromCourse('mains')
    const desserts = this.getRandomDishFromCourse('desserts')
    const totalPrice = appetizer.price + mains.price + desserts.price;

    return `Your meal is ${appetizer.name}, ${mains.name}, and ${desserts.name}. The price is $${totalPrice}.`
  }
};


menu.addDishToCourse('appetizers', 'Cheese Sticks', 4.59)
menu.addDishToCourse('appetizers', 'Nachos', 3.29)
menu.addDishToCourse('appetizers', 'Garlic Bread', 6.32)
menu.addDishToCourse('mains', 'Pasta and Meatballs', 11.25)
menu.addDishToCourse('mains', 'Hamburger and Fries', 9.43)
menu.addDishToCourse('mains', 'Pizza', 12.73)
menu.addDishToCourse('desserts', 'Ice Cream', 4.98)
menu.addDishToCourse('desserts', 'Cheesecake', 6.19)
menu.addDishToCourse('desserts', 'Flan Pudding', 5.62)

const meal = menu.generateRandomMeal()

//destructive caller
let { appetizers } = menu._courses
console.log(appetizers)
