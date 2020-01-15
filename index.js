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
    this.spicyHotEspresso = false;
    this.createMacchiato = false;
    this.createCoffeeWMilk = false;
    this.createLatte = false;
    this.createCortado = false;
    this.enoughMilkForCap = 90;
    this.lactosfreeMilk = 2000; //in ml
    this.skimmedMilk = false;

    this.milkTemperature = 6;
    this.supposedMilkTemperature = 3;

    // some settings
    this.coffeePerCup = 14; // in grams
    this.espressoPerCup = 17; //in grams
    this.amountOfCoffeeBeans = 2000; //in grams
    this.amountOfEspressoBeans = 2000; //in grams

    this.coffeeAndPrices = {

      Coffee: 20,
      CoffeeWithMilk: 20,
      Cappucino: 25,
      Espresso: 20,
      Macchiato: 25,
      Latte: 30,
      Cortado: 20

    };

    this.paymentMethods = {
      Swish: false, 
      Card:false
    };

  
    this.machineCantBeUsedWhileCleaning = false;
    this.timeToNextClean = 30; 
    this.maxTimeBetweenCleaning = 30; //in minutes
    this.boilingWater = false;
    this.cleaningMachine = false;
    this.cleaning = 1; //in minutes
    
  
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

    return this.deliciousCappucino = true

  }

  makeEspresso(){

    return this.spicyHotEspresso = true;
    
  }
  makeMacchiato(){

    return this.createMacchiato = true;
    
  }
  makeLatte(){

    return this.createLatte = true;
    
  }
  makeCortado(){

    return this.createCortado = true;
    
  }
  makeCoffeeWithMilk(){
    return this.createCoffeeWMilk = true;
    
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

  payment(){
    
   if (this.paymentMethods.Swish){

     return Swish; 
   }

   else if(this.paymentMethods.Card){
     return Card;
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

  coldMilk(){
    
    if (this.milkTemperature > this.supposedMilkTemperature){

      return this.milkTemperature = 3;
    }

  }
  unableToBuyCoffee(){
    
    this.machineCantBeUsedWhileCleaning = true;

  }

  timeBetweenCleaning(){

    if (this.timeToNextClean >= this.maxTimeBetweenCleaning){

      return this.maxTimeBetweenCleaning;
    }
    else if (this.timeToNextClean < this.maxTimeBetweenCleaning){

      return this.timeToNextClean;
    }
  }

  cleanMachine(){

    return this.cleaningMachine = true;
  }

  boilingWaterForCleaning(){

    if (this.maxTimeBetweenCleaning){
      return this.boilingWater = true;
    }

  }

  cleaningTime(){

    return this.cleaning;

  }

  userWantsCoffee(){
    this.userCoffee = true;

      return this.userCoffee;
  }


}

// Export the CoffeeMachine class
module.exports = CoffeeMachine;