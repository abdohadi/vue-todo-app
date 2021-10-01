<template>
	<div>
		<div class="header">
			<h2>All Lists</h2>
			<div>
				<button class="btn primary-btn flex-align-center">
					<img src="icons/plus.svg" class="add-icon svg-white"> New List 
				</button>
			</div>
		</div>

		<div class="lists">
			<list-summary></list-summary>
			<list-summary></list-summary>
			<list-summary></list-summary>
			<list-summary></list-summary>
			<list-summary></list-summary>
		</div>

		<div class="modal">
			<div class="modal-box">
				<img src="icons/cancel.svg" class="close-icon svg-black">
				<label for="list">List Name</label>
				<input type="text" id="list" placeholder="e.g. My extreme, never-completed, long list">
				<button class="btn primary-btn">Add List</button>
			</div>
		</div>
	</div>
</template>

<script>
	import ListSummary from './ListSummary.vue';

	export default {
		components: {
			ListSummary
		}
	}
</script>

<style>
	.header .btn .add-icon {
		width: 13px;
		margin-right: 9px;
	}

	.lists {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		gap: 40px;
	}

	.modal {
		position: absolute;
		left: 0;
		right: 0;
		top: -2000px;
		bottom: 0;
		background: #494949db;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		width: 50%;
		height: 50%;
		margin: auto;
		opacity: 0;
	}
	.modal.show {
		top: 0;
		opacity: 1 !important;
		width: 100% !important;
		height: 100% !important;
	}

	.modal .modal-box {
		background: var(--white);
		padding: 29px;
		border: 1px solid var(--border-color);
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		gap: 12px;
		width: 37%;
		min-width: 400px;
		margin: auto;
		margin-top: 50px;
		position: relative;
	}
	.modal.show .modal-box {
		margin-top: 150px;
	}

	.modal-box .close-icon {
		position: absolute;
		top: 14px;
		right: 14px;
		font-size: 10px;
		width: 12px;
		cursor: pointer;
	}

	.modal input {
		padding: 13px 20px;
		font-size: .9rem;
		color: var(--text-color);
	} 

	.modal .btn {
		width: 100px;
		margin-left: auto;
	}
</style>