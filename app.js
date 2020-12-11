
// Roll dice if key is pressed
document.addEventListener("keydown", function(event) {
  rollDice(event.key);

});
// Roll dice if screen is touched
document.addEventListener("click", function(event) {
  rollDice(event.click);

});

function rollDice() {
    // var randomNumber = (Math.floor(6 * Math.random()));
    // could use as input?
    objectSelector();
    characterSelector();
  animalSelector();
  featureSelector();
  selectWord();
}
// Object dice roll
function objectSelector(){
  var objectsArray = ["chair","clock","cottage","crown","poison","trapdoor"];
  var randomNumber = (Math.floor(6 * Math.random()));
  var selectedObject = objectsArray[randomNumber];
  document.querySelector(".img1").setAttribute("src", "objects/" + selectedObject + ".png");
      document.querySelector(".img1").setAttribute("alt", selectedObject);
}
// Character dice roll
function characterSelector(){
  var charactersArray = ["astronaut","cleaner","lawyer","magician","spy","thief"];
  var randomNumber = (Math.floor(6 * Math.random()));
  var selectedCharacter = charactersArray[randomNumber];
  document.querySelector(".img2").setAttribute("src", "characters/" + selectedCharacter + ".png");
      document.querySelector(".img2").setAttribute("alt", selectedCharacter);
}
// Animal dice roll

function animalSelector(){
  var animalsArray = ["cat","hedgehog","dragon","spider","bird","worm"];
  var randomNumber = (Math.floor(6 * Math.random()));
  var selectedAnimal = animalsArray[randomNumber];
  document.querySelector(".img3").setAttribute("src", "animals/" + selectedAnimal + ".png");
      document.querySelector(".img3").setAttribute("alt", selectedAnimal);
}

// Feature dice roll
function featureSelector(){
  var featuresArray = ["cave","river","rose","storm","sunset","tree"];
  var randomNumber = (Math.floor(6 * Math.random()));
  var selectedFeature = featuresArray[randomNumber];
  document.querySelector(".img4").setAttribute("src", "features/" + selectedFeature + ".png");
      document.querySelector(".img4").setAttribute("alt", selectedFeature);
}
// Selecting word


function selectWord() {
  var wordArray = ["Villainous","Hunt","Shave","Light","Lead","Roaring"];
  var randomNumber = (Math.floor(6 * Math.random()));
  var selectedWord = wordArray[randomNumber];
    document.querySelector(".word-dice").textContent = selectedWord;

}
