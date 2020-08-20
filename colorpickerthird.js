var numSquare = 6;
var colors = generateRandomColors(numSquare);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var displayColor = document.querySelector(".scoreSheet");
displayColor.innerHTML = pickedColor;
displayMessage = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for (var i = 0; i<modeButtons.length; i++){
  modeButtons[i].addEventListener("click", function(){
    modeButtons[0].classList.remove("selected")
    modeButtons[1].classList.remove("selected")
    this.classList.add("selected");
    // if(this.textContent === "Easy"){
    //   numSquare = 3;
    // }else{
    //   numSquare = 6;
    // }
    //the above if statement can also be written as
    this.textContent ==="Easy" ? numSquare=3: numSquare=6;
    reset();
    //figure out how many squares to show
    //pick new Colors
    //pick a new picked color
    //update page to reflect changes
  })
}

function reset(){
  // generate new colorsecond
   colors = generateRandomColors(numSquare);
  //pick a new random color from array
    pickedColor = pickColor();
  //change displayColor to picked colors
  displayMessage.textContent = "";
  resetButton.textContent = "New Colors"
  displayColor.textContent= pickedColor;
  //change color to squares
  for (var i = 0; i< square.length; i++){
    square[i].style.backgroundColor = colors[i];
    if(colors[i]){
      square[i].style.display = "block";
      square[i].style.background = colors[i]
    }else{
      square[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}


// easyBtn.addEventListener("click", function(){
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   numSquare = 3;
//   colors = generateRandomColors(numSquare);
//   pickedColor = pickColor();
//   displayColor.textContent = pickedColor;
//   for(var i = 0; i<square.length; i++){
//     if(colors[i]){
//       square[i].style.backgroundColor = colors[i];
//     }else{
//       square[i].style.display = "none";
//     }
//   }
// })
// hardBtn.addEventListener("click", function(){
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   numSquare = 6;
//   colors = generateRandomColors(numSquare);
//   pickedColor = pickColor();
//   displayColor.textContent = pickedColor;
//   for(var i = 0; i<square.length; i++){
//       square[i].style.backgroundColor = colors[i];
//       square[i].style.display = "block";
//
//   }
// })

resetButton.addEventListener("click", function(){
  // generate new colorsecond
  reset();
  //  colors = generateRandomColors(numSquare);
  // //pick a new random color from array
  //   pickedColor = pickColor();
  // //change displayColor to picked colors
  // displayMessage.textContent = "";
  // this.textContent = "New Colors"
  // displayColor.textContent= pickedColor;
  // //change color to squares
  // for (var i = 0; i< square.length; i++){
  //   square[i].style.backgroundColor = colors[i];
  // }
  // h1.style.backgroundColor = "steelblue";
})
 for (var i = 0; i< square.length; i++){
   square[i].style.backgroundColor = colors[i];
   square[i].addEventListener("click", function(){
     var clickedColor = (this.style.backgroundColor);
     if(pickedColor === clickedColor){
       displayMessage.innerHTML= "Correct!!!";
       h1.style.backgroundColor = pickedColor;
       changeColors(clickedColor);
       resetButton.textContent = "Play Again";
     }else{
       this.style.backgroundColor = "#232323";
       displayMessage.innerHTML= "Try Again!!!!";
     }
   });
 }
 function changeColors(color){
   // loop through all squares
   for (var i = 0; i< square.length; i++){
     // change each single color
     square[i].style.backgroundColor = color;
   }

 }


 function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
 }

function generateRandomColors(num){
  // make an array
  var arr = [];
  //add num random colors to array
  for (var i = 0; i < num; i++){
    // get random color and push into array
    arr.push(randomColor());
  }
  //return array
  return arr

}
function randomColor(){
  // pick a red from 0-255;
  var r = Math.floor((Math.random() * 256));
  //pick a green from 0-255
  var g = Math.floor((Math.random() * 256));
  //pick a blue from 0 - 255
  var b = Math.floor((Math.random() * 256));
  "rgb(r, g, b)"
  return "rgb(" + r + ", " + g + ", " + b + ")"
}
