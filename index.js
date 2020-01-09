// A class that defines how a
// coffee machine shall work

class CoffeeMachine {

  constructor() {
    this.pluggedIn = false;
    this.connectedToWater = false;
    this.moneyPaid = 0;
    this.pricePerCupofCoffee = 20 // in SEK

    // some settings
    this.coffeePerCup = 14; // in grams
    this.amountOfCoffeeBeans = 2000; //in grams
    this.amountOfEspressoBeans = 2000; //in grams
  }
  // maintenance

  plugIn() {
    this.pluggedIn = true;
  }
  connectToWater() {
    this.connectedToWater = true;
  }

  pressStartButton() {
    // here we will need to call
    // a number of internal methods
    // (se below)
    // in the correcto order
    // and abort if not enough coffee etc

    // FOR NOW JUST RETURN "here's your coffee"
    // if there is enough money inserted
    if (this.paidMoney >= this.pricePerCup) {
      return "here's your coffee";
    }
  }

  // internals

  brewCoffee() {
    // one cup at a time
    // heat water... etc
  }


  checkIfEnoughCoffeeBeansForACup() {

    return this.amountOfCoffeeBeans >= this.coffeePerCup;
  }

  fillWithCoffee(){

    this.amountOfCoffeeBeans = 2000;
  }

  paidMoney(){

    let payment = 20;

  }


}

// Export the CoffeeMachine class
module.exports = CoffeeMachine;