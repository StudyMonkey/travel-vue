<template>
	<div class="strateg-header">
		<router-link to='/comment' tag="span" class="iconfont header-back">&#xe624;</router-link>
		<div class="title">攻略点评</div>
	</div>
</template>

<script>
export default{
	name: 'StrategHeader'
}
</script>

<style lang="stylus" scoped>
.strateg-header
	height: .88rem
	line-height: .88rem
	position: relative
	background: #ffffff
	color: #212121
	font-size: .36rem
	overflow: hidden
	text-overflow: ellipsis
	white-space: nowrap
	text-align: center
	z-index: 10
	span
		position: absolute
		top: 0
		left: 0
		width: .6rem
		cursor: pointer
		text-align: left
		padding-left: .15rem
		font-size: .4rem
	.title
		overflow: hidden
		text-overflow: ellipsis
		white-space: nowrap
		margin: 0 .6rem
</style>