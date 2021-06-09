class Food {
  constructor() {
this.foodStock = 0;
      this.image = loadImage("Milk.png");
      this.lastFed;
      

  }
  
  getFoodStock() {
      var foodStockRef = database.ref('foodCount');
      foodStockRef.on("value", function(data){
      foodCount = data.val();
      });
  }

  updateFoodStock(foodStock) {
  database.ref("/").update({
      food: foodStock
      
  });
  }

  getFedTime() {
     lastFed = database.ref('lastFed');
      lastFed.on("value", (data)=>{
          lastFed = data.val();
      });
  }

  updateFedTime() {
      database.ref("/").update({
          lastFed: hour()
      });
  }

  async start(){
      var foodRef = await database.ref("foodCount").once("value");
      if(foodRef.exists()) {
          foodCount = foodRef.val();
      }

      var lastFed = await database.ref('lastFed').once("value");
      if(lastFed.exists()) {
          lastFed = lastFed.val();
      }

    }

  display() {
      textSize(15);
      fill("white");
      stroke(5);
      if(lastFed >= 12) {
          text("Last Feed: " + lastFed% 12 + " PM", 150, 60);
      } else if(lastFed ==0){
          text("Last Feed: 12 AM", 150, 60);
      } else {
          text("Last Feed: " + lastFed + " AM", 150, 60);
      }

      var x = 80, y = 100;
      imageMode(CENTER);
      if( foodCount != 0) {
          for(var i = 0; i < foodCount; i++) {
              if(i % 10 === 0) {
                  x = 80;
                  y = y + 50;
              }
              image(this.image, x, y, 50, 50);
              x = x + 30;
          }
      }
  }

}