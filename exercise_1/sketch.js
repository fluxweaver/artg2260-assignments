function setup() {
	createCanvas(500, 500);
	background(255);
	noStroke();

	fill(0, 187, 255);
     rect(0, 0, 500, 200);

	fill(187, 187, 0);
    ellipse(250, 250, 1000, 200);

    fill(187, 187, 0);
    rect(0, 300, 500, 200);
	 
	fill(127, 127, 0);
	ellipse(250, 300, 500, 200);

	fill(5, 5, 5);
	ellipse(450, 300, 50, 20);

	fill(95, 95, 95);
	rect(450, 100, 5, 200);

	triangle(450, 100, 450, 125, 350, 112);
}