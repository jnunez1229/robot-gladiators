// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less


const playerName = prompt("What is your robot's name");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

//You can also log multiple values at once like this console.log(playerName, playerAttach, playerHealth);

let enemyNames = ['Roborto','Amy Android', 'Robo Tumble'];
console.log(enemyNames.length);
let enemyHealth = 50;
let enemyAttack = 12;

let fight = function(enemyName) {
    // Alert players that they are starting the round
    
    window.alert("Welcome to Robot Gladiators!");

    let promptFight = prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if(promptFight === "FIGHT" | promptFight === "fight"){
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked.

        console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining`);
            

        if(enemyHealth <= 0){
         alert(enemyName + " has died!!");
         }else{
            alert(`${enemyName} stil has ${enemyHealth} health left.`);
        }
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.

        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining`);

        if(playerHealth <= 0){
        alert(playerName + " has died!!");
        }else{
        alert(`${playerName} still has ${playerHealth} health left.`);
        }
    }
        // If player chooses to skip
    else if(promptFight === "SKIP" | promptFight === "skip"){
        let confirmSkip = confirm("Are you sure you wan to quit?");
        if(confirmSkip){
            alert(playerName + " has decided to skip the fight. Goodbye!");
            playerMoney = playerMoney - 2;
        }else{
            // if player says no. restart function
            fight();
        }
        
    }else{
        alert("Please choose a valid option. Try again!");
    }
};

for(var i = 0; i < enemyNames.length; i++){
    fight(enemyNames[i]);
}

