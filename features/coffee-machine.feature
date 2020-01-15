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

  Scenario: There is not enough beans for a cup of coffee
    



