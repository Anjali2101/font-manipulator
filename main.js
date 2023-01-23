noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 525);

    canvas = createCanvas(550, 525);
    canvas.position(590, 90);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function draw(){
    background('#969A97')
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +"noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWirstX = " + leftWristX + "rightWristX = "+ rightWristX + "difference = " + difference);
    }
}

function draw() {
    background('#105742');

    document.getElementById("square_side").innerHTML = "Font size will be = " + difference +"px";
    textSize(difference)
    fill('#3ccfa3');
    stroke('#268c6e');
    text('Anjali', noseX, noseY)
}