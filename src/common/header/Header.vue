<template>
	<div>
		<div  class="header-abs" v-show="showAbs">
			<div class="iconfont header-abs-back" @click="goBack">&#xe624;</div>
		</div>
		<div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
			<div class="iconfont header-fixed-back"  @click="goBack">&#xe624;</div>
			大连圣亚海洋世界
		</div>
	</div>
</template>

<script>
export default {
	name: 'DetailHeader',
	data () {
		return {
			showAbs: true,
			opacityStyle: {
				opacity: 0
			}
		}
	},
	methods: {
		goBack () {
			this.$router.go(-1);
		},
		handleFixed () {
			const top = document.documentElement.scrollTop // const 只读  let 可修改
			if ( top > 60 ) {
				let opacity = top / 140;
				opacity = opacity > 1 ? 1 : opacity
				this.opacityStyle = { opacity }
				this.showAbs = false
			}else{
				this.showAbs = true
			}
		}
	},
	activated () {
		console.log(111);
		window.addEventListener('scroll', this.handleFixed);
	},
	deactivated () {
		// 跳转页面之后移除这种全局事件造成的影响
		window.removeEventListener('scroll', this.handleFixed);
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.header-abs
		z-index: 2
		position: absolute
		top: .2rem
		left: .2rem
		width: .8rem
		height: .8rem
		line-height: .8rem
		text-align: center
		border-radius: .4rem
		background: rgba(0, 0, 0, .8)
		.header-abs-back
			color: #ffffff
			font-size: .4rem
	.header-fixed
		z-index: 2
		position: fixed
		top: 0
		left: 0
		right: 0
		height: $headerHeight
		line-height: $headerHeight
		text-align: center
		color: $whiteTextColor
		background: $bgColor
		font-size: .32rem
		.header-fixed-back
			position: absolute
			top: 0
			left:0
			bottom: 0
			width: .64rem
			text-align: center
			color: $whiteTextColor
			font-size: .4rem			
</style>