import moment from 'moment'

export default class List {
	add(name) {
		window.lists.push({ 
			"id": ++window.listsLength,
			"name": name,
			"modified": moment().format('YYYY-M-DD HH:mm:ss'),
			"numOfTasks": 1,
			"open": 1,
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

	getIndex(id) {
		return window.lists.findIndex(list => list.id === id);
	}

	updateLocalStorage() {
		window.storage.setItem('todoLists', JSON.stringify(window.lists));
	}
}