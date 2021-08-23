function readFiboForm() {
	let fiboLen = Number(document.getElementById("fiboLenInput").value) - 1, fiboRes;

	console.time("fiboWithFor");
	fiboRes = fiboWithFor(fiboLen);
	console.timeLog("fiboWithFor");
	console.log("result: ", fiboRes);
	document.getElementById("fiboForRes").appendChild(document.createTextNode("(For) Number:" + String(fiboRes)));
	console.timeEnd("fiboWithFor");
	
	console.time("fiboWithRec");
	fiboRes = fiboWithRec(fiboLen);
	console.timeLog("fiboWithRec");
	console.log("result: ", fiboRes);
	document.getElementById("fiboRecRes").appendChild(document.createTextNode("(Rec) Number:" + String(fiboRes)));
	console.timeEnd("fiboWithRec");
	
	return false;
}
