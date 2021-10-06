export default class Task {
	constructor(data, list) {
		this.data = data;
		this.list = list;
	}

	get(key) {
		return this.data[key];
	}
}