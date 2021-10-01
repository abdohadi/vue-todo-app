<template>
	<div>
		<div class="header">
			<div class="header-left flex-align-center">
				<img src="icons/back.svg" class="back-icon svg-black" title="Back to lists">
				<h2>List Name</h2>
			</div>

			<div class="actions flex-align-center">
				<img src="icons/edit.svg" class="edit-icon svg-primary" title="Rename List">
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
	import Task from './Task.vue';

	export default {
		components: {
			Task
		}
	}
</script>

<style>
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

	.header .header-left {
		gap: 46px;
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

</style>