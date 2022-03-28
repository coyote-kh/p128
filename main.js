song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function preload() {
    song = loadSound("surface pressure.mp3");
}

function play() {
    song.play();
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(){
    if(results.lenth > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWrist = " + leftWristX +"leftWristY = "+ leftWristY);

        rightWristX = results[0].pose.leftWrist.x;
        rightWristY = results[0].pose.leftWrist.y;
    }
}