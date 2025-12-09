function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);

    fill(0);
    noStroke();

    for(i=0; i<5; i++){
        for(j=0; j<5; j++)
            circle(50*i,50*j,50)
    }
}
