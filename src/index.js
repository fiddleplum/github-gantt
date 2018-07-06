class App {
	static initialize() {
		let gitHubUrl = 'https://api.github.com';

		fetch(gitHubUrl + '/users/fiddleplum').then(response => {
			return response.json();
		}).then(json => {
			console.log(json);
		});

		fetch(gitHubUrl + '/repos/fiddleplum/notes/issues?state=all').then(response => {
			return response.json();
		}).then(json => {
			console.log(json);
		});
	}
}

document.addEventListener('DOMContentLoaded', () => {
	App.initialize();
});

window.App = App;
