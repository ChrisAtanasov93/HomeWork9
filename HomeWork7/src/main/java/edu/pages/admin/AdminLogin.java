package edu.pages.admin;

import core.BasePage;
import org.openqa.selenium.By;
import org.testng.Assert;
import utils.Browser;

public class AdminLogin extends BasePage {

    private static final String url = "http://shop.pragmatic.bg/admin";

    private static final By USER_NAME_INPUT_FIELD = By.id("input-username");
    private static final By PASSWORD_INPUT_FIELD = By.id("input-password");
    private static final By LOGIN_BUTTON = By.xpath("//div [@class='text-right']//child::button[1]");
    private static final By LOGIN_VALIDATION_ERROR = By.cssSelector(".alert-danger");



    public static void adminPageGet () {
        Browser.driver.get(url);
    }

    public static void login(String name, String password) {
        Browser.driver.findElement(USER_NAME_INPUT_FIELD).sendKeys(name);
        Browser.driver.findElement(PASSWORD_INPUT_FIELD).sendKeys(password);
        Browser.driver.findElement(LOGIN_BUTTON).click();
    }

    public static void verifyValidationMessage (String expectedValidationMessage, String messageOnFailure) {
        String actualValidationMessage = Browser.driver.findElement(LOGIN_VALIDATION_ERROR).getText();
        Assert.assertTrue(actualValidationMessage.contains(expectedValidationMessage), messageOnFailure);
    }
}
