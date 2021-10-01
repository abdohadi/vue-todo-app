<template>
	<div class="list-summary">
		<h3>List Name</h3>
		<p>Modified 3 days ago</p>
		<p>3 Tasks  1 Done  2 Open</p>
	</div>
</template>

<script>
	export default {

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
