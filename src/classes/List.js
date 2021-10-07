import moment from 'moment';

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
		this.data.tasks.push({
			"id": this.getLargestTaskId() + 1,
			"name": taskName,
			"notes": '',
			"dueDate": '',
			"priority": 'none',
			"priorityNum": 0,
			'done': false
		});

		this.data.numOfTasks++;
		this.data.open++;

		this.updateModifiedDate();

		window.storage.updateLocalStorage();
	}

	arrangeTasksBasedOnPriority() {
		this.data.tasks.sort((t1, t2) => t1.priorityNum < t2.priorityNum);console.log(this.data.tasks);
	}

	getLargestTaskId() {
		if (this.data.tasks.length > 0) {
			return this.data.tasks.reduce((init, task) => {
				return task.id > init ? task.id : init;
			}, 0);
		} 

		return 0;
	}

	updateNumOfTasks(val) {
		if (val == true) {
			this.data.done++;
			this.data.open--;
		} else {
			this.data.done--;
			this.data.open++;
		}
	}

	updateModifiedDate() {
		this.data.modified = moment().format('YYYY-M-DD HH:mm:ss');
	}
}