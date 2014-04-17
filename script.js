$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37://s
				$('img').animate({left: "-=10px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38://e
				$('img').animate({Up: "+=10px"}, 'fast');
				break;
			// Right Arrow Pressed
			case 39//f
				$('img').animate({Right: "-=10px"}, 'fast');
				break;
			// Down Array Pressed
			case 40://c
				$('img').animate({Down: "+=10px"}, 'fast');
				break;
		}
	});
});
