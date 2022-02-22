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
// var playerName = window.prompt("What is your robot's name?");
// console.log(playerName);
// // Line below sets variable playerHealth to equal 100
// var playerHealth = 100;
// // Line below sets variable playerAttack to equal 10
// var playerAttack = 10;
// // Line below sets variable playerMoney equal to 10
// var playerMoney = 10;
// Lines above are replaced by line below Creates a playerObject to be used in game if there are multiple players
// Moved below randomNumber() to fix TypeError
// var playerInfo = {
//   name: window.prompt("What is your robot's name?"),
//   health: 100,
//   attack: 10,
//   money: 10
// };

// Line below console logs the variables playerName, playerAttack, playerHealth
// console.log(playerName, playerAttack, playerHealth);

// Line below sets variable enemyName to Roborto
// Commented out becuase wanting to create multiple enemies to fight
// var enemyName = "Roborto";
// Line below create a array of enemies stored in variable enemyName
// var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
// Linve above is replaced by lines below create an enemy object array
// Moved below randomNumber() to fix TypeError
// var enemyInfo = [
//   {
//     name: "Roborto",
//     attack: randomNumber(10, 14)
//   },
//   {
//     name: "Amy Android",
//     attack: randomNumber(10, 14)
//   },
//   {
//     name: "Robo Trumble",
//     attack: randomNumber(10, 14)
//   }
// ];
// console.log(enemyNames);

// Lines below loop the the enemyNames array and log each enemy and their corresponding index number
// for(var i = 0; i < enemyNames.length; i++) {
//   console.log(enemyNames[i]);
//   console.log(i);
//   console.log(enemyNames[i] + " is at " + i + " index");
// }
// Line below sets variable enemyHealth to equal 50
// var enemyHealth = 50;
// Replace line above with line below to add randomness to enemy health
// enemy.health = Math.floor(Math.random() * 21) + 40;
// Line below sets variable enemyAttack to equal 12
// var enemyAttack = 12;


var fightOrSkip = function() {
  // ask player if they'd like to fight or skip using fightOrSkip function
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  promptFight = promptFight.toLowerCase();

  // Enter the conditional recursive function call here!
  // Conditional Recursive Function Call
  if (promptFight === "" || promptFight === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
  }

  // if player picks "skip" confirm and then stop the loop
  // if (promptFight === "skip" || promptFight === "SKIP") {
  if (promptFight === "skip") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping, but don't let them go into the negative
      playerInfo.money = Math.max(0, playerInfo.money - 10);
      return true;
    }
  }
  return false;
}








