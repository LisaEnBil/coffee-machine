Feature: Coffee-machine
 

  Scenario: Use coffee-machine to buy coffee
    Given that the machine is plugged in
    And that water is available
    And that the machine has enough coffeebeans to grind
    When the machine recieves sufficient funds
    And presses the <coffee> button
    Then the user recieves a cup of coffee.

    
