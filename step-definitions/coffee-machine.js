// Import our program
// (in this case an instance of a coffee machine
// so that we can run unit tests methods)
let CoffeeMachine = require('../index.js');


// Variables that we want to be able to
// share between different steps
let myMachine;
let coffee;
let cappucino;
let espresso;
let coffeeWithMilk;
let latte;
let macchiato;
let cortado;
//let menuChoice;

let priceOfCoffee = 20;
let priceOfCappucino = 25;
let priceOfEspresso = 20;
let priceOfCoffeWithMilk = 20;
let priceOfMacchiato = 25;
let priceOfLatte = 30;
let priceOfCortado = 20;

let coolMilk = 3; //° in Celsius



// Export the step-definitions
// (tests) so that Cucumber can
// read/use them
module.exports = function () {

  this.Given(/^that the machine is plugged in$/, function () {

    // Make a brand new coffee machine
    myMachine = new CoffeeMachine();

    // tell the machine that it is plugged in
    myMachine.poweredOn();
    // check if the property pluggedIn is true
    // this also works: assert(myMachine.pluggedIn)
    // but this is clearer
    assert.strictEqual(
      myMachine.pluggedIn,
      true,
      'Machine is not powered on or connected to electricity'
    );
  });

  this.Given(/^that water is available$/, function () {
    // tell the machine to connect to water
    myMachine.continuousWaterSupply();
    // check if the property connectedToWater is true
    assert.strictEqual(
      myMachine.connectedToWater,
      true,
      'Not connected to water'
    );
  });

  this.Given(/^that the machine has enough beans to grind$/, function () {
    // newly set-up machine
   
    assert.strictEqual(
      myMachine.checkIfEnoughCoffeeBeansForACup(),
      true,
      'Not enough coffee for a cup'
    );
   
  });

  this.Then(/^the user recieves a cup of coffee\.$/, function () {
    
    // Ok time to test if we really get som coffee...
    // we we should and not if we shouldn't
    myMachine.brewCoffee();
      assert.deepEqual(
        myMachine.hotCoffee,
        true,
        "no coffee for you young man"
      );
  });

  this.Given(/^that the machine has lactosfree milk$/, function () {

    assert.deepEqual( 
      myMachine.enoughMilkForCappucino(),
      true,
       "no milk for you young man");
  });

  this.Given(/^has enough coffeebeans to grind$/, function () {
    
    assert.strictEqual(
      myMachine.checkIfEnoughCoffeeBeansForACup(),
      true,
      'Not enough coffee for a cup'
    );

  });

  this.Given(/^has enough espressobeans to grind$/, function () {
  
    
    assert.strictEqual(
    myMachine.checkIfEnoughEspressoBeansForACup(),
    true,
    'Not enough espressobeans for a cup'
    );
  });

  this.When(/^the user chooses from the menu$/, function () {
    
    myMachine.menu()

    if (coffee){
    coffee = myMachine.coffeeAndPrices.Coffee;
    assert.deepEqual(
    myMachine.menu.coffeeAndPrices, 
    coffee,
    "There will be no coffee for you");
    }
    else if (cappucino){
    cappucino = myMachine.coffeeAndPrices.Cappucino;
    assert.deepEqual(
    myMachine.menu.coffeeAndPrices, 
    cappucino,
    "There will be no cappucino for you");
    }
    else if (espresso){
    espresso = myMachine.menu.coffeeAndPrices.Espresso;
    assert.deepEqual(
    myMachine.menu.coffeeAndPrices, 
    espresso,
    "There will be no espresso for you");
    }

    else if (coffeeWithMilk){
      coffeeWithMilk = myMachine.menu.coffeeAndPrices.CoffeeWithMilk;
      assert.deepEqual(
      myMachine.menu.coffeeAndPrices, 
      coffeeWithMilk,
      "There will be no coffee with milk for you");
      }

    else if (macchiato){
      macchiato = myMachine.menu.coffeeAndPrices.Macchiato;
      assert.deepEqual(
      myMachine.menu.coffeeAndPrices, 
      macchiato,
      "There will be no macchiato for you");
      }
    else if (latte){
      latte = myMachine.menu.coffeeAndPrices.Latte;
      assert.deepEqual(
      myMachine.menu.coffeeAndPrices, 
      latte,
      "There will be no macchiato for you");
        }
    else if (cortado){
      cortado = myMachine.menu.coffeeAndPrices.Cortado;
      assert.deepEqual(
      myMachine.menu.coffeeAndPrices, 
      cortado,
      "There will be no macchiato for you");
      }
     
  });

  this.When(/^the user pays the (\d+) kr$/, function (priceOfCoffee) {

    priceOfCoffee /= 1;
    myMachine.payForCoffee(priceOfCoffee);

    if (priceOfCoffee){
    priceOfCoffee = myMachine.coffeeAndPrices.coffee

    assert.deepEqual(
    myMachine.menu.coffeeAndPrices,
    priceOfCoffee,
    "You don't have enough money for a cup."

    )}
    else if (priceOfCappucino){

    priceOfCappucino = myMachine.coffeeAndPrices.cappucino;

    assert.strictEqual(
    myMachine.menu.coffeeAndPrices,
    priceOfCappucino,
    "You don't have enough money for a cup."
    )}
    else if (priceOfEspresso){
    priceOfEspresso = myMachine.coffeeAndPrices.espresso;

    assert.strictEqual(
    myMachine.menu.coffeeAndPrices,
    priceOfEspresso,
    "You don't have enough money for a cup."
    )}

    else if (priceOfCoffeWithMilk){
      priceOfCoffeWithMilk = myMachine.coffeeAndPrices.coffeeWithMilk;
  
      assert.strictEqual(
      myMachine.menu.coffeeAndPrices,
      priceOfCoffeWithMilk,
      "You don't have enough money for a cup."
      )}

      else if (priceOfMacchiato){
        priceOfMacchiato = myMachine.coffeeAndPrices.Macchiato;
    
        assert.strictEqual(
        myMachine.menu.coffeeAndPrices,
        priceOfMacchiato,
        "You don't have enough money for a cup."
        )}

     else if (priceOfLatte){
      priceOfLatte = myMachine.coffeeAndPrices.Latte;
      
        assert.strictEqual(
        myMachine.menu.coffeeAndPrices,
        priceOfLatte,
        "You don't have enough money for a cup."
      )}
      else if (priceOfCortado){
        priceOfCortado = myMachine.coffeeAndPrices.Cortado;
        
        assert.strictEqual(
        myMachine.menu.coffeeAndPrices,
        priceOfCortado,
        "You don't have enough money for a cup."
       )}

  });

  this.Then(/^the machine will prepare coffee$/, function () {
    myMachine.brewCoffee();

    assert.strictEqual(
      myMachine.hotCoffee,
      true,
      "No coffee for you"
    )

  });

  this.Then(/^the machine will prepare coffee w milk$/, function () {
    myMachine.makeCoffeeWithMilk();

    assert.strictEqual(
      myMachine.createCoffeeWMilk,
      true,
      "No coffee for you"
    )

  });

  this.Then(/^the machine will prepare cappucino$/, function () {
    myMachine.makeCappucino();

    assert.strictEqual(
      myMachine.deliciousCappucino,
      true,
      "No coffee for you"
    )

  });

  this.Then(/^the machine will prepare espresso$/, function () {
    myMachine.makeEspresso();

    assert.strictEqual(
      myMachine.spicyHotEspresso,
      true,
      "No coffee for you"
    )
  });

  this.Then(/^the machine will prepare macchiato$/, function () {
    
    myMachine.makeMacchiato();
    assert.strictEqual(
      myMachine.createMacchiato,
      true,
      "No coffee for you")
  });

    this.Then(/^the machine will prepare latte$/, function () {
      myMachine.makeLatte();

    assert.strictEqual(
      myMachine.createLatte,
      true,
      "No coffee for you"
      )

    });

    this.Then(/^the machine will prepare cortado$/, function () {
      myMachine.makeCortado();

      assert.strictEqual(
        myMachine.createCortado,
        true,
        "No coffee for you"
      )
    });

  ///Scenario buy cappucino

  this.Given(/^that the milk is cold enough$/, function () {

    myMachine.coldMilk();
   
    assert.equal(myMachine.milkTemperature,
      coolMilk, 
      "The milk isn't cool enough");

  });

  this.When(/^the user chooses a cappucino$/, function () {
    
    myMachine.menu();

    cappucino = myMachine.coffeeAndPrices.cappucino;
    assert.deepEqual(
    myMachine.menu.coffeeAndPrices, 
    cappucino,
    "There will be no cappucino for you");

  });

  this.When(/^pays the (\d+) kr$/, function (priceOfCappucino) {
    priceOfCappucino /= 1;
    myMachine.payForCoffee(priceOfCappucino);

    priceOfCappucino = myMachine.coffeeAndPrices.cappucino;

    assert.strictEqual(
    myMachine.menu.coffeeAndPrices,
    priceOfCappucino,
    "You don't have enough money for a cappucino.");

  });

  this.Then(/^the machine will prepare, and serve, a delicious cappucino$/, function () {
    myMachine.makeCappucino();
    
    assert.strictEqual(
      myMachine.deliciousCappucino,
      true,
      "No coffee for you"
    )
  });

  ///Scenario paying for coffee when user forgot his/hers wallet 


  this.Given(/^that the user wants to buy coffee$/, function () {
    
    myMachine.userWantsCoffee();

    assert.strictEqual(
      myMachine.userCoffee,
      true,
      "User don't want coffee"
    )

  });

  this.When(/^the user chooses coffee$/, function () {
   
    myMachine.menu()

    coffee = myMachine.coffeeAndPrices.coffee;
    assert.deepEqual(
    myMachine.menu.coffeeAndPrices, 
    coffee,
    "There will be no coffee for you");

  });

  this.When(/^the user pays using swish$/, function () {
   
    myMachine.payment();

      myMachine.payment.Swish = true;

      assert.deepEqual(
        myMachine.payment.Swish, 
        true, 
        "You can't pay using swish, try using card");
  });

  this.When(/^the user pays using card$/, function () {
   
    myMachine.payment();

    myMachine.payment.Card = true;

    assert.deepEqual(
      myMachine.payment.Card, 
      true, 
      "You can't pay using card, try swish");

  });

  this.Then(/^the machine prepares coffee$/, function () {
    
    myMachine.brewCoffee();

    assert.deepEqual(
      myMachine.hotCoffee, 
      true, 
      "You don't get any coffee");
  });


  ///Scenario The coffee-machine is cleaning itself between uses

  this.Given(/^that nobody buys coffee$/, function () {
    
    myMachine.unableToBuyCoffee();

    assert.strictEqual(
      myMachine.machineCantBeUsedWhileCleaning,
      true,
      "Can't be used while cleaning"
    )
  });

  this.Given(/^that it has been (\d+) min since last cleaning$/, function (minutes) {
    minutes = 30;

    myMachine.timeBetweenCleaning();

    assert.deepEqual(
      myMachine.timeToNextClean,
      minutes, 
      "No time for cleaning just yet");

      assert.deepEqual(
        myMachine.maxTimeBetweenCleaning,
        minutes, 
        "Time to clean");
  });

  this.Then(/^it will use steaming hot water$/, function () {
   
    myMachine.boilingWaterForCleaning();

    assert.deepEqual(
      myMachine.boilingWater,
      true, 
      "It's not cleaning");
  });

  this.Then(/^the machine will clean itself$/, function () {
    myMachine.cleanMachine()

    assert.deepEqual(
      myMachine.cleaningMachine,
      true,
      "It's not cleaning")

  });

  this.Then(/^it will take (\d+) minute$/, function (minutes) {
    minutes = 1;

    myMachine.cleaningTime();

    assert.deepEqual(
      myMachine.cleaning, 
      minutes,
      "Cleaning takes longer than a minute, something is wrong");
  });

  

}