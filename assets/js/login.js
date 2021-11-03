// on récuperer le button du formulaire
const userLogin = document.querySelector('#form_login button[type=submit]');
// au click du button on recupere les données du formulaire et on les envoient à l'API via le fetch
userLogin.addEventListener('click', (e) => {
	e.preventDefault();

	// on récupére le formulaire
	const userLogin = document.getElementById('form_login');

	// on récupére les données du formulaire
	const email = userLogin.email.value;
	const password = userLogin.password.value;

	// requéte de connexion utilisateur
	let request = new Request(`https://reqres.in/api/login/`, {
		method: 'POST',
		//  données qu'on envoient
		body: JSON.stringify({
			email,
			password,
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
});
