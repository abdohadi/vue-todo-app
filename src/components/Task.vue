<template>
	<div class="task" :class="priority">
		<div class="task-top flex-align-center toggle-task-details" @click="toggleDetails">
			<div class="task-left flex-align-center">
				<img src="/icons/row.svg" class="svg-black" width="20">
				<input type="text" :class="{ done: done }" v-model="name" @input="update('name')">
			</div>

			<div class="task-right">
				<label class="custom-checkbox" for="done-checkbox" title="Done" @click="update('done', )">
					<span class="check-mark" :class="{ show: done }">&#10003;</span>
				</label>
				<input type="checkbox" id="done-checkbox">
				<img src="icons/cancel.svg" class="svg-danger remove-task" title="Remove Task"
					@click="remove">
				<div class="triangle-container toggle-task-details" title="Edit Detail" 
					:class="{ up: showDetails }" @click.stop="toggleDetails">
					<span class="triangle toggle-task-details" @click.stop="toggleDetails"></span>
				</div>
			</div>
		</div>

		<div class="task-down" :class="{ show: showDetails }">
			<div class="task-down-inner flex-align-center">
				<div class="task-detail-left">
					<div class="input-group">
						<label>Notes</label>
						<textarea rows="5" cols="60" placeholder="Have any notes?" v-model="notes" 
								@input="update('notes')">
						</textarea>
					</div>
				</div>

				<div class="task-detail-right">
					<div class="input-group">
						<label>Due Date</label>
						<input type="date" name="due-date" v-model="dueDate" @change="update('dueDate')">
					</div>

					<div class="input-group">
						<label>Priority</label>
						<select @change="update('priority', $event)">
							<option value="none" :selected="priority == 'none'">None</option>
							<option value="high" :selected="priority == 'high'">High</option>
							<option value="medium" :selected="priority == 'medium'">Medium</option>
							<option value="low" :selected="priority == 'low'">Low</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Task from '../classes/Task';

	export default {
		props: ['data', 'list'],

		data() {
			return {
				showDetails: false,
				task: new Task(this.data, this.list),
				name: '',
				notes: '',
				dueDate: '',
				priority: '',
				done: false
			}
		},

		methods: {
			toggleDetails(e) {
				if (e.target.classList.contains('toggle-task-details'))
					this.showDetails = !this.showDetails;
			},

			update(key, e) {
				let val = '';	
				switch (key) {
					case 'priority':
						val = e.target.value;
						this.showDetails = false;
					break;
					case 'done':
						val = !this.done;
					break;
					default:
						val = this[key];	
					break;
				}

				if (key != 'name' || (key == 'name' && this[key] != '')) {
					this[key] = this.task.update(key, val);
				}
			},

			remove() {
				this.task.remove();
			}
		},

		created() {
			this.name = this.task.get('name');
			this.notes = this.task.get('notes');
			this.dueDate = this.task.get('dueDate');
			this.priority = this.task.get('priority');
			this.done = this.task.get('done');
		}
	}
</script>

<style>
	.task {
		max-width: 900px;
		border: 1px solid var(--border-color);
		padding: 9px 26px;
		margin: 10px auto;
		background: var(--white);
		border-radius: 10px;
		cursor: pointer;
	}
	.task.high {
		border-left: 5px solid var(--danger-color);
	}
	.task.medium {
		border-left: 5px solid var(--warning-color);
	}
	.task.low {
		border-left: 5px solid var(--primary-color);
	}

	.task .task-top, .task-down-inner {
		justify-content: space-between;
	}

	.task .task-left {
		gap: 25px;
		width: 60%;
	}

	.task .task-left input {
		border: 1px solid transparent;
		padding: 10px;
		font-size: 1.1rem;
		color: var(--text-color);
		width: 100%;
	}
	.task .task-left input.done {
		text-decoration: line-through;
		color: var(--text-color-lighten);
	}

	.task .task-left img {
		cursor: grab;
	}

	.task .task-right {
		display: flex;
		align-items: center;
	}

	.task .task-right .custom-checkbox {
		border: 1px solid var(--primary-color);
		border-radius: 3px;
		color: var(--white);
		background: var(--white);
		font-size: 1.4rem;
		width: 21px;
		height: 21px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-bottom: 1.4px;
		cursor: pointer;
		box-shadow: 0px 0px 3px -2px var(--primary-color);
	}

	.task .task-right .custom-checkbox .check-mark {
		font-size: 1.2rem;
		margin-top: 1px;
		color: var(--primary-color);
		display: none;
	}
	.task .task-right .custom-checkbox .check-mark.show {
		display: block !important;
	}

	.task .task-right .custom-checkbox,
	.task .task-right input[type="checkbox"] {
		margin-right: 20px;
	}
	.task .task-right input[type="checkbox"] {
		display: none;
	}

	.task .task-right .remove-task {
		width: 16px;
		cursor: pointer;
	}

	.triangle-container {
		width: 27px;
		height: 28px;
		line-height: 25px;
		text-align: center;
		border-radius: 3px;
		border: 1px solid transparent;
		margin-left: 15px;
	}
	.triangle-container:hover {
		border: 1px solid var(--text-color);
	}
	.triangle-container.up {
		-webkit-transform: rotate(180deg);
		-moz-transform: rotate(180deg);
		-o-transform: rotate(180deg);
		transform: rotate(180deg);
	}

	.triangle {
		border: 7px solid;
		border-left-color: transparent;
		border-right-color: transparent;
		border-top-width: 7px;
		position: relative;
		top: 14.2px;
		border-bottom: none;
		border-radius: 3px;
		margin-right: 1px;
	}

	.task .task-down {
		max-height: 0;
		overflow: hidden;
	}
	.task .task-down.show {
		max-height: 300px;
	}

	.task .task-down-inner {
		padding-top: 15px;
		margin-top: 15px;
		border-top: 1px solid var(--border-color);
		gap: 30px;
	}

	.task .task-down-inner .task-detail-left {
		flex: 3;
	}

	.task .task-down-inner .task-detail-right {
		flex: 1;
	}

	.task .task-down-inner input[type="date"]{
		margin-bottom: 20px;
	}

	@media screen and (max-width: 700px) {
		.task .task-down-inner {
			flex-direction: column;
		}

		.task .task-down-inner > div {
			width: 100%;
		}

		.task .task-down.show {
			max-height: 400px;
		}
	}
</style>