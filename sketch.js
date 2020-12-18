var dog,dogImage,happyDog,database;
var foodS,foodStock;

function preload()
{
dogImage = loadImage("images/dogImg.png");
happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,20,20);
  dog.scale = 0.25
  dog.addImage("dog",dogImage);

  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  foodS = 20;
}


function draw() {  
 background(46,139,87);

if(keyWentDown(UP_ARROW)){

writeStock();
dog.changeImage("happy",happyDog);
}
  drawSprites();
textSize(20);

fill("cyan");
text("Food: "+foodS,200,140);
}

function readStock(data){
foodS-data.val();
}

function writeStock(){
if(foodS<=0){
  foodS=20
}else{
foodS = foodS-1;                                                                                                                                                                                                                                                                                                                                                                                                                          
}
database.ref('/').update({
  Food:foodS
})

}

