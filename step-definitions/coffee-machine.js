// Import our program
// (in this case an instance of a coffee machine
// so that we can run unit tests methods)
let CoffeeMachine = require('../index.js');


// Variables that we want to be able to
// share between different steps
let myMachine;
let resultOfStartButton;
let coffee;
let cappucino;
let espresso;
//let menuChoice;

let priceOfCoffee = 20;
let priceOfCappucino = 25;
let priceOfEspresso = 20;


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
      'Expected the property pluggedIn to be true after calling the plugIn() method.'
    );
  });

  this.Given(/^that water is available$/, function () {
    // tell the machine to connect to water
    myMachine.continuousWaterSupply();
    // check if the property connectedToWater is true
    assert.strictEqual(
      myMachine.connectedToWater,
      true,
      'Expected the property connectedToWater to be true after calling the connectToWater() method.'
    );
  });

  this.Given(/^that the machine has enough beans to grind$/, function () {
    // newly set-up machine
   
    assert.strictEqual(
      myMachine.checkIfEnoughCoffeeBeansForACup(),
      true,
      'Expected to have enough coffee for a cup'
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
      'Expected to have enough coffee for a cup'
    );

  });

  this.Given(/^has enough espressobeans to grind$/, function () {
  
    
    assert.strictEqual(
    myMachine.checkIfEnoughEspressoBeansForACup(),
    true,
    'Expected to have enough espressobeans for a cup'
    );
  });

  this.When(/^the user chooses from the menu$/, function () {
    
    myMachine.menu()

    if (coffee){
    coffee = myMachine.coffeeAndPrices.coffee;
    assert.deepEqual(
    myMachine.menu.coffeeAndPrices, 
    coffee,
    "There will be no coffee for you");
    }
    else if (cappucino){
    cappucino = myMachine.coffeeAndPrices.cappucino;
    assert.deepEqual(
    myMachine.menu.coffeeAndPrices, 
    cappucino,
    "There will be no cappucino for you");
    }
    else if (espresso){
    espresso = myMachine.menu.coffeeAndPrices.espresso;
    assert.deepEqual(
    myMachine.menu.coffeeAndPrices, 
    espresso,
    "There will be no espresso for you");
    }
     
  });

  this.When(/^the user pays the (\d+) kr$/, function (money) {

    money /= 1;
    myMachine.payForCoffee(money);

    if (priceOfCoffee){
    priceOfCoffee = myMachine.coffeeAndPrices.coffee

    assert.deepEqual(
    myMachine.menu.coffeeAndPrices,
    priceOfCoffee,
    "Du har inte tillräckligt med pengar för en kopp kaffe."

    )}
    else if (priceOfCappucino){

    priceOfCappucino = myMachine.coffeeAndPrices.cappucino;

    assert.strictEqual(
    myMachine.menu.coffeeAndPrices,
    priceOfCappucino,
    "Du har inte tillräckligt med pengar för en cappucino."
    )}
    else if (priceOfEspresso){
    priceOfEspresso = myMachine.coffeeAndPrices.espresso;

    assert.strictEqual(
    myMachine.menu.coffeeAndPrices,
    priceOfEspresso,
    "Du har inte tillräckligt med pengar för en kopp kaffe."
    )}

  });

  this.Then(/^the machine will prepare coffee$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Then(/^the machine will prepare cappucino$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Then(/^the machine will prepare espresso$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

}