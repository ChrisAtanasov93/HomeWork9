package cucumberTests;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.Assert;

import java.util.concurrent.TimeUnit;

public class AdminLoginStepDefinition {

    public static WebDriver driver;

    @Before
    public static void setUp() {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\admin\\Documents\\BrowserDrivers-Selenium\\chromedriver.exe");
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--start-maximized", "--disable-extensions");
        driver = new ChromeDriver(options);
    }


    @After
    public static void tearDown () {
        driver.quit();
    }


    @Given("the user is on Admin Login Page")
    public void the_user_is_on_Admin_Login_Page() {
        driver.get("http://shop.pragmatic.bg/admin");
    }

    @When("he enters {string} as username")
    public void he_enters_as_username(String userName) {
        driver.findElement(By.id("input-username")).sendKeys(userName);
    }

    @When("he enters {string} as password")
    public void he_enters_as_password(String password) {
        driver.findElement(By.id("input-password")).sendKeys(password);
    }

    @When("he clicks the login button")
    public void he_clicks_the_login_button() {
        driver.findElement(By.xpath("//div [@class='text-right']//child::button[1]")).click();
    }

    @Then("user sees the message {string}")
    public void user_gets_the_message(String expectedError) {
        String actualError = driver.findElement(By.cssSelector(".alert-danger")).getText();
        Assert.assertEquals(actualError , expectedError);
    }

    @When("he enters no data as username")
    public void he_enters_no_data_as_username() {
        driver.findElement(By.id("input-username")).sendKeys("");
    }

    @When("he enters no data as password")
    public void he_enters_no_data_as_password() {
        driver.findElement(By.id("input-password")).sendKeys("");
    }

    @Then("user gets redirected to the admin dashboard")
    public void user_gets_redirected_to_the_admin_dashboard() {
        String actualDashboardHeading = driver.findElement(By.cssSelector("div#content h1")).getText();
        String expectedDashboardHeading = "Dashboard";
        Assert.assertEquals(expectedDashboardHeading,actualDashboardHeading);
    }
}
