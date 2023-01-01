var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload()
{
    music = loadSound("music.mp3");
}


function setup()
{
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = " purple";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "pink";

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "crimson";

    block4 = createSprite(740,580,220,30);
    block4.shapeColor = "maroon";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw()
 {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if( ball.bounceOff(block3))
    {
        ball.shapeColor = "crimson";
        music.play();
    }

    if(block2.isTouching(ball))
    {
        ball.shapeColor = "pink";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
        // music.stop;
        //music=stop();
        //stop(music);
    }

    if(block1.isTouching(ball) && ball.bounceOff(block1))
    {
        ball.shapeColor = "purple";
    }

    if(block4.isTouching(ball)&&  ball.bounceOff(block4))
    {
        ball.shapeColor = "maroon";
    }

    //if(block4(ball) && ball(block4)){
    //    ball.shapeColor = "maroon";
    //}

    //if(block4.isTouching() && ball.bounceOff()){
    //    ball.shapeColor = "maroon";
    //}

    //if(block4.isTouching(ball) && ball.bounceOff(block4)){
    //    ball.shapeColor = "maroon";
    //}

    drawSprites();
}
