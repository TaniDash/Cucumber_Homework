package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.BankCashPage;
import pages.DashboardPage;
import pages.DatabasePage;
import pages.LoginPage;
import pages.NewAccountPage;
import pages.TestBase;

public class LoginStepDefinition extends TestBase {
	LoginPage loginPage;
	DatabasePage databasePage;
	DashboardPage dashboardPage;
	BankCashPage bankCashPage;
	NewAccountPage newAccountPage;

	@Before
	public void beforeRun() {
		initDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		databasePage = new DatabasePage();
		dashboardPage = PageFactory.initElements(driver, DashboardPage.class);
		bankCashPage = PageFactory.initElements(driver, BankCashPage.class);
		newAccountPage = PageFactory.initElements(driver, NewAccountPage.class);
	}

	@Given("^User is on techfios login page$")
	public void user_is_on_techfios_login_page() {
		driver.get("https://www.techfios.com/billing/?ng=admin/");
	}

	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username) {
		loginPage.enterUserName(username);
	}

	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password) {
		loginPage.enterPassword(password);
	}

	@Then("^User should land on dashboard page$")
	public void user_should_land_on_dashboard_page() {
		Assert.assertEquals("Dashboard- iBilling", loginPage.getPageTitle());
		takeScreenshot(driver);
	}

	@When("^User clicks on \"([^\"]*)\" button$")
	public void user_clicks_on_button(String button) {
		switch (button) {
		case "signin":
			loginPage.clickSignInButton();
			break;
		case "bankCash":
			dashboardPage.clickBankCashMenu();
			break;
		case "newAccount":
			dashboardPage.clickNewAccountMenu();
			break;
		case "submit":
			bankCashPage.clickSubmitButton();
			break;
		default:
			System.out.println("Unable to click" + button);
		}
	}

	@When("^User enters accountTitle as \"([^\"]*)\" in accounts page$")
	public void user_enters_accountTitle_as_in_accounts_page(String accountTitle) {
		bankCashPage.insertAccountTitle(accountTitle);
	}

	@When("^User enters description as \"([^\"]*)\" in accounts page$")
	public void user_enters_description_as_in_accounts_page(String description) {
		bankCashPage.insertDescription(description);
	}

	@When("^User enters initialBalance as\"([^\"]*)\" in accounts page$")
	public void user_enters_initialBalance_as_in_accounts_page(String initialBalance) {
		bankCashPage.insertInitialBalance(initialBalance);
	}

	@When("^User enters accountNumber as \"([^\"]*)\" in accounts page$")
	public void user_enters_accountNumber_as_in_accounts_page(String accountNumber) {
		bankCashPage.insertAccountNum(accountNumber);
	}

	@When("^User enters contactPerson as \"([^\"]*)\" in accounts page$")
	public void user_enters_contactPerson_as_in_accounts_page(String contactPerson) {
		bankCashPage.insertContactPerson(contactPerson);
	}

	@When("^User enters phone as \"([^\"]*)\" in accounts page$")
	public void user_enters_phone_as_in_accounts_page(String Phone) {
		bankCashPage.insertPhone(Phone);
	}

	@When("^User enters internetBankingURL as \"([^\"]*)\" in accounts page$")
	public void user_enters_internetBankingURL_as_in_accounts_page(String internetBankingURL) {
		bankCashPage.insertBankUrl(internetBankingURL);
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() {
		Assert.assertEquals(newAccountPage.verifyAccountSuccessful(), "Manage Accounts");
		takeScreenshot(driver);
	}

	@When("^User enters \"([^\"]*)\" from database$")
	public void user_enters_from_database(String loginData) {

		switch (loginData) {
		case "username":
			loginPage.enterUserName(databasePage.getData("username"));
			System.out.println("Username from DB: " + databasePage.getData("username"));
			break;
		case "password":
			loginPage.enterPassword(databasePage.getData("password"));
			System.out.println("Password from DB: " + databasePage.getData("password"));
			break;

		default:
			System.out.println("Unable to extract login data " + loginData + "from DB");

		}
	}

	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}

}
