describe.skip("iframe test", () => {
  // https://github.com/amine-rouh/iFrameSwitch/blob/master/test/specs/iFrameTest.spec.js
  it.skip("handle single iFrame", () => {
    browser.url(`http://the-internet.herokuapp.com/iframe`);
    const myIframe = $("#mce_0_ifr");
    browser.switchToFrame(myIframe);
    const secondPara = $("#tinymce p:nth-child(1)");
    secondPara.setValue("This is my text");
    browser.pause(2000);
  });

  // https://chercher.tech/webdriverio/iframes
  it.skip("handle nested iFrame", () => {
    // open webpage
    browser.url("https://chercher.tech/practice/frames");

    // switch to frame1
    const frame1 = $("#frame1");
    browser.switchToFrame(frame1);
    // find the frame 3
    const frame3 = $("//iframe[@id='frame3']");
    // switch to frame 3
    browser.switchToFrame(frame3);
    // find the checkbox
    const checkbox = $("//input[@type='checkbox']");
    // if check box is not selected then click the checkbox
    if (!checkbox.isSelected()) {
      checkbox.click();
    }
  });

  it("navigate to parent frame with WebdriverIO", () => {
    browser.url("https://chercher.tech/practice/frames");
    const frame1 = $("#frame1");
    const frame3 = $("//iframe[@id='frame3']"); // $("#frame3"); //
    browser.switchToFrame(frame1);
    frame3.waitForExist();
    browser.switchToFrame(frame3);
    var checkbox = $("//input[@type='checkbox']");
    if (!checkbox.isSelected()) {
      checkbox.click();
    }
    // navigate to parent frame, which is frame 1
    browser.switchToParentFrame();
    // set the value of the textbar to the value stored
    $("//input[@type='text']").setValue("selenium");
    // navigate to parent, which is page
    browser.switchToParentFrame();
    // store the text value
    var textValue = $("label>span").getText();
    browser.pause(5000);
    //verify the value matches or not
    expect(textValue).toBe("selenium webdriver");
  });
});
