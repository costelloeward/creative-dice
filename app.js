
// Roll dice if key is pressed
document.addEventListener("keydown", function(event) {
  rollDice(event.key);
  selectWord(event.key);

});
// Roll dice if screen is touched
document.addEventListener("touchstart", function(event) {
  rollDice(event.touch);
  selectWord(event.touch);

});

function rollDice() {
  var random = Math.random();
  var randomNumber1 = 1 + (Math.floor(6 * random));
  var objectSelector = ("objects/object" + randomNumber1 + ".png");
  document.querySelector(".img1").setAttribute("src", objectSelector);

  var random2 = Math.random();
  var randomNumber2 = 1 + (Math.floor(6 * random2));
  var characterSelector = ("characters/character" + randomNumber2 + ".png");
  document.querySelector(".img2").setAttribute("src", characterSelector);

  var random3 = Math.random();
  var randomNumber3 = 1 + (Math.floor(6 * random3));
  var animalSelector = ("animals/animal" + randomNumber3 + ".png");
  document.querySelector(".img3").setAttribute("src", animalSelector);
  var random4 = Math.random();
  var randomNumber4 = 1 + (Math.floor(6 * random));
  var featureSelector = ("features/feature" + randomNumber4 + ".png");
  document.querySelector(".img4").setAttribute("src", featureSelector);
}
// Selecting word
function selectWord() {
  var randomWord = 1 + (Math.floor(6 * Math.random()));
  if (randomWord === 1) {
    document.querySelector(".word-dice").textContent = "Villainous";
  } else if (randomWord === 2) {
    document.querySelector(".word-dice").textContent = "Hunt";
  } else if (randomWord === 3) {
    document.querySelector(".word-dice").textContent = "Shave";
  } else if (randomWord === 4) {
    document.querySelector(".word-dice").textContent = "Light";
  } else if (randomWord === 5) {
    document.querySelector(".word-dice").textContent = "Lead";
  } else if (randomWord === 6) {
    document.querySelector(".word-dice").textContent = "Roaring";
  } else {
    document.querySelector(".word-dice").textContent = "Sluggish";
  }
}


// For dice with different values
// if (randomNumber1===1){
// document.querySelector(".img1").setAttribute("src","images/dice1.png");
// }
// else if (randomNumber1===2){
// document.querySelector(".img1").setAttribute("src","images/dice2.png");
// }
//
// else if (randomNumber1===3){
// document.querySelector(".img1").setAttribute("src","images/dice3.png");
// }
//
// else if (randomNumber1===4){
// document.querySelector(".img1").setAttribute("src","images/dice4.png");
// }
//
// else if (randomNumber1===5){
// document.querySelector(".img1").setAttribute("src","images/dice5.png");
// }
//
// else {
// document.querySelector(".img1").setAttribute("src","images/dice6.png");
// }
//
// var random2 = Math.random();
// var randomNumber2 = 1 + (Math.floor(6*random2));
// if (randomNumber2===1){
// document.querySelector(".img2").setAttribute("src","images/dice1.png");
// }
// else if (randomNumber2===2){
// document.querySelector(".img2").setAttribute("src","images/dice2.png");
// }
//
// else if (randomNumber2===3){
// document.querySelector(".img2").setAttribute("src","images/dice3.png");
// }
//
// else if (randomNumber2===4){
// document.querySelector(".img2").setAttribute("src","images/dice4.png");
// }
//
// else if (randomNumber2===5){
// document.querySelector(".img2").setAttribute("src","images/dice5.png");
// }
//
// else {
// document.querySelector(".img2").setAttribute("src","images/dice6.png");
// }

// randomNumber1 for Player 1
// randomNumber2 for Player 2
