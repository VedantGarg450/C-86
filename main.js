var canvas = new fabric.Canvas("myCanvas");
playerX = 100;
playerY = 100;
BlockWidth = 30;
BlockHeight = 30;
var Player_object= "";
var block_object="";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
    Player_object= Img;
    Player_object.setToWidth(140);
    Player_object.setToHeight(140);
    Player_object.set({
    top:playerY,
    left:playerX
    }
    );
    canvas.add(Player_object);
    }
    );
}
function block_update(get_image){
    fabric.Image.fromURL(get_image, function(Img){
    block_object= Img;
    block_object.setToWidth(BlockWidth);
    block_object.setToHeight(BlockHeight);
    block_object.set({
    top:playerY,
    left:playerX
    }
    );
    canvas.add(block_object);
    }
    );
}