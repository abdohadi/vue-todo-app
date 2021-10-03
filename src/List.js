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
		let listIndex = window.lists.findIndex(list => list.id === id);
		window.lists[listIndex].name = newName;
		
		this.updateLocalStorage();
	}

	updateLocalStorage() {
		window.storage.setItem('todoLists', JSON.stringify(window.lists));
	}
}