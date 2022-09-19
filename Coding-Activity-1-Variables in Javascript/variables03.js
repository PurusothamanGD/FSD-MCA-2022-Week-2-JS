// TODO: declare a const names lacroix1 and initialized it to the value 'grapefruit'

function testBestFlavor() {
  // TODO: declare a const names lacroix2 and initialized it to the value 'orange'
  
  return 'Ana says, lacroix ' + lacroix2 + 'is a better flavor than lacroix ' + lacroix1;
}

//check results in the console browser
console.log('result: ', testBestFlavor());

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = testBestFlavor;
}
