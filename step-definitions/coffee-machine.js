// Import our program
// (in this case an instance of a coffee machine
// so that we can run unit tests methods)
let CoffeeMachine = require('../index.js');


// Variables that we want to be able to
// share between different steps
let myMachine;
let resultOfStartButton;

// Export the step-definitions
// (tests) so that Cucumber can
// read/use them
module.exports = function () {

  this.Given(/^that the machine is plugged in$/, function () {

    // Make a brand new coffee machine
    myMachine = new CoffeeMachine();

    // tell the machine that it is plugged in
    myMachine.plugIn();
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
    myMachine.connectToWater();
    // check if the property connectedToWater is true
    assert.strictEqual(
      myMachine.connectedToWater,
      true,
      'Expected the property connectedToWater to be true after calling the connectToWater() method.'
    );
  });

  this.Given(/^that the machine has enough coffeebeans to grind$/, function () {
    // newly set-up machine
   
    assert.strictEqual(
      myMachine.checkIfEnoughCoffeeBeansForACup(),
      true,
      'Expected to have enough coffee for a cup'
    );
   
  });
  
  this.When(/^the machine recieves sufficient funds$/, function() {
   
    priceForCoffeeCup = 20;
   

      assert.strictEqual(
        myMachine.paidMoney(),
        priceForCoffeeCup,
         "There is enough money for coffee");
  });

  
  this.When(/^presses the coffee button$/, function () {
  
      resultOfStartButton = myMachine.pressCoffeeButton();

      assert.strictEqual(
        myMachine.pressCoffeeButton(),
        false,
         "no coffee for you young man");
    
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

}