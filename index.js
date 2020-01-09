// A class that defines how a
// coffee machine shall work

class CoffeeMachine {

  constructor() {
    this.pluggedIn = false;
    this.connectedToWater = false;
    this.paydMoney = 0;
    // these two properties in gram
    this.amountOfCoffee = 0;
    // some settings
    this.coffeePerCup = 14; // in grams
    this.pricePerCupofCoffee = 20 // in SEK
  }

  // maintenance

  plugIn() {
    this.pluggedIn = true;
  }

  connectToWater() {
    this.connectedToWater = true;
  }

  fillWithCoffee(amount) {
    // add amount to total amount of 
    // ground coffee in the machine
    this.amountOfCoffee += amount;
  }

  
  pressStartButton() {
    // here we will need to call
    // a number of internal methods
    // (se below)
    // in the correcto order
    // and abort if not enough coffee etc

    // FOR NOW JUST RETURN "here's your coffee"
    // if there is enough money inserted
    if (this.insertedMoney >= this.pricePerCup) {
      return "here's your coffee";
    }
  }

  // internals

  brewCoffee() {
    // one cup at a time
    // heat water... etc
  }


  checkIfEnoughCoffeeForACup() {
    return this.amountOfCoffee >= this.coffeePerCup;
  }


}

// Export the CoffeeMachine class
module.exports = CoffeeMachine;