package AdminPageTests.positive;


import edu.pages.admin.AdminDashboard;
import edu.pages.admin.AdminLogin;
import core.BaseTest;
import org.testng.annotations.Test;

public class LoginTest extends BaseTest {

    @Test
    public void correctLogin (){
        AdminLogin.adminPageGet();
        AdminLogin.login("admin","parola123!");
        AdminDashboard.verifyDashboardTitle("Dashboard");
        AdminDashboard.verifyDashboardHeadingText("Dashboard" ,
                "The heading of the dashboard is different from the expected one.");
    }

}
