function addValue() {
	// getting the data from the input field in a variable called value
	let value = document.getElementById('input').value;

	if (value.trim() !== '') {
		// handling an error
		document.querySelector('.user-input').style.borderColor = '';

		// Use Day.js to format the date (imported to the html)
		let now = new Date();
		let time = dayjs(now).fromNow();

		// creating an li tag called item
		let item = document.createElement('li');
		item.className = 'li-item';

		//--------------------------------------------------------------------------------

		// creating a div called content div with time and content inside
		let contentDiv = document.createElement('div');
		contentDiv.className = 'content';

		let contentP = document.createElement('p');
		contentP.className = 'content-p';
		contentP.innerHTML = value;
		contentDiv.appendChild(contentP); // appending the p tag to the div

		let timestamp = document.createElement('p');
		timestamp.className = 'timestamp';
		timestamp.innerHTML = time;
		contentDiv.appendChild(timestamp); // appending the p tag to the div

		//--------------------------------------------------------------------------------

		// creating a div called options with icons inside
		let options = document.createElement('div');
		options.className = 'options';

		let trashIcon = document.createElement('button');
		trashIcon.className = 'fa-solid fa-trash';
		options.appendChild(trashIcon); // appending the div tag to the father div

		let editIcon = document.createElement('div');
		editIcon.className = 'fa-regular fa-pen-to-square';
		options.appendChild(editIcon); // appending the div tag to the father div

		let checkIcon = document.createElement('div');
		checkIcon.className = 'fa-solid fa-check';

		//--------------------------------------------------------------------------------

		// Appending each div to the li tag (let = item)

		item.appendChild(contentDiv);
		item.appendChild(options);

		//--------------------------------------------------------------------------------
		// appending each item to a ul
		document.querySelector('ul').appendChild(item);

		// handling item removal
		trashIcon.addEventListener('click', () => item.remove());

		//--------------------------------------------------------------------------------

		// handling edit option - - - - - - - -

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
		let color = document.getElementsByClassName('color')[0].value;
		contentP.style.color = color;

		// clear the input field
		document.getElementById('input').value = '';
	} else {
		// Change the border color only if the input is empty
		document.querySelector('.user-input').style.borderColor = 'red';
	}
}
