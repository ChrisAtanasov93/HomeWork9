package AdminPageTests.negative;

import edu.pages.admin.AdminLogin;
import core.BaseTest;
import org.testng.annotations.Test;

public class NegativeLoginTest extends BaseTest {

    @Test
    public static void incorrectLoginDetails () {
        AdminLogin.adminPageGet();
        AdminLogin.login("dasdasdas","asgasqweqwew");
        AdminLogin.verifyValidationMessage("No match for Username and/or Password.",
                "wrong error message");
    }

    @Test
    public static void incorrectLoginNoName () {
        AdminLogin.adminPageGet();
        AdminLogin.login("","parola123!");
        AdminLogin.verifyValidationMessage("No match for Username and/or Password.",
                "wrong error message");
    }

    @Test
    public static void incorrectLoginNoPassword () {
        AdminLogin.adminPageGet();
        AdminLogin.login("admin","");
        AdminLogin.verifyValidationMessage("No match for Username and/or Password.",
                "wrong error message");
    }
}
