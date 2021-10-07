export default class Task {
	constructor(data, list) {
		this.data = data;
		this.list = list;
		this.priorityNums = { "none": 0, "low": 1, "medium": 2, "high": 3 };
	}

	get(key) {
		return this.data[key];
	}

	update(key, val) {
		this.data[key] = val;

<<<<<<< HEAD
		if (key == 'done') {
			this.list.updateNumOfTasks(val);
		} else if (key == 'priority') {
			this.data['priorityNum'] = this.priorityNums[val];
			this.list.arrangeTasksBasedOnPriority()
		}

		this.list.updateModifiedDate();

=======
>>>>>>> 03414569de5533bea10aac6373a651728fd709d0
		window.storage.updateLocalStorage();

		return this.data[key];
	}

<<<<<<< HEAD
	remove() {
		const taskIndex = this.list.get('tasks').findIndex(task => task.id === this.data.id);

		const status = this.data.done ? 'done' : 'open';
		this.list.data[status]--;
		this.list.data.numOfTasks--;
		this.list.get('tasks').splice(taskIndex, 1);

		this.list.updateModifiedDate();

		window.storage.updateLocalStorage();	
	}
=======
	// delete() {
	// 	this.list.splice(this.getIndex(), 1);

	// 	window.storage.updateLocalStorage();
	// }
>>>>>>> 03414569de5533bea10aac6373a651728fd709d0
}