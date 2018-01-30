function setup() {
	createCanvas(481, 491);
	for (var y = 10; y < 500; y += 10){
		for (var x = 10; x < 500; x += 10){
			fill((x+y) *100, x, x);
			rect(x, y, y, x)
		}
	}
}