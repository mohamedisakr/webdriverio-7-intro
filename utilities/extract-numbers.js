extractNumbers = (text) => {
  return parseFloat(text.trim().match(/\d+/g).join("."));
};

module.exports = { extractNumbers };

let text = " C$25.95 ";
let restult = extractNumbers(text);
console.log(restult);
