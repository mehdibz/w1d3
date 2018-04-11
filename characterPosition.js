function countLetters(input){
	input= input.split(" ").join("");
	var countList = {};
	
	for (var i=0; i < input.length; i++){

		var counter= 0;

		for (var j = 0; j< input.length ; j++) {
			
			if (input[i] === input[j]) {

				if (counter == ""){

					counter = j;
				}else{

					counter += "," + j;
				}

			}
		}
		
		countList[input[i]] = counter;
	}
	return countList;
}


console.log(countLetters("lighthouse in the house"));

//lighthouseinthehouse