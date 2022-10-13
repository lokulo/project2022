var readline = require("readline-sync");

var currentFloor=5; //
var targetFloor;
const top=6;
const bottom=1;

do{
   targetFloor = readline.question("Elevator now at "+ currentFloor+". Ur target");
   //bottom <= targetFloor <=top ?
   if(targetFloor<bottom || targetFloor>top){
            console.log("Error! Please input floor between "+bottom +" and "+top)
            continue;
   }
    else{
        console.log("OK");
        if(targetFloor > currentFloor) {
        console.log("UP...")
        while(currentFloor<targetFloor)
             {
             currentFloor++
             console.log("now Elevator at:"+currentFloor)
             }
        }
        else if(targetFloor < currentFloor)
        {
        console.log("down...")
        while(currentFloor > targetFloor)
            {
             currentFloor--;
             console.log("now Elevator at:" +currentFloor)
            }
        }
        else{
        console.log("you are at this floor now~ Pls watch your step ")
        continue;   
        }
    }
    console.log("now door is opne! pls watch your step")
    
}while(1)