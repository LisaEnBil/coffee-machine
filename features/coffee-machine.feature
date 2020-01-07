Feature:
  As a coffee buyer
  I want a basic machine that
  I can put a 10 kr coin in
  and get a black cup of coffee back
  because I crave caffeine.

  Scenario Outline:
    Given that the machine is plugged in
    And that water is available
    And that the machine has enough ground coffee
    And the machine has plastic cups
    When the user inserts a <money1> kr coin
    And the user inserts a <money2> kr coin
    And presses the "start" button
    Then the user recieves <cup> cup of coffee.

    Examples:
      | money1 | money2 | cup |
      | 10     | 0      | 1   |
      | 5      | 5      | 1   |
      | 1      | 1      | 0   |
      | "byxknapp" | 1  | 0   |