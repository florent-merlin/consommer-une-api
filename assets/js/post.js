//----------------------------- POST -----------------------
const postForm = document.querySelector('#form_post button[type=submit]');

postForm.addEventListener('click', (e) => {
	e.preventDefault();
	const formPost = document.getElementById('form_post');

	const firstName = formPost.first_name.value;
	const lastName = formPost.last_name.value;
	const email = formPost.email.value;
	const password = formPost.password.value;

	let request = new Request('https://reqres.in/api/users', {
		method: 'POST',
		body: JSON.stringify({
			firstName,
			lastName,
			email,
			password,
			avatar: 'http://lorempixel.com/128/128/',
		}),

		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});

	fetch(request)
		.then((res) => res.json().then((resData) => ({ status: res.status, resData })))
		.then((result) => {
			console.log(result);
		});
});
