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

  this.Given(/^that the machine has enough ground coffee$/, function () {
    // newly unpacked machine
    // so expect it to have no coffee
    // and the result to be false
    assert.deepEqual(
      myMachine.checkIfEnoughCoffeeForACup(),
      false,
      'Expected a new machine to not have enough coffee'
    );
    // Now add some ground coffee to the machine
    // (100 grams should be enough for a cup always)
    myMachine.fillWithCoffee(2000);
    // Then check again expect result to be true
    assert.deepEqual(
      myMachine.checkIfEnoughCoffeeForACup(),
      true,
      'Expected to have enough coffee for a cup (after filling it with 100 grams of ground coffee'
    );
  });

 
  this.When(/^the user inserts a (\d+) kr coin$/, function (amountOfMoney) {

    // Stupid Cucumber - sends the number
    // as a string to our test function
    // so convert it to a number (by dividing with 1)
    amountOfMoney /= 1;

    let moneyBefore = myMachine.insertedMoney;
    myMachine.insertMoney(amountOfMoney);
    assert.deepEqual(
      myMachine.insertedMoney,
      moneyBefore + amountOfMoney,
      "Expected the amount of money inserted to increase with the amount inserted"
    )
  });

  this.When(/^the machine recieves sufficient funds$/, function(paymentForCoffee) {
    
      let payment = myMachine.paydMoney;
      myMachine.paydMoney(paymentForCoffee);
      assert.deepEqual(
        actual, expected, "[message]");
  });

  
  this.When(/^presses the "([^"]*)" button$/, function (buttonName) {
    // Now this step handles presses on all
    // buttons as long as you write their names
    // inside quotes - is this good not necessarily
    // because now this step will neeed to handle
    // all button presses... (with conditional logic)
    if (buttonName === 'start') {
      // For now just say everything is fine
      // (not a real test)
      resultOfStartButton = myMachine.pressStartButton();
    }
    else {
      assert(false, "The only button on this machine should be the start button")
    }
  });


  this.Then(/^the user recieves (\d+) cup of coffee\.$/, function (cups) {
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