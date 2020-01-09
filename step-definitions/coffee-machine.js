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
   
    myMachine.paidMoney();

      assert.deepEqual(
        myMachine.paidMoney,
        myMachine.pricePerCup,
         "There is enough money for coffee");
  });

  
  this.When(/^presses the "([^"]*)" button$/, function (buttonName) {
  

    if (buttonName === 'coffee') {
     
      resultOfStartButton = myMachine.pressStartButton();
    }
    else {
      assert(false, "The only button on this machine should be the start button")
    }
  });


  this.Then(/^the user recieves a cup of coffee\.$/, function (cups) {
    cups /= 1;
    // Ok time to test if we really get som coffee...
    // we we should and not if we shouldn't
    if (cups === 1) {
      assert.deepEqual(
        resultOfStartButton,
        "here's your coffee",
        "Didn't get any coffee? You should. We inserted enough."
      );
    }
    else {
      assert.notDeepEqual(
        resultOfStartButton,
        "here's your coffee",
        "Did you get coffee? You shouldn't. We didn't insert enough money!"
      );
    }

  });

}