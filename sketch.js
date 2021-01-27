var database;
var gameState = 0;
var playerCount = 0;
var form, player, game;
var back_img;
var allPlayers;

function setup(){
  createCanvas(displayWidth - 20, displayHeight - 100);

  back_img = loadImage("Images/Background Image.jpg");
  
  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(back_img);

  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play ();
  }

}