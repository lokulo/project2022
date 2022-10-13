var readline = require("readline-sync");

var currentFloor=5; //
var targetFloor;
//const top=6;
//const bottom=1;
var floorName = ["B2","B1","1","2","3","5","6"];

do{
   targetFloor = readline.question("Elevator now at "+ floorName[currentFloor] +". Ur target");
   //bottom <= targetFloor <=top ?
   if(floorName.indexOf(targetFloor.toUpperCase())<0){
            console.log("Error! Please input floor: " + floorName.toString())
            continue;
   }
    else{
        console.log("OK");
        targetFloor = floorName.indexOf(targetFloor.toUpperCase())
        if(targetFloor > currentFloor) {
        console.log("UP...")
        while(currentFloor<targetFloor)
             {
             currentFloor++
             console.log("now Elevator at:"+floorName[currentFloor])
             }
        }
        else if(targetFloor < currentFloor)
        {
        console.log("down...")
        while(currentFloor > targetFloor)
            {
             currentFloor--;
             console.log("now Elevator at:" +floorName[currentFloor])
            }
        }
        else{
        console.log("you are at this floor now~ Pls watch your step ")
        continue;   
        }
    }
    console.log("now door is opne! pls watch your step")
    
}while(1)