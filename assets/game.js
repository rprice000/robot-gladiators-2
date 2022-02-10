// Line below is used to test to see if javascript file is connected to the HTML File
// window.alert("This is an alert! Javascript is running!");

// Line below sends a prompt asking for an input of some type
// window.prompt("What is your robot's name?");

// Line below takes input form the prompt and stores in as an object called playerName
var playerName = window.prompt("What is your robot's name?");

// Line below will return variable playerName in an alert box after the user inputs a name from the window.prompt
// window.alert(playerName);
// Line below will return variable playerName in the console after the user inputs a name from the window.prompt 
console.log(playerName);

// 3 Lines below show how console.log() can be used in different settings
console.log("This logs a string, good for leaving yourself a message");
console.log(10 + 10);
console.log("Our robot's name is " + playerName);

// Line below creates a function named "fight"
function fight() {
    window.alert("The fight has begun!");
}

// Line below calls the fight function.  It must go below the function definition it calls.
// fight();