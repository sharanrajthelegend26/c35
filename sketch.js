var ball;

var database,position;


//3 imp points 1)read =.on, 2)write-.set, 3) ref-location

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var ballPosition=database.ref('ball/position')
    ballPosition.on("value",readPosition,showError)
   
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

// this is how we write it
function writePosition(x,y){
    database.ref("ball/position").set({

        x: position.x + x,
        y:position.y + y
    })
   
}

function readPosition(data){
    position=data.val();//to retrive x and y value
    console.log(position.x)
     ball.x=position.x;
     ball.y=position.y;

 }

 function showError(){
    console.log("error")
 }  
         