// Following 3 lines sets variable fight to a function that give a alert box
var fight = function(enemy) {
  while (playerInfo.health > 0 && enemy.health > 0) {
    // // ask player if they'd like to fight or run
    // var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // // if player picks "skip" confirm and then stop the loop
    // if (promptFight === "skip" || promptFight === "SKIP") {
    //   // confirm player wants to skip
    //   var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //   // if yes (true), leave fight
    //   if (confirmSkip) {
    //     window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
    //     // subtract money from playerMoney for skipping
    //     // playerMoney = playerMoney - 10;
    //     playerInfo.money = Math.max(0, playerInfo.money - 10);
    //     console.log("playerInfo.money", playerInfo.money)
    //     break;
    //   }
    // }
    // Lines below the while loop and above this line were moved to the fightorskip() to help when user has blank or null inputs


    if (fightOrSkip()) {
      // if true, leave fight by breaking loop
      break;
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    // enemyHealth = enemyHealth - playerAttack;
    // Changed line above to line below
    // enemyHealth = Math.max(0, enemyHealth - playerAttack);
    // Changed line above to line below to add randomness to player attack
    // generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);

    console.log(playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.');

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    // playerHealth = playerHealth - enemyAttack;
    // Changed line above to line below
    // playerHealth = Math.max(0, playerHealth - enemyAttack);
    // Changed line above to lines below to add randomness to enemy attack
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);

    console.log(enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.');

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  }
};


// Line below calls the fight function.  Only one round with one enemy will be played
// fight();



// function to start a new game
var startGame = function() {
 // Lines below reset player stats after first playthrough
 //  playerInfo.health = 100;
 //  playerInfo.attack = 10;
 //  playerInfo.money = 10;
 // Lines above are replaced by lines below to call reset() method from player Object
  playerInfo.reset();

  // Line below calls the fight function with the argument enemyName.  i represents the actual robot.
  // A for loop is used to loop throught the enemyNames array.  This argument will be passed to the 
  // parameter in the fight function where the fight function is defined above.
  for(var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
     
      // pick new enemy to fight based on the index of the enemyNames array
      // var pickedEnemyName = enemyNames[i];
      // Line above replaced by line below to reflect enemy object array
      var pickedEnemyObj = enemyInfo[i];

      // reset enemyHealth before starting new fight
      // enemyHealth = 50;
      // Replaces line above with line below.  Calls the randomNumber function to add random health to enemy in next rounds
      pickedEnemyObj.health = randomNumber(40, 60);

      // use debugger to pause script from running and check what's going on at that moment in the code
      // debugger;

      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyObj);

      // if we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
         // ask if player wants to use the store before next round
         var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

         // if yes, take them to the store() function
         if (storeConfirm) {
           shop();
        }
      }

    }
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }

  // // Line below is for asking if player wants to play again
  // startGame();
  // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
  endGame();
};

// Line below is used to end the game
var endGame = function() {
  // Line below check player health if they have health and beat all enemy robots they will win
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
  } 
  else {
    window.alert("You've lost your robot in battle.");
  }

  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // restart the game
    startGame();
  } 
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

// Line below creates a shop function for players to use to increase stats
var shop = function() {
  // ask player what they'd like to do
  // var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
  var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE.");
  // Turns the input from the prompt from a string to an integer
  shopOptionPrompt = parseInt(shopOptionPrompt);
  // use switch to carry out action
  switch (shopOptionPrompt) {

    // NOTICE HOW REFILL UPGRADE AND LEAVE dont have code. They dont have a break so the switch case will fall to the lower case example below.
    // case "REFILL":
    // case "refill":
    // replaced the input types with just number type 1,2, or 3
    case 1:
      // if (playerInfo.money >= 7) {
      //   window.alert("Refilling player's health by 20 for 7 dollars.");
    
      //   // increase health and decrease money
      //   playerInfo.health = playerInfo.health + 20;
      //   playerInfo.money = playerInfo.money - 7;
      // }
      // else {
      //   window.alert("You don't have enough money!");
      // }
      // Lines above are replaced by line below referencing the method in playerObject
      playerInfo.refillHealth();
      break;

    // case "UPGRADE":
    // case "upgrade":
    case 2:
      // if (playerInfo.money >= 7) {
      //   window.alert("Upgrading player's attack by 6 for 7 dollars.");
    
      //  // increase attack and decrease money
      //  playerInfo.attack = playerInfo.attack + 6;
      //  playerInfo.money = playerInfo.money - 7;
      // }
      // else {
      //   window.alert("You don't have enough money!");
      // }
      // Lines above are replaced by line below referencing the method in playerObject
      playerInfo.upgradeAttack();
      break;

    // case "LEAVE":
    // case "leave":
    case 3:
      window.alert("Leaving the store.");

      // do nothing, so function will end
      break;

    default:
      window.alert("You did not pick a valid option. Try again.");

      // call shop() again to force player to pick a valid option
      shop();
      break;
}
};


// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

// function to set player name
var getPlayerName = function() {
  var name = "";

// ***************************************
while (name === "" || name === null) {
  name = prompt("What is your robot's name?");
}
// ***************************************

  console.log("Your robot's name is " + name);
  return name;
};


var playerInfo = {
  // name: window.prompt("What is your robot's name?"),
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  }
};


var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];



// start the game when the page loads
startGame();