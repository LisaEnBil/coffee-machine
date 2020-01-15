Feature: Coffee-machine
  As a user I want to buy different sorts of coffee

  Background: Buying coffee
    Given that the machine is plugged in
    And that water is available
    And that the machine has lactosfree milk

  Scenario Outline: Use coffee-machine to buy coffee
    Given has enough <beans> to grind
    When the user chooses from the menu
    And the user pays the <sum> kr
    Then the machine will prepare <menu>

    Examples:
      | menu      | beans         | sum |
      | coffee    | coffeebeans   | 20  | 
      | cappucino | espressobeans | 25  |
      | espresso  | espressobeans | 20  |

  Scenario: Buying a cappucino with milk
    Given that the milk is cold enough
    When the user chooses a cappucino
    And pays the 25 kr 
    Then the machine will prepare a delicious cappucino 

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


