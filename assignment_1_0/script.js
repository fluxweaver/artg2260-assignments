function setup() {
	createCanvas(900, 900);
	background(255);
	noStroke();

	fill(0, 0, 0);
    rect(245, 250, 10, 200);

    fill(0, 0, 0);
	ellipse(250, 235, 75, 75);

	translate(245, 280);
	rotate(20);
	fill(0, 0, 0);
    rect(0, 0, 10, 150);

    translate(10, 0);
    rotate(04);
	fill(0, 0, 0);
    rect(0, 0, 10, 150);

    translate(-145,  65);
    rotate(01);
	fill(0, 0, 0);
    rect(0, 0, 10, 175);

    translate(-2, 1);
    rotate(.4);
	fill(0, 0, 0);
    rect(0, 0, 10, 175);
}