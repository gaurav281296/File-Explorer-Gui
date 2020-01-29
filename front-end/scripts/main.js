function operate(operator) {
	var path = document.querySelector('#path').value;
	resultLambda = operator(path);
	resultLambda(result => {
		document.getElementById("output").innerHTML = "";
		
		if (typeof result !== 'undefined' && result.length > 0) {
			ul = document.createElement('ul');
			document.getElementById('output').appendChild(ul);
			result.forEach(function(res) {
				let li = document.createElement('li');
				ul.appendChild(li);
				li.innerHTML += res;
			});
		}
		else {
			document.querySelector('#output').innerText = "Directory with the given path does not exist or is invalid";
		}
	});
}
