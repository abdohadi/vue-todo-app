<template>
	<div class="modal hide-modal" :class="{ show: getShowModal }">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		props: ['showModalProp'],
		computed: {
			getShowModal() {
				return this.showModalProp;
			}
		}
	}
</script>

<style>
	.modal {
		position: fixed;
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

	@media screen and (max-width: 480px) {
		.modal form {
			width: 90%;
			min-width: 300px;
		}
	}
</style>