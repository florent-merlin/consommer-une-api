// ----------------------------------- GET (getUsers) -----------------------------------

fetch('https://reqres.in/api/users?per_page=12')
	.then((response) => {
		if (!response.ok) {
			throw Error('ERROR');
		}
		return response.json();
	})
	.then((data) => {
		console.log(data.data);
		const html = data.data
			.map((user) => {
				return `
					<div class="user">
						<p>${user.id} - ${user.last_name} ${user.first_name}</p>
						<p>${user.email}</p>
						<img src="${user.avatar}" alt="${user.first_name}-${user.id}">
						<a href="./put.html?user=${user.id}">
							<button type="button">Modifier</button>
						</a>
						<button type="button" onClick="deleteUser(${user.id})">Supprimer</button>
					</div>
				`;
			})
			.join('');
		document.querySelector('#getUsers').insertAdjacentHTML('afterbegin', html);
	})
	.catch((error) => {
		console.log(error);
	});

function deleteUser(userId) {
	fetch(`https://reqres.in/api/users/${userId}`, {
		method: 'DELETE',
	}).then((res) => {
		console.log(res.status);
	});
}
