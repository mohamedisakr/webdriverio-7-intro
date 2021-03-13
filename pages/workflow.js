class Workflow {
  selectors = {
    ShopLink: "//*[text()='Shop']",
    the4thProduct: "ul[data-hook='product-list-wrapper']>li:nth-child(4)",
    colorLabel: `[data-hook="colorGroup"] li:nth-child(1)`,
    quantityText: "input[data-hook]",
    spinner: 'span[data-hook="number-input-spinner-up-arrow"]',
    AddtoCart: 'button[data-hook="add-to-cart"]',
    cartWidgetTotal: `[data-hook="cart-widget-total"]`, // 'div[data-hook="cart-widget-total"]',
  };

  runInBrowser = (argument) => {
    argument.click();
  };

  get $shopLink() {
    return $(this.selectors.ShopLink);
  }
  // expect($shopLink).toBeDisplayed();

  get $the4thProduct() {
    return $(this.selectors.the4thProduct);
  }

  get $colorLabel() {
    return $(this.selectors.colorLabel);
  }
  // expect($colorLabel).toBeDisplayed();

  get $spinner() {
    return $(this.selectors.spinner);
  }

  get $addtoCart() {
    return $(this.selectors.AddtoCart);
  }

  get $cartWidgetTotal() {
    return $(this.selectors.cartWidgetTotal);
  }

  totalPrice() {
    return this.$cartWidgetTotal.getText();
  }
}

module.exports = new Workflow();

// $the4thProduct.scrollIntoView();
// $the4thProduct.waitForExist();
// // expect($the4thProduct).toBeDisplayed();
// $the4thProduct.click();

// browser.execute(runInBrowser, $spinner);
// // $spinner.waitForClickable();
// // $spinner.waitForExist();
// // $spinner.scrollIntoView();
// // expect($spinner).toBeClickable();

//driver.findElement(By.cssSelector(OR.getProperty("AddtoCart")));
// AddtoCart.click();
