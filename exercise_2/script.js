function setup() {
	createCanvas(481, 491);
	for (var y = 10; y < 500; y += 10){
		for (var x = 10; x < 500; x += 10){
			fill((x-y) *10000, (x*y), (x%y));
			rect(x, y, x+y, x+y)

			// if(var y < x){
			// 	fill((x-y) *10000, (x*y), (x%y));
			// 	rect(x, y, 10, 10);
			// } else{
			// 	fill((x-y) *-10000, (x*y), (x%y));
			// 	rect(x, y, 10, 10);
			// }
		}
	}
}