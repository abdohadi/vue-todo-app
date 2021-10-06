export default class List {
	constructor(data) {
		this.data = data;
	}

	get(key) {
		return this.data[key];
	}

	rename(newName) {
		this.data.name = newName;

		window.storage.updateLocalStorage();
	}

	delete() {
		const listIndex = window.storage.lists.findIndex(list => list.id === this.data.id);
		
		window.storage.lists.splice(listIndex, 1);

		window.storage.updateLocalStorage();
	}

	addTask(taskName) {
		let firstTaskId = this.data.tasks.length > 0 ? this.data.tasks[0].id : 0;

		this.data.tasks.unshift({
			"id": firstTaskId + 1,
			"name": taskName,
			"notes": '',
			"dueDate": '',
			"priority": ''
		});

		this.data.numOfTasks++;
		this.data.open++;

		window.storage.updateLocalStorage();
	}
}