package pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BankCashPage extends TestBase{
	WebDriver driver;

	public BankCashPage(WebDriver driver) {
		this.driver= driver;
	}
	
	@FindBy (how=How.XPATH, using="//input[@id='account' and @type='text']") WebElement ACCOUNT_TITLE_ELEMENT;
	@FindBy (how=How.XPATH, using="//input[@id='description']") WebElement DESCRIPTION_ELEMENT;
	@FindBy (how=How.XPATH, using="//input[@id='balance']") WebElement INITIAL_BALANCE_ELEMENT;
	@FindBy (how=How.XPATH, using="//input[@id='account_number']") WebElement ACCOUNT_NUMBER_ELEMENT;
	@FindBy (how=How.XPATH, using="//input[@id='contact_person' and @name='contact_person']") WebElement CONTACT_PERSON_ELEMENT;
	@FindBy (how=How.XPATH, using="//input[@id='contact_phone']") WebElement PHONE_ELEMENT;
	@FindBy (how=How.XPATH, using="//input[@name='ib_url']") WebElement BANK_URL_ELEMENT;
	@FindBy (how=How.XPATH, using="//button[contains(text(), ' Submit')]") WebElement SUBMIT_BUTTON_ELEMENT;
	//@FindBy (how=How.XPATH, using="//div[@id='page-wrapper']/div[3]/div[2]/div/div/div[1]/h5") WebElement MANAGE_ACCOUNT_ELEMENT;
		
		
	String insertedTitle;
	public void insertAccountTitle(String accountTitle) {
		insertedTitle= accountTitle+getRandomNum(999);
		ACCOUNT_TITLE_ELEMENT.sendKeys(insertedTitle);
	}
	public void insertDescription(String description) {
		DESCRIPTION_ELEMENT.sendKeys(description);
	}
	
	public void insertInitialBalance(String initialBalance) {
		INITIAL_BALANCE_ELEMENT.sendKeys(initialBalance);
	}

	public void insertAccountNum(String accountNumber) {
		ACCOUNT_NUMBER_ELEMENT.sendKeys(accountNumber);
	}
	
	public void insertContactPerson(String contactPerson) {
		CONTACT_PERSON_ELEMENT.sendKeys(contactPerson);
	}
	
	public void insertPhone(String Phone) {
		PHONE_ELEMENT.sendKeys(Phone);
	}
	
	public void insertBankUrl(String internetBankingURL) {
		BANK_URL_ELEMENT.sendKeys(internetBankingURL);
	}
	
	public void clickSubmitButton() {
		SUBMIT_BUTTON_ELEMENT.click();
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
//	public void verifyAccountSuccessful() {
//	Assert.assertEquals(MANAGE_ACCOUNT_ELEMENT.getText(), "Manage Accounts", "Wrong Page!");
//	System.out.println(MANAGE_ACCOUNT_ELEMENT.getText());
//		
//	}
	
}
