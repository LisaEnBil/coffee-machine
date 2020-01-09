Feature:
  As a coffee buyer
  I want a machine that can make
  me tea, coffee and coffee with milk.


  Scenario Outline:
    Given that the machine is plugged in
    And that water is available
    And that the machine has enough coffeebeans to grind
    And has milk to add to coffee
    When the machine recieves sufficient funds
    And choses type of coffee
    Then the user recieves a cup of <coffee1>.

    Examples:
      | coffee1         |
      | tea             |
      | coffee          |
      | coffee with milk|
