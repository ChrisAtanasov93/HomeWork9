$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/cucumberTest.feature");
formatter.feature({
  "name": "User trying to login to the backend",
  "description": "  As a administrator,\n  I want to login so that I can edit orders",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Incorrect Login Details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on Admin Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "AdminLoginStepDefinition.the_user_is_on_Admin_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters \"adasdas\" as username",
  "keyword": "When "
});
formatter.match({
  "location": "AdminLoginStepDefinition.he_enters_as_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters \"fasgasgas\" as password",
  "keyword": "And "
});
formatter.match({
  "location": "AdminLoginStepDefinition.he_enters_as_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he clicks the login button",
  "keyword": "And "
});
formatter.match({
  "location": "AdminLoginStepDefinition.he_clicks_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees the message \" No match for Username and/or Password. \"",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminLoginStepDefinition.user_gets_the_message(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [ No match for Username and/or Password. ] but found [Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour or reset password.\n×]\r\n\tat org.testng.Assert.fail(Assert.java:99)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:1037)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:140)\r\n\tat org.testng.Assert.assertEquals(Assert.java:122)\r\n\tat org.testng.Assert.assertEquals(Assert.java:629)\r\n\tat org.testng.Assert.assertEquals(Assert.java:639)\r\n\tat cucumberTests.AdminLoginStepDefinition.user_gets_the_message(AdminLoginStepDefinition.java:58)\r\n\tat ✽.user sees the message \" No match for Username and/or Password. \"(src/test/java/resources/cucumberTest.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Incorrect Login with no Name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on Admin Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "AdminLoginStepDefinition.the_user_is_on_Admin_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters no data as username",
  "keyword": "When "
});
formatter.match({
  "location": "AdminLoginStepDefinition.he_enters_no_data_as_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters \"parola123!\" as password",
  "keyword": "And "
});
formatter.match({
  "location": "AdminLoginStepDefinition.he_enters_as_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he clicks the login button",
  "keyword": "And "
});
formatter.match({
  "location": "AdminLoginStepDefinition.he_clicks_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees the message \" No match for Username and/or Password. \"",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminLoginStepDefinition.user_gets_the_message(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [ No match for Username and/or Password. ] but found [No match for Username and/or Password.\n×]\r\n\tat org.testng.Assert.fail(Assert.java:99)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:1037)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:140)\r\n\tat org.testng.Assert.assertEquals(Assert.java:122)\r\n\tat org.testng.Assert.assertEquals(Assert.java:629)\r\n\tat org.testng.Assert.assertEquals(Assert.java:639)\r\n\tat cucumberTests.AdminLoginStepDefinition.user_gets_the_message(AdminLoginStepDefinition.java:58)\r\n\tat ✽.user sees the message \" No match for Username and/or Password. \"(src/test/java/resources/cucumberTest.feature:19)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Incorrect Login with no Password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on Admin Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "AdminLoginStepDefinition.the_user_is_on_Admin_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters \"admin656\" as username",
  "keyword": "When "
});
formatter.match({
  "location": "AdminLoginStepDefinition.he_enters_as_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters no data as password",
  "keyword": "And "
});
formatter.match({
  "location": "AdminLoginStepDefinition.he_enters_no_data_as_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he clicks the login button",
  "keyword": "And "
});
formatter.match({
  "location": "AdminLoginStepDefinition.he_clicks_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees the message \" No match for Username and/or Password. \"",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminLoginStepDefinition.user_gets_the_message(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [ No match for Username and/or Password. ] but found [No match for Username and/or Password.\n×]\r\n\tat org.testng.Assert.fail(Assert.java:99)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:1037)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:140)\r\n\tat org.testng.Assert.assertEquals(Assert.java:122)\r\n\tat org.testng.Assert.assertEquals(Assert.java:629)\r\n\tat org.testng.Assert.assertEquals(Assert.java:639)\r\n\tat cucumberTests.AdminLoginStepDefinition.user_gets_the_message(AdminLoginStepDefinition.java:58)\r\n\tat ✽.user sees the message \" No match for Username and/or Password. \"(src/test/java/resources/cucumberTest.feature:27)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Correct Login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on Admin Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "AdminLoginStepDefinition.the_user_is_on_Admin_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters \"admin\" as username",
  "keyword": "When "
});
formatter.match({
  "location": "AdminLoginStepDefinition.he_enters_as_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters \"parola123!\" as password",
  "keyword": "And "
});
formatter.match({
  "location": "AdminLoginStepDefinition.he_enters_as_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he clicks the login button",
  "keyword": "And "
});
formatter.match({
  "location": "AdminLoginStepDefinition.he_clicks_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets redirected to the admin dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminLoginStepDefinition.user_gets_redirected_to_the_admin_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});