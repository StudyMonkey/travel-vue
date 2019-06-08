<template>
	<div class="header">
		<div class="iconfont header-fixed-back" @click="goBack"></div>
		更多报价
	</div>
</template>

<script>
export default{
	name: 'PriceHeader',
	methods: {
		goBack () {
			this.$router.go(-1)
		}
	}
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles"
.header
	position: relative
	height: .86rem
	line-height: .86rem
	text-align: center
	color: $whiteTextColor
	background: #00bcd4
	font-size: .32rem
	.header-fixed-back
		position: absolute
		top: 0
		left: 0
		bottom: 0
		width: .64rem
		text-align: center
		color: $whiteTextColor
		font-size: .4rem
</style>
