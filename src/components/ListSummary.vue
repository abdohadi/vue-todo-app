<template>
	<div class="list-summary" @click="$emit('displayList', data)">
		<h3>{{ data.name }}</h3>
		<p>Modified {{ getDate() }}</p>
		<p>{{ data.numOfTasks }} Tasks &nbsp; {{ data.open }} Open &nbsp; {{ data.done }} Done</p>
	</div>
</template>

<script>
	import moment from 'moment';

	export default {
		emits: ['displayList'],
		props: ['data'],
		methods: {
			getDate() {
				return moment(this.data.modified).fromNow();
			}
		}
	}
</script>

<style>
	.list-summary {
		background: var(--white);
		width: 250px;
		padding: 10px 20px;
		border: 1px solid var(--border-color);
		border-radius: 8px;
		cursor: pointer;
		-webkit-box-shadow: 0px 16px 49px -30px var(--shadow-color);
		-moz-box-shadow: 0px 16px 49px -30px var(--shadow-color);
		-o-box-shadow: 0px 16px 49px -30px var(--shadow-color);
		box-shadow: 0px 16px 49px -30px var(--shadow-color);
	}

	.list-summary:hover {
		-webkit-box-shadow: 0px 16px 49px -22px var(--shadow-color);
		-moz-box-shadow: 0px 16px 49px -22px var(--shadow-color);
		-o-box-shadow: 0px 16px 49px -22px var(--shadow-color);
		box-shadow: 0px 16px 49px -22px var(--shadow-color);
		border: 1px solid var(--border-color-hover);
	}

	.list-summary h3:hover {
		text-decoration: underline;
	}
</style>
