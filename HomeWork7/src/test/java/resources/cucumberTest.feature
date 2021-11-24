Feature: User trying to login to the backend
  As a administrator,
  I want to login so that I can edit orders

  @login
  Scenario: Incorrect Login Details
    Given the user is on Admin Login Page
    When he enters "adasdas" as username
    And he enters "fasgasgas" as password
    And he clicks the login button
    Then user sees the message " No match for Username and/or Password. "

  @login
  Scenario: Incorrect Login with no Name
    Given the user is on Admin Login Page
    When he enters no data as username
    And he enters "parola123!" as password
    And he clicks the login button
    Then user sees the message " No match for Username and/or Password. "

  @login
  Scenario: Incorrect Login with no Password
    Given the user is on Admin Login Page
    When he enters "admin656" as username
    And he enters no data as password
    And he clicks the login button
    Then user sees the message " No match for Username and/or Password. "

  @login
  Scenario: Correct Login
    Given the user is on Admin Login Page
    When he enters "admin" as username
    And he enters "parola123!" as password
    And he clicks the login button
    Then user gets redirected to the admin dashboard


