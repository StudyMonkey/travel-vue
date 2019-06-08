<template>
	<div class="addComment border-top">
		<router-link to="/">
			<div class="addComment-btn">写点评</div>
		</router-link>
	</div>
</template>

<script>
export default{
	name: 'CommentFoot'
}
</script>

<style lang="stylus" scoped>
.addComment
	position: fixed
	z-index: 3
	bottom: 0
	right: 0
	left: 0
	width: 100%
	height: 1.04rem
	background: #ffffff
	.addComment-btn
		margin .16rem .2rem 0 .16rem
		line-height: .72rem
		background-color: #00bcd4
		border-radius: .04rem
		text-align: center
		color: #ffffff
</style>