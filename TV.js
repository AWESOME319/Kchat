tvimg=""
Status=""
function preload(){
    tvimg=loadImage('tv.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function draw()
{
    image(closetimg,0,0,640,420);
}
function modelLoaded(){
    console.log("Model Loaded ")
    Status=true;
    objectDetector.detect(img,gotResult);
}
    function gotResult(error,results){
        if(error){
            console.log(error);
        }
        console.log(results);
      }
back()
{
    window.location("index.html");
}