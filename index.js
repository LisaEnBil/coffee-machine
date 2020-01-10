// A class that defines how a
// coffee machine shall work

class CoffeeMachine {

  constructor() {
    this.pluggedIn = false;
    this.connectedToWater = false;
    this.moneyPaid = 20;
    this.pricePerCupofCoffee = 20; // in SEK
    this.hotCoffee = false;
    

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


  checkIfEnoughCoffeeBeansForACup() {

    return this.amountOfCoffeeBeans >= this.coffeePerCup;
  }

  fillWithCoffee(){

    this.amountOfCoffeeBeans = 2000;
  }

  paidMoney(){

   return this.moneyPaid = 20;
  }

  pressCoffeeButton() {
    // here we will need to call
    // a number of internal methods
    // (se below)
    // in the correcto order
    // and abort if not enough coffee etc

    // FOR NOW JUST RETURN "here's your coffee"
    // if there is enough money inserted
    
    return this.moneyPaid >= this.pricePerCupOfCoffee;
       
    
  }

  // internals

  brewCoffee() {
    
   return this.hotCoffee = true;

  }


}

// Export the CoffeeMachine class
module.exports = CoffeeMachine;