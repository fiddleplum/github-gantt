import RepoList from './repo_list';
import GitHub from './github';

class App {
	constructor() {
		this._gitHubUrl = 'https://api.github.com';
		this._user = 'fiddleplum';

		fetch(this._gitHubUrl + '/repos/' + this._user + '/notes/issues?state=all').then((response) => {
			return response.json();
		}).then((json) => {
			console.log(json);
		});

		this._gitHub = new GitHub(this._gitHubUrl, this._user);

		this._repoList = new RepoList('repoList', this._gitHub);
		this._repoList.update();
	}
}

document.addEventListener('DOMContentLoaded', () => {
	console.info('Initializing GitHub Vis...');
	window.app = new App();
	console.info('GitHub Vis has been initialized.');
});

window.app = null;
