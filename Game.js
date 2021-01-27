class Game {

    constructor(){}

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState : state
        });
    }

    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();

            form = new Form();
            form.display();

        }
    }

    play(){
        form.hide();
        textSize(25);
        text("Game starts now.", displayWidth/2, displayHeight/4);
        Player.playerInfo();

        if(allPlayers !== undefined){
            var player_position = 200;

            for (var plyr in allPlayers){
                if(plyr === "player" + player.index){
                    fill ("red");
                }
                else{
                    fill("black");
                }
                player_position = player_position + 20;
                textSize(18);
                text(allPlayers[plyr].name + ":" + allPlayers[plyr].distance, 200, player_position);
            }

        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance + 50;
            player.update();
        }

    }

}
