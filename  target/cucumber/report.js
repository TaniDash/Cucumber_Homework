$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/BankCashFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@BankCash1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on \"signin\" button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"bankCash\" button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on \"newAccount\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters accountTitle as \"\u003caccountTitle\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters description as \"\u003cdescription\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters initialBalance as\"\u003cinitialBalance\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters accountNumber as \"\u003caccountNumber\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters contactPerson as \"\u003ccontactPerson\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters phone as \"\u003cPhone\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters internetBankingURL as \"\u003cinternetBankingURL\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on \"submit\" button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "Phone",
        "internetBankingURL"
      ],
      "line": 23,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "saving",
        "my first saving",
        "500",
        "58956348",
        "TaniaD",
        "916 856 963",
        "https://www.chase.com/"
      ],
      "line": 24,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3845757000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@BankCash1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on \"signin\" button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"bankCash\" button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on \"newAccount\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters accountTitle as \"saving\" in accounts page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters description as \"my first saving\" in accounts page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters initialBalance as\"500\" in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters accountNumber as \"58956348\" in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters contactPerson as \"TaniaD\" in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters phone as \"916 856 963\" in accounts page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters internetBankingURL as \"https://www.chase.com/\" in accounts page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on \"submit\" button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_techfios_login_page()"
});
formatter.result({
  "duration": 1035300200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 3197279200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 3138719000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "signin",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.user_clicks_on_button(String)"
});
formatter.result({
  "duration": 5959328300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 209377400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bankCash",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.user_clicks_on_button(String)"
});
formatter.result({
  "duration": 2102920800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newAccount",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.user_clicks_on_button(String)"
});
formatter.result({
  "duration": 3480139000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "saving",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.user_enters_accountTitle_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 127216500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "my first saving",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinition.user_enters_description_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 131790000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_initialBalance_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 105111600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "58956348",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_accountNumber_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 115317200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TaniaD",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_contactPerson_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 127084800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "916 856 963",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_enters_phone_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 125184400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.chase.com/",
      "offset": 35
    }
  ],
  "location": "LoginStepDefinition.user_enters_internetBankingURL_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 172287600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.user_clicks_on_button(String)"
});
formatter.result({
  "duration": 3643724500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 2256873900,
  "status": "passed"
});
formatter.after({
  "duration": 985334900,
  "status": "passed"
});
});