// A class that defines how a
// coffee machine shall work

class CoffeeMachine {

  constructor() {
    this.pluggedIn = false;
    this.connectedToWater = false;
    this.numberOfCups = 0;
    this.insertedMoney = 0;
    // these two properties in gram
    this.amountOfCoffee = 0;
    // some settings
    this.coffeePerCup = 13; // in grams
    this.pricePerCup = 10 // in SEK
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

  fillWithCups(amount) {
    // add amount of cups to the
    // total number of cups in the machine
    this.numberOfCups += amount;
  }

  // user choices

  insertMoney(inserted) {
    // add inserted money to total
    // money inserted so far
    if (typeof inserted !== 'number') {
      throw (new Error('You must insert money not ' + nonMoney));
    }
    this.insertedMoney += inserted;
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

  dispenseCup() {

  }

  dispenseCoffee() {

  }

  checkIfEnoughCoffeeForACup() {
    return this.amountOfCoffee >= this.coffeePerCup;
  }

  checkIfAnyCupsLeft() {
    return this.numberOfCups >= 1;
  }

}

// Export the CoffeeMachine class
module.exports = CoffeeMachine;