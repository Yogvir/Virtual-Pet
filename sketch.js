var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var foodObj;
var food1;

//create feed and lastFed variable here
var feed,lastFed;

function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food ();


  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  //create feed the dog button here
  feed = createButton("Feed your Dog");
  feed.position(650, 95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  

  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  
}


function feedDog(){
  dog.addImage(happyDog);

  

  
}


//function to add food in stock
function addFoods(){
  
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}
