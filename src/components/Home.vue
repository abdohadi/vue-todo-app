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
			<list-summary v-for="listData in lists" :key="listData.id" :data="listData" 
						@display-list="$emit('togglePage', listData)">
			</list-summary>
		</div>

		<modal :show-modal-prop="showModal" @click="hideModal">
			<form @submit.prevent="addList">
				<div class="modal-box">
					<img src="icons/cancel.svg" class="close-icon hide-modal svg-black" @click="hideModal">
					<label for="listNameInput">List Name</label>
					<input type="text" id="listNameInput" placeholder="e.g. My extreme, never-completed, long list"
							v-model="newListName">
					<p class="error" v-text="emptyNameError"></p>
					<button class="btn primary-btn">Add List</button>
				</div>
			</form>
		</modal>
	</div>
</template>

<script>
	import ListSummary from './ListSummary';
	import Modal from './Modal';

	export default {
		components: { ListSummary, Modal },
		emits: ['togglePage'],
		data() {
			return {
				showModal: false,
				lists: window.storage.lists,
				newListName: '',
				emptyNameError: '',
			}
		},

		watch: {
			showModal(newVal) {
				if (newVal)
					document.getElementById('listNameInput').focus();
			}
		},

		methods: {
			hideModal(e) {
				if (e.target.classList.contains('hide-modal')) {
					this.showModal = false; 
					this.newListName = '';
				}
			},
			addList() {
				if (this.newListName != '') {
					window.storage.addList(this.newListName);
					this.newListName = '';
					this.showModal = false; 
					this.emptyNameError = '';
				} else {
					this.emptyNameError = 'The list name cannot be empty';
				}
			}
		}
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
</style>