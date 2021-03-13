const workflow = require("../pages/workflow");
// const { remote } = require("webdriverio");

describe("canary test", () => {
  it("interview", () => {
    browser.url(browser.config.baseUrl);
    // expect(workflow.$shopLink).toBeDisplayedInViewport();
    // expect(workflow.$the4thProduct).toBeDisplayed();
    workflow.$the4thProduct.click();
    // expect(workflow.$colorLabel).toBeDisplayed();
    workflow.$colorLabel.click();
    // workflow.$spinner.waitForExist();
    // expect(workflow.$spinner).toBeDisplayed();
    // expect(workflow.$addtoCart).toBeDisplayed();
    workflow.$addtoCart.click();
    // workflow.$cartWidgetTotal.waitForDisplayed(); // .waitForExist();
    //

    const shoppingFrame = $(`iframe[class="_2QAyo"]`); //iframe[name="tpapopup-1615277464462_rtby_comp-j4ci4xqn"]
    shoppingFrame.waitForExist();
    browser.pause(3000);
    browser.switchToFrame(3);
    browser.pause(3000);
    // let total = workflow.totalPrice();
    // console.log(`The Subtotal is : ${total}`);
    // workflow.$cartWidgetTotal.waitForExist();
    // workflow.$cartWidgetTotal.toBeVisibleInViewport();
  });
});

/*
 it.skip("basic test", async () => {
    const browser = await remote({
      capabilities: {
        browserName: "chrome",
      },
    });
    await browser.url("https://webdriver.io");

    const apiLink = await browser.$("=API");
    await apiLink.click();

    // await browser.saveScreenshot("./screenshot.png");
    await browser.deleteSession();
  });
*/

// const $shopLink = $(selectors.ShopLink);
// // expect($shopLink).toBeDisplayed();

// const $the4thProduct = $(selectors.the4thProduct);
// $the4thProduct.scrollIntoView();
// $the4thProduct.waitForExist();
// // expect($the4thProduct).toBeDisplayed();
// $the4thProduct.click();

// // Actions actions = new Actions(driver);
// // WebElement colorLabel = driver.findElement(By.cssSelector(OR.getProperty("colorLabel")));
// // actions.moveToElement(colorLabel).click().build().perform();
// const $colorLabel = $(selectors.colorLabel);
// expect($colorLabel).toBeDisplayed();

// const $spinner = $(selectors.spinner);
// browser.execute(runInBrowser, $spinner);
// // $spinner.waitForClickable();
// // $spinner.waitForExist();
// // $spinner.scrollIntoView();
// // expect($spinner).toBeClickable();

// spinner.click();
// spinner.click();

// WebElement AddtoCart = driver.findElement(By.cssSelector(OR.getProperty("AddtoCart")));
// AddtoCart.click();

// WebElement cartWidgetTotal = driver.findElement(By.cssSelector(OR.getProperty(".cart-widget-total")));
// WebDriverWait wait = new WebDriverWait(driver, 3);
// wait.until(ExpectedConditions.visibilityOf(cartWidgetTotal)).wait(2000);

// String total = cartWidgetTotal.getText();
// System.out.println(total);
// Assert.assertEquals(Float.parseFloat(total), 75.00);
