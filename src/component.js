class Component {
	constructor(id) {
		this._elem = document.createElement('div');
		this._elem.id = id;
	}

	get elem() {
		return this._elem;
	}

	update() {
	}
}

export default Component;
