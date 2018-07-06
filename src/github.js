class GitHub {
	constructor(gitHubUrl, user) {
		this._gitHubUrl = gitHubUrl;
		this._user = user;
	}

	getGitHubUrl() {
		return this._gitHubUrl;
	}

	getUser() {
		return this._user;
	}

	async getRepos() {
		let response = await fetch(this._gitHubUrl + '/users/' + this._user + '/repos');
		let json = await response.json();
		let repos = [];
		for (let i = 0, l = json.length; i < l; i++) {
			repos.push(json[i].name);
		}
		return repos;
	}
}

export default GitHub;
