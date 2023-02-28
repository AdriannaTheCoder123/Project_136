status = "";

function preload() {

}

function setup() {
  canvas = createCanvas(450, 350);
  canvas.center();

  video = createCapture(VIDEO);
  video.size(450,350);
  video.hide();
}

function draw() {

}

function start() {
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML = "Status : Detecting Objects";
   document.getElementById("input").value;
  }

  function modelLoaded() {
    console.log("Model is Loaded!");
    status = true;
  }