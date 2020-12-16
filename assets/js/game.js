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
    while(enemyHealth > 0 && playerHealth > 0) {
        let promptFight = prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if(promptFight === "SKIP" | promptFight === "skip"){
            let confirmSkip = confirm("Are you sure you wan to quit?");
            if(confirmSkip){
                alert(playerName + " has decided to skip the fight. Goodbye!");
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

         //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    
        enemyHealth = enemyHealth - playerAttack;
        console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining`);
                
    
        if(enemyHealth <= 0){
            alert(enemyName + " has died!!");
            playerMoney = playerMoney + 20;
            break;
            }else{
                alert(`${enemyName} stil has ${enemyHealth} health left.`);
            }
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    
        playerHealth = playerHealth - enemyAttack;
    
         // Log a resulting message to the console so we know that it worked.
        console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining`);
    }
};

var startGame = function(){
    //reset player stats
    playerHealth = 100;
    playerAttak = 10;
    playerMoney = 10;
    
    //Begin round
    for(var i = 0; i < enemyNames.length; i++){
        if (playerHealth > 0) {
            alert("Welcome to Robot Gladiators! Round " + (i+1));
            let pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            // debugger;
            fight(pickedEnemyName);
        }
        //after loop ends, player is either out of health or enemies to fight
        endGame(); 
    }
    
    // play again
    startGame();
};

var endGame = function(){
    // if playe ris still alive, player wins
    if(playerHealth > 0){
        alert("Great job, you've survived the game! You now have a score")
    }else{
        alert("You've lost your robot in battle.")
    }

    var playAgainConfirm = confirm("Would you like to play again?");

    if (playAgainConfirm){
        //restart game
        startGame();
    }else{
        alert("Thank you for playing Robot Gladiators! Come back soon!");
        
    }
};
// start game when page loads
startGame();


