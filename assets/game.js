// Line below is used to test to see if javascript file is connected to the HTML File
// window.alert("This is an alert! Javascript is running!");

// Line below sends a prompt asking for an input of some type
// window.prompt("What is your robot's name?");

// Line below takes input form the prompt and stores in as an object called playerName
// var playerName = window.prompt("What is your robot's name?");

// Line below will return variable playerName in an alert box after the user inputs a name from the window.prompt
// window.alert(playerName);
// Line below will return variable playerName in the console after the user inputs a name from the window.prompt 
// console.log(playerName);

// 3 Lines below show how console.log() can be used in different settings
// console.log("This logs a string, good for leaving yourself a message");
// console.log(10 + 10);
// console.log("Our robot's name is " + playerName);

// Line below creates a function named "fight"
// function fight() {
//     window.alert("The fight has begun!");
// }

// Line below calls the fight function.  It must go below the function definition it calls.
// fight();

/* THE ABOVE WAS COMMENTED OUT AT 3.1.6 */

// Line below sends a prompt asking for an input of some type
var playerName = window.prompt("What is your robot's name?");
console.log(playerName);
// Line below sets variable playerHealth to equal 100
var playerHealth = 100;
// Line below sets variable playerAttack to equal 10
var playerAttack = 10;
// Line below sets variable playerMoney equal to 10
var playerMoney = 10;

// Line below console logs the variables playerName, playerAttack, playerHealth
// console.log(playerName, playerAttack, playerHealth);

// Line below sets variable enemyName to Roborto
// Commented out becuase wanting to create multiple enemies to fight
// var enemyName = "Roborto";
// Line below create a array of enemies stored in variable enemyName
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
// console.log(enemyNames);

// Lines below loop the the enemyNames array and log each enemy and their corresponding index number
// for(var i = 0; i < enemyNames.length; i++) {
//   console.log(enemyNames[i]);
//   console.log(i);
//   console.log(enemyNames[i] + " is at " + i + " index");
// }
// Line below sets variable enemyHealth to equal 50
var enemyHealth = 50;
// Line below sets variable enemyAttack to equal 12
var enemyAttack = 12;



// Following 3 lines sets variable fight to a function that give a alert box
var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney)
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  }
};

console.log("Hello");
// Line below calls the fight function.  Only one round with one enemy will be played
// fight();

// Line below calls the fight function with the argument enemyName.  i represents the actual robot.
// A for loop is used to loop throught the enemyNames array.  This argument will be passed to the 
// parameter in the fight function where the fight function is defined above.
for(var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}