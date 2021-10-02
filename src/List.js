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

		window.storage.setItem('todoLists', JSON.stringify(window.lists));
	}
}