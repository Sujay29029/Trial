class Form {
    constructor(){
        this.input = createInput("Name"); 
        this.button = createButton('Start');
        this.greeting = createElement('h2');
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        var title = createElement('h1');
        title.html("Welcome to the game, it is about to start");
        title.position(displayWidth/4, displayHeight/14);

        
        this.input.position(displayWidth/2.5, displayHeight/4);

        this.button.position(displayWidth/2, displayHeight/3 );

        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playerCount = playerCount + 1;
            player.index = playerCount;

            player.update();

            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name);
            this.greeting.position(displayWidth/2.5, displayHeight/4);
        });

    }

}