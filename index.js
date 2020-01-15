// A class that defines how a
// coffee machine shall work

class CoffeeMachine {

  constructor() {
    this.pluggedIn = false;
    this.connectedToWater = false;
    this.pricePerCupofCoffee = 20; // in SEK
    //this.teaWater = false;
    this.hotCoffee = false;
    this.deliciousCappucino = false;
    this.spicyHotEspresso = false;
    this.enoughMilkForCap = 90;
    this.lactosfreeMilk = 2000; //in ml

    // some settings
    this.coffeePerCup = 14; // in grams
    this.espressoPerCup = 17; //in grams
    this.amountOfCoffeeBeans = 2000; //in grams
    this.amountOfEspressoBeans = 2000; //in grams

    this.coffeeAndPrices = {

      Coffee: 20,
      Cappucino: 25,
      Espresso: 20
    };
  
  }
  // maintenance

  //Properties

  poweredOn() {
    this.pluggedIn = true;
  }
  continuousWaterSupply() {
    this.connectedToWater = true;
  }
  checkIfEnoughCoffeeBeansForACup() {

    return this.amountOfCoffeeBeans >= this.coffeePerCup;
  }
  checkIfEnoughEspressoBeansForACup() {

    return this.amountOfEspressoBeans >= this.espressoPerCup;
  }

  pressCoffeeButton() {

    return this.moneyPaid >= this.pricePerCupOfCoffee;
  }

  brewCoffee() {

    return this.hotCoffee = true;

  }
  makeCappucino(){

    return this.deliciousCappucino = true;

  }
  makeEspresso(){

    return this.spicyHotEspresso = true;
  }

  enoughMilkForCappucino() {

    return this.lactosfreeMilk >= this.enoughMilkForCap;

  }

  payForCoffee() {

    if (this.coffeeAndPrices.coffee) {
      return 20;
    }
    else if (this.coffeeAndPrices.cappucino ) {
      return 25;
    }
    else if(this.coffeeAndPrices.espresso){
      return 20;
    }
  }

  menu() {

    if (this.coffeeAndPrices.coffee) {
      return coffee;
    }
    else if (this.coffeeAndPrices.cappucino) {
      return cappucino;
    }
    else if (this.coffeeAndPrices.espresso) {
      return espresso;

    }
  }

}

// Export the CoffeeMachine class
module.exports = CoffeeMachine;