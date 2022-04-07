package pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class NewAccountPage extends TestBase {
	WebDriver driver;

	public NewAccountPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//h5[ text()='Manage Accounts']")
	WebElement MANAGE_ACCOUNT_ELEMENT;

	public String verifyAccountSuccessful() {
		String manageAccHeader = MANAGE_ACCOUNT_ELEMENT.getText();
		System.out.println(MANAGE_ACCOUNT_ELEMENT.getText());
		return manageAccHeader;

	}

}
