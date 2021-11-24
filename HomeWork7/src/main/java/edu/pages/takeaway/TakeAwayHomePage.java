package edu.pages.takeaway;

import core.BasePage;
import org.openqa.selenium.By;
import utils.Browser;


public class TakeAwayHomePage extends BasePage {


    private static final String url = "https://www.takeaway.com" ;

    private static final By SEARCH_BOX = By.id ("imysearchstring");
    private static final By MY_ADDRESS = By.xpath ("//div [@id='iautoCompleteDropDownContent']//child::a[1]");

    public static void takeAwayPageGet () {
        Browser.driver.get(url);
    }

    public static void searchBoxSelect () {
        Browser.driver.findElement(SEARCH_BOX).click();
        Browser.implicitWaitVisibility(MY_ADDRESS);
        Browser.driver.findElement(MY_ADDRESS).click();
    }
}
