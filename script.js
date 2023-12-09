function addValue() {
	// getting the data from the input field in a variable called value
	let value = document.getElementById('input').value;

	if (value !== '') {
		// Use Day.js to format the date (imported to the html)
		var now = new Date();
		var time = dayjs(now).fromNow();

		// creating an li tag called item
		var item = document.createElement('li');

		//--------------------------------------------------------------------------------

		// creating a div called content div with time and content inside
		var contentDiv = document.createElement('div');
		contentDiv.className = 'content';

		var contentP = document.createElement('p');
		contentP.className = 'content-p';
		contentP.innerHTML = value;
		contentDiv.appendChild(contentP); // appending the p tag to the div

		var timestamp = document.createElement('p');
		timestamp.className = 'timestamp';
		timestamp.innerHTML = time;
		contentDiv.appendChild(timestamp); // appending the p tag to the div

		//--------------------------------------------------------------------------------

		// creating a div called options with icons inside
		var options = document.createElement('div');
		options.className = 'options';

		var trashIcon = document.createElement('div');
		trashIcon.className = 'fa-solid fa-trash';
		options.appendChild(trashIcon); // appending the div tag to the father div

		var editIcon = document.createElement('div');
		editIcon.className = 'fa-regular fa-pen-to-square';
		options.appendChild(editIcon); // appending the div tag to the father div

		var checkIcon = document.createElement('div');
		checkIcon.className = 'fa-solid fa-check';

		//--------------------------------------------------------------------------------

		// Appending each div to the li tag (Var = item)

		item.appendChild(contentDiv);
		item.appendChild(options);

		//--------------------------------------------------------------------------------
		// appending each item to a ul
		document.querySelector('ul').appendChild(item);

		// handling item removal
		trashIcon.addEventListener('click', () => item.remove());

		//--------------------------------------------------------------------------------

		// handling edit option

		editIcon.addEventListener('click', () => {
			contentP.setAttribute('contenteditable', 'true');
			contentP.focus();
			options.appendChild(checkIcon);
			options.removeChild(editIcon);
		});

		checkIcon.addEventListener('click', () => {
			contentP.removeAttribute('contenteditable');
			options.appendChild(editIcon);
			options.removeChild(checkIcon);
		});

		//--------------------------------------------------------------------------------

		// changing a color to each item
		let color = document.getElementById('color').value;
		contentP.style.color = color;
	} else {
		alert('Enter Text Please');
	}
}
