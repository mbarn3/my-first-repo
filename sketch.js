function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);

    noFill();
    //noStroke();

    for(i=0; i<17; i++){
        for(j=0; j<12; j++)
            circle(50*i,50*j,50);


    }
    for(i=0; i<5; i++){
        for(j=0; j<5; j++)
            circle(50*i,50*j,60)
    }
    for(i=0; i<17; i++){
        for(j=0; j<13; j++)
            circle(50*i,50*j,80);
    }
    for(i=0; i<17; i++){
        for(j=0; j<12; j++)

            circle(70*i,70*j,50)

    }
}
