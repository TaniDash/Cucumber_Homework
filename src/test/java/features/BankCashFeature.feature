@BankCash1
Feature: Techfios bank and cash New Account Functionality

  Scenario Outline: User should be able to login with valid credentials and open a new account
    Given User is on techfios login page
    When User enters username as "<username>"
    When User enters password as "<password>"
    When User clicks on signin button
    Then User should land on dashboard page
    When User clicks on "bankCash" button
    And User clicks on "newAccount" button
    And User enters accountTitle as "<accountTitle>" in accounts page
    And User enters description as "<description>" in accounts page
    And User enters initialBalance as"<initialBalance>" in accounts page
    And User enters accountNumber as "<accountNumber>" in accounts page
    And User enters contactPerson as "<contactPerson>" in accounts page
    And User enters phone as "<Phone>" in accounts page
    And User enters internetBankingURL as "<internetBankingURL>" in accounts page
    And User clicks on submit
    Then User should be able to validate account created successfully

    Examples: 
      | username          | password | accountTitle | description     | initialBalance | accountNumber | contactPerson | Phone       | internetBankingURL     |
      | demo@techfios.com | abc123   | saving       | my first saving |            500 |      58956348 | TaniaD        | 916 856 963 | https://www.chase.com/ |
