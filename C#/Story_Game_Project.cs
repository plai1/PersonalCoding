using System;

namespace ChooseYourOwnAdventure
{
  class Program
  {
      static void Main(string[] args)
    {
      /* THE MYSTERIOUS NOISE */

      // Start by asking for the user's name:
      Console.Write("What is your name?: ");
      string name = Console.ReadLine();
      Console.WriteLine($"Hello, {name}! Welcome to our story.");
      Console.WriteLine("It begins on a cold rainy night. You're sitting in your room and hear a noise coming from down the hall. Do you go investigate?");
      Console.Write("Type YES or NO: ");
      string noiseChoice = Console.ReadLine();
      string noiseChoiceUpper = noiseChoice.ToUpper();
      if (noiseChoiceUpper == "NO"){
        Console.WriteLine("Not much of an adventure if we \ndon't leave our room!");
        Console.WriteLine("THE END.");
      }
      else if (noiseChoiceUpper == "YES"){
        Console.WriteLine("You walk into the hallway and see a \nlight coming from under a door down the \nhall.\nYou walk towards it. Do you open it or\nknock?");
        Console.Write("Type OPEN or KNOCK: ");
        string doorChoice = Console.ReadLine().ToUpper();
        if (doorChoice == "KNOCK"){
          Console.WriteLine("A voice behind the door speaks. It says,\n\"Answer this riddle: \"\n\"poor people have it. Rich people need\nit. If you eat it you die. What is it?");
          Console.Write("Type your answer: ");
          string riddleAnswer = Console.ReadLine().ToUpper();
          if(riddleAnswer == "NOTHING"){
            Console.WriteLine("The door opens and NOTHING is there.\nYou turn off the light and run back to\nyour room and lock the door.\nTHE END.");
          }
          else{
            Console.WriteLine("You answered incorrectly. The door\ndoesn't open.\nTHE END.");
          }
        }
        else if(doorChoice == "OPEN"){
          Console.WriteLine("The door is locked! See if one of your\nthree keys will open it.");
          Console.Write("Enter a number (1-3): ");
          string keyChoice = Console.ReadLine().ToUpper();
          switch(keyChoice){
            case "1":
              Console.WriteLine("You choose the first key. Lucky choice!\nThe door opens and NOTHING is there.\nStrange...\nThe End.");
              break;
            case "2":
              Console.WriteLine("You choose the second key. The door\ndoesn't open.\nThe End.");
              break;
            case "3":
              Console.WriteLine("You choose the third key. The door\ndoesn't open.\nTHE END.");
              break;
            default:
              Console.WriteLine("This choice is not optional so the game ends.\nTHE END.");
              break;
          }
        }
      }
    }
  }
}
