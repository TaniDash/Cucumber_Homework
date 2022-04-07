$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/LoginFeature.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios billling website login functionality validation",
  "description": "",
  "id": "techfios-billling-website-login-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TF"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 2168654500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_techfios_login_page()"
});
formatter.result({
  "duration": 1189719900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User shpould be able to login with valid credentials from Database",
  "description": "",
  "id": "techfios-billling-website-login-functionality-validation;user-shpould-be-able-to-login-with-valid-credentials-from-database",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@TF_feature2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User enters \"username\" from database",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"password\" from database",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User clicks on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 13
    }
  ],
  "location": "LoginStepDefinition.user_enters_from_database(String)"
});
formatter.result({
  "duration": 3564801500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 13
    }
  ],
  "location": "LoginStepDefinition.user_enters_from_database(String)"
});
formatter.result({
  "duration": 3143790900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 4857621600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 241008000,
  "status": "passed"
});
formatter.after({
  "duration": 889030000,
  "status": "passed"
});
});