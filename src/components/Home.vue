<template>
	<div>
		<div class="header">
			<h2>All Lists</h2>
			<div>
				<button class="btn primary-btn flex-align-center" @click="showModal = true">
					<img src="icons/plus.svg" class="add-icon svg-white"> New List 
				</button>
			</div>
		</div>

		<h3 class="no-lists" v-if="! lists.length">No lists yet</h3>

		<div class="lists">
			<list-summary v-for="list in lists" :key="list.id" :data="list" @display-list="$emit('togglePage', $event)"></list-summary>
		</div>

		<div class="modal" :class="{ show: showModal }" @click="hideModal">
			<form @submit.prevent="addList">
				<div class="modal-box">
					<img src="icons/cancel.svg" class="close-icon svg-black" @click="hideModal">
					<label for="list">List Name</label>
					<input type="text" id="list" placeholder="e.g. My extreme, never-completed, long list" 
							v-model="listName">
					<p class="error" v-text="emptyNameError"></p>
					<button class="btn primary-btn">Add List</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import ListSummary from './ListSummary';
	import List from '../List';

	export default {
		components: { ListSummary },
		emits: ['togglePage'],
		data() {
			return {
				showModal: false,
				lists: window.lists,
				listName: '',
				emptyNameError: '',
				listObj: new List
			}
		},

		methods: {
			hideModal(e) {
				if (e.target.classList.contains('modal') || e.target.classList.contains('close-icon'))
					this.showModal = false; 
			},
			addList() {
				if (this.listName != '') {
					this.listObj.add(this.listName);
					this.listName = '';
					this.showModal = false; 
					this.emptyNameError = '';
				} else {
					this.emptyNameError = 'The list name cannot be empty';
				}
			}
		},
	}
</script>

<style>
	.header .btn .add-icon {
		width: 13px;
		margin-right: 9px;
	}

	.no-lists {
		text-align: center;
		font-size: 1.7rem;
		color: #888;
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

	.modal form {
		width: 37%;
		min-width: 400px;
	}

	.modal .modal-box {
		background: var(--white);
		padding: 29px;
		border: 1px solid var(--border-color);
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		gap: 12px;
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