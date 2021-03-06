// http://the-internet.herokuapp.com/iframe

switchToFrame = (frameId) => {
  return document.querySelector(frameId).contentDocument;
};

getElement = (frameId, selector) => {
  return switchToFrame(frameId).querySelector(selector);
};

let p1 = getElement("#mce_0_ifr", "p");
let p2 = getElement("#mce_0_ifr", "p:nth-child(2)");
p2.textContent = "This is assignment test";

// =============================

// let p1 = iframeDocument.querySelector("p");
// let p2 = iframeDocument.querySelector("p:nth-child(2)");
// p2.textContent = "This is assignment test";

// ============================

// const iframeDocument = switchToFrame("#mce_0_ifr");
// let p1 = iframeDocument.querySelector("p");
// let p2 = iframeDocument.querySelector("p:nth-child(2)");
// p2.textContent = "This is assignment test";

/*
    const myIframe = document.querySelector(frameId);
    const iframeDocument = myIframe.contentDocument;
    return iframeDocument;
*/

/*
const myIframe = document.querySelector("#mce_0_ifr");
const iframeWindow = myIframe.contentWindow;
const iframeDocument = myIframe.contentDocument;
console.log(iframeDocument);
*/
