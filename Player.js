class Player {
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
        this.life = 0;
    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function(data){
            playerCount = data.val();
        })
    }

    updateCount(count){
       database.ref('/').update({
           playerCount : count
       }); 
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name : this.name
        });
    }

   static playerInfo(){
       var playerInfoRef = database.ref('players');
       playerInfoRef.on("value", (data)=>{
           allPlayers = data.val();
       })
   } 

}
