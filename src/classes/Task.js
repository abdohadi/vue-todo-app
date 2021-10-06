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

		this.list.updateModifiedDate();

		window.storage.updateLocalStorage();

		return this.data[key];
	}

	remove() {
		const taskIndex = this.list.get('tasks').findIndex(task => task.id === this.data.id);

		const status = this.data.done ? 'done' : 'open';
		this.list.data[status]--;
		this.list.data.numOfTasks--;
		this.list.get('tasks').splice(taskIndex, 1);

		this.list.updateModifiedDate();

		window.storage.updateLocalStorage();	
	}
}