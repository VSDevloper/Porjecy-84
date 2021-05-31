canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 100;
car1_width = 120;
car1_height = 70;
car1_image = "car2.png";
car1_x = 10;
car1_y = 100;
 
backgroung_image = "racing.jpg";

function add() {
    backgrounug_imgTag = new Image();
    backgrounug_imgTag.onload = uploadBackground;
    background_imagTag.src = backgroung_image;

car1_imgTag = new Image();
car1_imgTag.onload = uploadcar1;
car1_.src = car1_image;

function  uploadBackground() {
ctx.drawImage(backgrounug_imgTag, 0, 0, canvas,width, canvas.height);
}
function uplodcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_width, car1_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keycode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        car1_up();
        console.log("up arrow key");
    }
    if(keyPressed == '40')
    {
        car1_down();
        console.log("down arrow key");
    }
    if(keyPressed == '37')
    {
        car1_left();
        console.log("left arrow key");
    }
    if(keyPressed == '39')
    {
        car1_right();
        console.log("right arrow key");
    }
    if(keyPressed == '87')
    {
        car2_up();
        console.log("key w");
    }
    if(keyPressed == '83')
    {
        car2_down();
        console.log("key s");
    }
    if(keyPressed == '56')
    {
        car2_left();
        console.log("key a");
    }
    if(keyPressed == '68')
    {
        car2_right();
        console.log("key d");
    }
}
