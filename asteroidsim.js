var asteroids = [];

// Setup function for P5
function setup() {
    createCanvas(windowWidth, windowHeight)
    for(var i =0;i<10;i++) {
        asteroids.push(new Asteroid());
    }
}

// Draw function for P5
// Renders the asteroids and determines if asteroids are being hit 
function draw() {
    background(0);

    // draw ship
    rect(windowWidth/2, windowHeight/2, 50, 50);

    for(k=0;k<asteroids.length;k++) {
        asteroids[k].render();
        asteroids[k].update();
        asteroids[k].edges();
        for(j=0;j<asteroids.length;j++) {
            if(k != j && asteroids[k].hits(asteroids[j])) {
                var newAsteroids = asteroids[j].breakup();       
                var newAsteroids = asteroids[k].breakup();
                asteroids.splice(k, 1);
                asteroids.splice(j, 1);
                asteroids = asteroids.concat(newAsteroids);
                break;
            };
        } 
    }

  }