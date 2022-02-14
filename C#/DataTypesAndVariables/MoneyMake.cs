using System;

namespace MoneyMaker
{
  class MainClass
  {
    public static void Main(string[] args)
    {
      Console.WriteLine("Welcome to Money Maker!");
      Console.WriteLine("Please enter the number you wish to convert: ");
      string amountString = Console.ReadLine();
      double amount = Math.Floor(Convert.ToDouble(amountString));
      Console.WriteLine($"\n{amount} cents is equal to...");

      int quarterValue = 25;
      int dimeValue = 10;
      int nickelValue = 5;

      double quarters = Math.Floor(amount / quarterValue);
      double afterQuarter = amount % quarterValue;
      double dimes = Math.Floor(afterQuarter / dimeValue);
      double afterDimes = afterQuarter % dimeValue;
      double nickels = Math.Floor(afterDimes / nickelValue);
      double remainder = afterDimes % nickelValue;

      Console.WriteLine($"Quarters: {quarters}");
      Console.WriteLine($"Dimes: {dimes}");
      Console.WriteLine($"Nickels: {nickels}");
      Console.WriteLine($"Pennies: {remainder}");



    }
  }
}
