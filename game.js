var gameInput = $("#game-input");
var gameOutput  = $("#game-output");
gameInput.keydown(function(keydownEvent) {
  
  if (keydownEvent.keyCode == 13) {      
    parseText(gameInput.val()); 
    gameInput.val("");
  }  
})

function parseText(text) {  
  if (text === "hello") {
    gameOutput.html("Hi there!");
  }
}

function parseText(text) {  
  if (text === "bye") {
    gameOutput.html("Hi there!");
  }
}