export default class Task {
	constructor(data, list) {
		this.data = data;
		this.list = list;
	}

	get(key) {
		return this.data[key];
	}

	update(key, val) {
		this.data[key] = val;

		window.storage.updateLocalStorage();

		return this.data[key];
	}

	// delete() {
	// 	this.list.splice(this.getIndex(), 1);

	// 	window.storage.updateLocalStorage();
	// }
}