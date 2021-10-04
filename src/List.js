import moment from 'moment'

export default class List {
	add(name) {
		window.lists.push({ 
			"id": ++window.listsLength,
			"name": name,
			"modified": moment().format('YYYY-M-DD HH:mm:ss'),
			"numOfTasks": 0,
			"open": 0,
			"done": 0,
			"tasks": []
		});

		this.updateLocalStorage();
	}

	rename(id, newName) {
		window.lists[this.getIndex(id)].name = newName;

		this.updateLocalStorage();
	}

	delete(id) {
		window.lists.splice(this.getIndex(id), 1);

		this.updateLocalStorage();
	}

	addTask(listId, taskName) {
		let targetList = window.lists[this.getIndex(listId)];
		targetList.tasks.unshift({
			"id": this.getFirstTaskId(listId) + 1,
			"name": taskName,
			"notes": '',
			"dueDate": '',
			"priority": ''
		});

		targetList.numOfTasks++;
		targetList.open++;

		this.updateLocalStorage();
	}

	getFirstTaskId(listId) {
		let tasks = window.lists[this.getIndex(listId)].tasks;
		return tasks.length > 0 ? tasks[0].id : 0;
	}

	getIndex(id) {
		return window.lists.findIndex(list => list.id === id);
	}

	updateLocalStorage() {
		window.storage.setItem('todoLists', JSON.stringify(window.lists));
	}
}