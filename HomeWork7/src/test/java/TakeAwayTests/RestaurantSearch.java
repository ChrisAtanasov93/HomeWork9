package TakeAwayTests;

import edu.pages.takeaway.TakeAwayHomePage;
import core.BaseTest;
import edu.pages.takeaway.TakeAwayRestaurantList;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class RestaurantSearch extends BaseTest {

    @DataProvider
    public Object [][] testData () {
         return new String [][] {
                 new String [] {"Макдоналдс Доставка" ,"https://www.takeaway.com/bg/menu/mcdonalds-18" },
                 new String [] {"Пица XL" ,"https://www.takeaway.com/bg/menu/pizza-xl" },
                 new String [] {"Пицария Лъчони" ,"https://www.takeaway.com/bg/menu/pizza-lachoni" },
                 new String [] {"Суши Стор" ,"https://www.takeaway.com/bg/menu/sushi-storesusi-stor" },
         };
    }

    @Test(dataProvider = "testData")
    public void takeAwaySearchTest (String restaurantName , String restaurantUrl) {
        TakeAwayHomePage.takeAwayPageGet();
        TakeAwayHomePage.searchBoxSelect();
        TakeAwayRestaurantList.restaurantSearch(restaurantName);
        TakeAwayRestaurantList.verifyRestaurantSearchResult(restaurantUrl);
    }
}
