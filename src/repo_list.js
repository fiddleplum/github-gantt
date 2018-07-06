import Component from './component';

class RepoList extends Component {
	constructor(id, gitHub) {
		super(id);

		this._gitHub = gitHub;
	}

	async update() {
		let repos = await this._gitHub.getRepos();
		let html = '';
		html += '<h2>Repos for ' + this._user + '</h2>';
		html += '<ul>';
		for (let i = 0, l = repos.length; i < l; i++) {
			html += '<li>' + repos[i] + '</li>';
		}
		html += '</ul>';
		this.elem.innerHTML = html;
	}
}

export default RepoList;
