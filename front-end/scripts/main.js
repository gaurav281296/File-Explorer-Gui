function operate(operator) {
	var path = document.querySelector('#path').value;
	resultLambda = operator(path);
	resultLambda(result => {
		ul = document.createElement('ul');
		document.getElementById('output').appendChild(ul);
		result.forEach(function (res) {
			let li = document.createElement('li');
			ul.appendChild(li);
			li.innerHTML += res;
		});
		//document.querySelector('#output').innerText = result;
	});
}
