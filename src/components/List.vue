<template>
	<div>
		<div class="header">
			<div class="header-left flex-align-center">
				<img src="icons/back.svg" class="back-icon svg-black" title="Back to lists"
					@click="$emit('togglePage')">
				<form v-if="renaming" @submit.prevent="renameList">
					<input id="editNameInput" type="text" v-model="newName">
					<button type="submit" class="btn btn-sm primary-btn">Save</button>
					<button class="btn btn-sm white-btn" @click="cancelRenaming">Cancel</button>
					<p class="error" v-text="emptyNameError"></p>
				</form>
				<h2 v-else>{{ data.name }}</h2>
			</div>

			<div class="actions flex-align-center">
				<img src="icons/edit.svg" class="edit-icon svg-primary" title="Rename List"
					@click="renaming = true">
				<img src="icons/delete.svg" class="svg-danger" title="Delete List">
			</div>
		</div>

		<div class="add-task flex-align-center">
			<img src="icons/plus.svg" class="add-icon svg-black" title="Add List">
			<input type="text" placeholder="Add Task">
		</div>
		
		<div class="tasks">
			<task></task>
			<task></task>
		</div>
	</div>
</template>

<script>
	import Task from './Task';
	import List from '../List';

	export default {
		components: { Task },
		props: ['listData'],
		data() {
			return {
				renaming: false,
				emptyNameError: '',
				data: this.listData,
				newName: this.listData.name,
				listObj: new List
			}
		},

		methods: {
			renameList() {
				if (this.newName != '') {
					this.listObj.rename(this.data.id, this.newName)
					this.renaming = false;
					this.emptyNameError = '';
				} else {
					this.emptyNameError = 'The list name cannot be empty';
				}
			},
			cancelRenaming() {
				this.renaming = false;
				this.newName = this.data.name;
				this.emptyNameError = '';
			}
		},

		watch: {
			renaming(newVal) {
				setTimeout(() => {
					if (newVal)
						document.getElementById("editNameInput").focus();
				}, 100);
			}
		}
	}
</script>

<style>
	.header .header-left {
		gap: 46px;
	}

	.header .header-left .error {
		margin: -10px 0 10px -20px;
	} 

	.header .header-left form .btn[type="submit"]{
		margin-right: 5px;
	}

	.header .header-left input {
		font-size: 2rem;
		font-weight: bold;
		margin: 11.5px 10px 22.5px -20px;
		padding: 5px 20px;
		color: var(--text-color);
	}

	.header .back-icon {
		width: 45px;
		margin-bottom: 5px;
		border: 1px solid var(--border-color);
		padding: 8px;
		border-radius: 5px;
		cursor: pointer;
	}
	.header .back-icon:hover {
		padding: 6px;
	}

	.header .actions .edit-icon {
		margin-right: 17px;
	}

	.header .actions img {
		width: 30px;
		cursor: pointer;
	}
	.header .actions img:hover {
		width: 32px;
	}

	.add-task {
		background: var(--white);
		padding: 9px 26px;
		border: 1px solid var(--border-color);
		margin-bottom: 25px;
		border-radius: 10px;
		cursor: pointer;
	}

	.add-task .add-icon {
		margin-right: 15px;
		width: 19px;
	}

	.add-task input {
		border: 1px solid transparent;
		padding: 10px;
		color: var(--text-color);
		width: 100%;
		font-size: 1rem;
	}

</style>