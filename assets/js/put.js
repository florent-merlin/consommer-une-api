//  ----------------------------- PUT -------------------------
// on récuperer le button du formulaire 
const putForm = document.querySelector('#form_put button[type=submit]');

// au click du button on recupere les données du formulaire et on les envoient à l'API via le fetch
putForm.addEventListener('click', (e) => {
	e.preventDefault();

	// on récupére le formulaire 
	const formPut = document.getElementById('form_put');

	// on récupére les données du formulaire
	const firstName = formPut.first_name.value;
	const lastName = formPut.last_name.value;
	const email = formPut.email.value;
	const password = formPut.password.value;

	// on rechercher toutes les information de l'URL (ex: ?user=9)
	const urlParam = new URLSearchParams(window.location.search);

	// on vérifie l'existance de la variable user dans l'URL
	if (urlParam.has('user')) {
		// on recupere la valeur de user
		const userId = urlParam.get('user');

		// mise à jour des données de l'utisateur "USER" grace au données du formulaire ci-dessus
		let request = new Request(`https://reqres.in/api/users/${userId}`, {
			method: 'PUT',
			//  données qu'on envoient
			body: JSON.stringify({
				firstName,
				lastName,
				email,
				password,
				avatar: 'http://lorempixel.com/128/128/',
			}),
			// on précise que les données envoyées son au format JSON
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		});

		// on envoi la requête puis on récupére la réponse de l'API
		fetch(request)
			.then((res) => res.json().then((resData) => ({ status: res.status, resData })))
			.then((result) => {
				console.log(result);
			});
	}
});
