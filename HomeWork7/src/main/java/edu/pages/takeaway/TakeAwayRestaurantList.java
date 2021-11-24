package edu.pages.takeaway;

import core.BasePage;
import org.openqa.selenium.By;
import org.testng.Assert;
import utils.Browser;

public class TakeAwayRestaurantList extends BasePage {

    private static final By RESTAURANT_SEARCH = By.id("input_5");
    private static final By RESTAURANT_SEARCH_RESULTS = By.id("search-results-panel-restaurants");


    public static void restaurantSearch (String restaurantName) {
        Browser.implicitWaitClickable(RESTAURANT_SEARCH);
        Browser.driver.findElement(RESTAURANT_SEARCH).sendKeys(restaurantName);
        Browser.implicitWaitVisibility(RESTAURANT_SEARCH_RESULTS);
        Browser.driver.findElement(RESTAURANT_SEARCH_RESULTS).click();
    }

    public static void verifyRestaurantSearchResult (String expectedRestaurantURL) {
        String actualUrl = Browser.driver.getCurrentUrl();
        Assert.assertEquals(actualUrl,expectedRestaurantURL);
    }

}
