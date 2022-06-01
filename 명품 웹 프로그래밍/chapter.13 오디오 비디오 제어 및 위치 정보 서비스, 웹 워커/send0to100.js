onmessage = function (e) {
	var i = e.data;

	if(i>100){
		i = "=100을 초과한 값입니다.";
	}
	else if(i>89){
		i = "=A";
	}
	else if(i>79){
		i = "=B";
	}
	else if(i>69){
		i = "=C";
	}
	else{
		i = "=F";
	}
	postMessage(i);

	close();
}
