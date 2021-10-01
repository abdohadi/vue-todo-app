<template>
	<div class="task">
		<div class="task-top flex-align-center">
			<div class="task-left flex-align-center">
				<img src="/icons/row.svg" class="svg-black" width="20" title="Drage">
				<input type="text" data-task-id="1" value="Complete vue todo app">
			</div>

			<div class="task-right">
				<label class="custom-checkbox" for="done-checkbox" title="Done">
					<span class="check-mark">&#10003;</span>
				</label>
				<input type="checkbox" name="done" id="done-checkbox" data-task-id="1">
				<img src="icons/cancel.svg" class="svg-danger delete-task" title="Delete Task">
				<div class="triangle-container" title="Edit Detail">
					<span class="triangle"></span>
				</div>
			</div>
		</div>

		<div class="task-down">
			<div class="task-down-inner flex-align-center">
				<div class="task-detail-left">
					<div class="input-group">
						<label>Notes</label>
						<textarea rows="5" cols="60" placeholder="Have any notes?"></textarea>
					</div>
				</div>

				<div class="task-detail-right">
					<div class="input-group">
						<label>Due Date</label>
						<input type="date" name="due-date">
					</div>

					<div class="input-group">
						<label>Priority</label>
						<select>
							<option>None</option>
							<option>High</option>
							<option>Medium</option>
							<option>Low</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>
	
	.task {
		border: 1px solid var(--border-color);
		padding: 15px 26px;
		margin-bottom: 25px;
		background: var(--white);
		border-radius: 10px;
		cursor: pointer;
	}

	.task .task-top, .task-down-inner {
		justify-content: space-between;
	}

	.task .task-left {
		gap: 25px;
	}

	.task .task-left input {
		border: 1px solid transparent;
		padding: 10px;
		font-size: 1.1rem;
		color: var(--text-color);
		width: 400px;
	}

	.task .task-right {
		display: flex;
		align-items: center;
	}

	.task .task-right img {
		cursor: grab;
	}

	.task .task-right .custom-checkbox {
		border: 1px solid var(--primary-color);
		border-radius: 3px;
		color: var(--white);
		background: var(--white);
		font-size: 1.4rem;
		width: 22px;
		height: 22px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-bottom: 1.4px;
		cursor: pointer;
		box-shadow: 0px 0px 3px -2px var(--primary-color);
	}
	.task .task-right .custom-checkbox.checked {
		border-width: 2px;
	}

	.task .task-right .custom-checkbox .check-mark {
		font-weight: bold;
		font-size: 1.3rem;
		color: var(--primary-color);
		display: none;
	}
	.task .task-right .custom-checkbox .check-mark.show {
		display: block !important;
	}

	.task .task-right .custom-checkbox,
	.task .task-right input[type="checkbox"] {
		margin-right: 20px;
		margin-top: 3.5px;
	}
	.task .task-right input[type="checkbox"] {
		display: none;
	}

	.task .task-right .delete-task {
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
		/*max-height: 0;*/
		overflow: hidden;
	}

	.task .task-down-inner {
		padding-top: 15px;
		margin-top: 15px;
		border-top: 1px solid var(--border-color);
	}

	.task .task-down-inner .task-detail-right {
		width: 30%;
	}

	.task .task-down-inner .task-detail-right input,
	.task .task-down-inner .task-detail-right select {
		width: 60%;
	}

	.task .task-down-inner input[type="date"]{
		margin-bottom: 20px;
	}
</style>