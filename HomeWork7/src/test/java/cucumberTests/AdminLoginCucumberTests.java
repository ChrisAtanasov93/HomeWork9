package cucumberTests;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(plugin = { "progress", "html:target/cucumber-html-report" },
        features = "src/test/java/resources",
        tags = "@login")
public class AdminLoginCucumberTests extends AbstractTestNGCucumberTests {
}