Feature: Coffee-machine
  As a user I want to buy different sorts of coffee

  Background: Buying some sort of coffee-drink
    Given that the machine is plugged in
    And that water is available
    And that the machine has lactosfree milk

  Scenario Outline: Use coffee-machine to buy different sorts of coffee
    Given has enough <beans> to grind
    When the user chooses from the menu
    And the user pays the <sum> kr
    Then the machine will prepare <menu>

    Examples:
      | menu         | beans         | sum |
      | coffee       | coffeebeans   | 20  | 
      | coffee w milk| coffeebeans   | 20  |
      | cappucino    | espressobeans | 25  |
      | espresso     | espressobeans | 20  |
      | macchiato    | espressobeans | 25  |
      | latte        | espressobeans | 30  |
      | cortado      | espressobeans | 30  |
      

  Scenario: Buying a cappucino
    Given that the milk is cold enough
    When the user chooses a cappucino
    And pays the 25 kr 
    Then the machine will prepare, and serve, a delicious cappucino 
    

  Scenario Outline: Paying for coffee when user forgot his/hers wallet 
    Given that the user wants to buy coffee
    When the user chooses coffee
    And the user pays using <paymentmethods>
    Then the machine prepares coffee

    Examples: 
      |paymentmethods|
      |swish         |
      |card          |
  
    
  Scenario: The coffee-machine is cleaning itself between uses
    Given that nobody buys coffee
    And that it has been 30 min since last cleaning
    Then it will use steaming hot water
    And the machine will clean itself
    And it will take 1 minute

  Scenario: User wants to buy coffee but there is no water connected to machine
    Given that the user wants to buy coffee
    When the user sees that the machine isn't connected to water
    Then the user goes to buy coffee somewhere else
  
  Scenario: User wants to buy tea-water
    Given that the machine is plugged in
    And that the machine is connected to water 
    When the user chooses tea
    Then the machine serves hot water

  Scenario: User buys coffee and changes his/her mind in the middle of brewing
    Given the user paid and chose coffee
    When the user presses the cancel-button
    Then the machine immediately stops the brewing
    And user then have to pay for new coffee 

  Scenario: User puts his/her hand down the coffee-bean grinder
    Given that user doesn't have all goats in the pen
    When user puts hand in coffee grinder 
    Then users hand grinds up
    And the machine stop because of malfunction
  
  Scenario: There is an electricity-shortage
    Given that user wants to buy cappucino with card
    When there is a electricity shortage 
    And the coffee-machine goes offline for some time
    Then the machine won't produce cappucino because of risk of bacteria in warm milk
    And the card-reader will send a pre-programmed message to who-evers responsible for the card-reader

  Scenario: User wants to buy regular coffee but there is not enough beans
    Given that the user wants coffee
    And  that there is less than 14 grams coffeebeans left in coffeebean-container
    When the user sees the coffee-menu on screen
    Then the machine shows the alternatives that uses regular coffeebeans as shadowed
    And un-choosable

  Scenario: User wants to buy a drink which contains milk, but there is not enough milk left
    Given that user want drink with milk
    And that there is to little milk left
    When the user sees the coffee-menu on screen
    Then the machine shows the alternatives containing milk as shadowed
    And un-choosable

    
    
