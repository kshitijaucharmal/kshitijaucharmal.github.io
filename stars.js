
let n_stars = 1000;
let sizes = [];
let positions = [];
let lowerLimit = 1;
let upperLimit = 4;
let shadowColor = 51;

let neonFont;

function setup(){
    frameRate(120);
    createCanvas(windowWidth, windowHeight);

    neonFont = loadFont('Movement.ttf');

    for(let i = 0; i < n_stars; i++){
        sizes.push(random(lowerLimit, upperLimit));
        positions.push(createVector(random(width), random(height)));
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw(){
    background(0);
    for(let i = 0; i < n_stars; i++){
        sizes[i] += randomGaussian()/7;
        if(sizes[i] <= 0) sizes[i] = 0.01;
        if(sizes[i] >= 4) sizes[i] = 4;
        push();
        stroke(255);
        strokeWeight(sizes[i]);
        point(positions[i].x, positions[i].y);
        pop();
    }

    push();
    textFont(neonFont);
    textSize(120);
    textAlign(CENTER, CENTER);

    fill(shadowColor);
    text("Kshitij Aucharmal", width/2, 50);
    fill("#FA7205");
    text("Kshitij Aucharmal", width/2-5, 45);

    textSize(70);
    fill(shadowColor);
    text("AI. GameDev. Anime.", width/2, height/2);
    fill("#FA7205");
    text("AI. GameDev. Anime.", width/2-3, height/2-3);
    pop();
}