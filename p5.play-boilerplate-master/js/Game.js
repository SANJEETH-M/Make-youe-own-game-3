class Game {

    constructor(){

    }

    start(){

        if (gameState ===0){
            player = new Player();
            var playerCount = await database.ref('playerCount').on("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.value();
                player.getCount();
            }
            form = new Form()
            form.display();
        }

        bike1 = createSprite(100,200);
        bike1_img.addImage("bike1",bike1_img);
        bike2 = createSprite(300,200);
        bike2_img.addImage("bike2",bike2_img);
        bike3 = createSprite(500,200);
        bike3_img.addImage("bike3",bike3_img);
        bike4 = createSprite(700,200);
        bike4_img.addImage("bike4",bike4_img);

    }

    play(){
        
    }
}