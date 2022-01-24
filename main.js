nosex = 0;
nosey = 0;
leftwristx = 0;
rightwristx = 0;
difference = 0;

function setup(){

   canvas = createCanvas(500,500);
   canvas.position(1060,200);

   video = createCapture(VIDEO);
   video.size(600,500);
   video.position(400,200);

   poseNet = ml5.poseNet(video,modelloaded);
   poseNet.on('pose',gotPoses);
}

function modelloaded(){
   console.log("posenet is Initialised");
}

function gotPoses(result){
   if(result.length > 0){
   console.log(result);

   nosex = result[0].pose.nose.x;
   nosey = result[0].pose.nose.y;
   console.log("Nose X = " + nosex + "Nose Y= " + nosey);

   leftwristx = result[0].pose.leftWrist.x;
   rightwristx = result[0].pose.rightWrist.x;
   difference = floor(leftwristx - rightwristx);

   console.log("LeftWristX = " + leftwristx + "RightWristX = " + rightwristx + "; Difference = " + difference );
}
}

function draw(){
   fill("blue");
   stroke("cyan");
   console.log("results", difference);
   square(nosex ,nosey ,difference);
   document.getElementById("square_side").innerHTML = "Width and Height of the squre will be " + difference + "px";
}