/*
Instructions
- Given the bike object, change the speed value to 12 then return the new value.
*/
let bike = {
    model: 'marin',
    wheels: 2,
    speed: 8,
    authorizedBikers: ['Beatrice', 'Alan'],
    hasHadAccident: false,
  };
  
  function getBikeSpeed() {
    //your code here
     
  }
  //open your browser console to check the results
  console.log('result: ' + JSON.stringify(getBikeSpeed()));
  
  //don't change this line
  if (typeof module !== 'undefined') {
    module.exports = getBikeSpeed;
  }
  