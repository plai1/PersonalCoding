const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field){
    this.field = field;
    this.game = true;
    var row, col;
    for(var i = 0 ; i < field.length;i++){
      for (var j = 0; j < field[i].length; j++){
        if (field[i][j] == pathCharacter){
          row = i;
          col = j;
        }
      }
    }
    this.position = [row, col];
  }

  print(){
    this.field.forEach(element =>
      console.log(element.join(''))
    );
  }

  direction(){
    var direct = window.prompt("Please input a direction: ");
    if(direct.ToUpper() == 'L'){}
    else if(direct.ToUpper() == 'R'){}
    else if(direct.ToUpper() == 'U'){}
    else if(direct.ToUpper() == 'D'){}
    else{
      console.log("Please input a valid direction.");
      this.direction;
    }
  }

  gameOver(){
    this.game = false;
  }

  fellInHole(){
    console.log("Sorry, you fell into a hole. The game is over");
    this.gameOver();
  }


}

const myField = new Field([
  [hole, fieldCharacter, hole],
  [fieldCharacter, pathCharacter, fieldCharacter],
  [fieldCharacter, hat, fieldCharacter]
]);

myField.print();
myField.gameOver();
console.log(myField.position);
