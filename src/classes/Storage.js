import moment from 'moment';

export default class Storage {
	constructor() {
		if (! (this.lists = JSON.parse(window.localStorage.getItem('todoLists')))) {
			window.localStorage.setItem('todoLists', JSON.stringify([]));
			this.lists = JSON.parse(window.localStorage.getItem('todoLists'));
		}
	}

	getList(id) {
		return this.lists.find(list => list.id === id);
	}

	addList(name) {
		const lastListId = this.lists.length > 0 ? this.lists[this.lists.length - 1].id : 0;
		
		this.lists.push({ 
			"id": lastListId + 1,
			"name": name,
			"modified": moment().format('YYYY-M-DD HH:mm:ss'),
			"numOfTasks": 0,
			"open": 0,
			"done": 0,
			"tasks": []
		});

		this.updateLocalStorage();
	}

	updateLocalStorage() {
		window.localStorage.setItem('todoLists', JSON.stringify(this.lists));
	}
}