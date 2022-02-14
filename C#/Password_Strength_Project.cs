using System;

namespace PasswordChecker
{
  class Program
  {
    public static void Main(string[] args)
    {
      int minLength = 8;
      string uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      string lowercase = "abcdefghijklmnopqrstuvwxyz";
      string digits = "0123456789";
      string specialChars = "?/!@#$%^&*,-_;'";
      int score = 0;

      Console.WriteLine("Please enter a password to evaluate length");

      string password = Console.ReadLine();
      Console.WriteLine("Your password is: " + password);

      if(password.Length >= minLength){
        score++;
      }
      Console.WriteLine(score);
      if(Tools.Contains(password, uppercase)){
        score++;
      }
      Console.WriteLine(score);
      if(Tools.Contains(password, lowercase)){
        score++;
      }
      Console.WriteLine(score);
      if(Tools.Contains(password, digits)){
        score++;
      }
      Console.WriteLine(score);
      if(Tools.Contains(password, specialChars)){
        score++;
      }
      Console.WriteLine(score);

      if (score >= 4){
        Console.WriteLine("Your password is extremely strong");
      }
      else if (score == 3){
        Console.WriteLine("Your password is strong");
      }
      else if (score == 2){
        Console.WriteLine("Your password is medium");
      }
      else if (score == 1){
        Console.WriteLine("Your password is weak");
      }
      else{
        Console.WriteLine("Your password doesn't meet any of the standards");
      }

    }
  }
}
