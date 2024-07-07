#! /usr/bin/env node

import inquirer from "inquirer";
let enemies:string[] =["Skeleton 💀","Spider 🕷","Zombie 🧟‍♀️","Monster 👹","Mummy 👤"];
let EnemyHealth:number=100;
let enemyAttackDamage:number=45;
let myHealth:number=100;
let myAttackDamage:number=50;
let numOfPotion:number=3;
let potionHeal:number=30;
let healthPotionDropChance:number=50; //50 percent
let running:boolean = true;
let RandomNumber=(min:number,max:number)=>{
    return Math.floor(Math.random()*max-min)+min;
};
console.log("\t \x1b[96mWELCOME TO THE GAME👣! \x1b[0m\n");
Game:
while(running){
    console.log("-".repeat(50));
    let enemy = enemies[RandomNumber(0,enemies.length)];
    let enemyHP= RandomNumber(0,100);
   
        console.log(`\x1b[91m${enemy} has arrived .\x1b[0m\n`);
        console.log(`The health of ${enemy} is : ${enemyHP}❤`);
        console.log(`Your health : ${myHealth}💚\n`);
        console.log(`\x1b[91mThe number of potions 🧃 : ${numOfPotion}\x1b[0m`);
        while(enemyHP>-1){
        if(myHealth<30 && myHealth>0){
            console.log(`\x1b[33mYou need to drink potion 🚩.\x1b[33m`)}else if(myHealth<=0){
                console.log("\n     \x1b[31mYou are killed 🏴‍☠️.\x1b[0m");
                process.exit();
            };
        let control= await inquirer.prompt({
            name:"command",
            message:"\nWhat do you want to do?",
            type: "list",
            choices:["Attack 🧨","Drink Potion 🧃","Run 🏃‍♂️"],
        });
        switch(control.command){
            case "Attack 🧨":

                let enemyDamage=RandomNumber(30,50);
                let ourDamageByEnemy = RandomNumber(15,45);
            myHealth-=ourDamageByEnemy;
            enemyHP-=enemyDamage;
            console.log(` \x1b[92mYou strike the enemy with ${enemyDamage}. \x1b[0m`);
            console.log(`You received damage of ${ourDamageByEnemy}.\n`);
            console.log(` \x1b[92mYour health is: ${myHealth} \x1b[0m`)
            if(enemyHP<=0){
                console.log("\n\x1b[92mYou have defeated your enemy ✨.\x1b[0m")
                if(RandomNumber(1,100)>50){
                    numOfPotion++;
                    console.log("\x1b[92m➕You gained 1 potion.\x1b[0m");
                    console.log(`\x1b[92mYou have ${numOfPotion} now 🧃.\x1b[0m`)
                };
            }
          
                    break;
            case "Drink Potion 🧃":
                if(numOfPotion>0){
                    myHealth+=potionHeal;
                    console.log("\n     \x1b[92mYou gained +30 health. \x1b[0m");
                    numOfPotion--;
                    console.log(`The number of potions left are: ${numOfPotion}.`);
                }else{console.log("\n\x1b[33m➖You have no potion left. Kill enemies to gain a potion.\x1b[0m")};
                break;
            case "Run 🏃‍♂️":
                console.log(`     \x1b[93mYou ran away from the ${enemy} 🏃‍♂️.\x1b[0m`);
                continue Game;
        }
    }

};
