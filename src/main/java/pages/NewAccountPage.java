package pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class NewAccountPage extends TestBase{
	WebDriver driver;

	public NewAccountPage(WebDriver driver) {
		this.driver= driver;
	}

	@FindBy (how=How.XPATH, using="//div[@id='page-wrapper']/div[3]/div[2]/div/div/div[1]/h5") WebElement MANAGE_ACCOUNT_ELEMENT;
	
	
	public void verifyAccountSuccessful() {
	Assert.assertEquals(MANAGE_ACCOUNT_ELEMENT.getText(), "Manage Accounts", "Wrong Page!");
	System.out.println(MANAGE_ACCOUNT_ELEMENT.getText());
		
	}
	
	
}
