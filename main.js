var canvas = new fabric.Canvas('myCanvas');

 var x= document.getElementById("myAudio");

 var y= new Audio("Bear Creek Dr 3.m4a");

 var get_image = "original.gif";


function playSound()
{
    y.play();
}


function new_image()
{
    fabric.Image.fromURL("original.gif", function (Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(450);
        block_image_object.scaleToHeight(400);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
    });
}

