function fiboWithFor(len) {
	let x = 0, y = 1, tmp = 0;
	
	if(len < 2) {
		return len;
	}
	for(let i = 2; i <= len; i++) {
		tmp = y;
		y = x + y;
		x = tmp;
	}
	return y;
}

function fiboWithRec(len) {
	if(len < 2) {
		return len;
	}
	return fiboWithRec(len-1) + fiboWithRec(len-2);
}
