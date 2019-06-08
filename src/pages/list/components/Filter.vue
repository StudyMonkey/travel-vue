<template>
	<div class="xm-filter border-bottom" :style="haveFix ? fixStyle : ''">
		<div class="xm-select">
			<span class="xm-select-caption iconfont">全部分类</span>
		</div>
		<div class="xm-select">
			<span class="xm-select-caption mp-iconfont">推荐排序</span>			
		</div>		
	</div>
</template>

<script>
export default{
	name: 'ListFilter',
	data () {
		return {
			haveFix: false,
			fixStyle:{
				'position': 'fixed',
				'top': 0,
				'left': 0,
				'z-index': 99
			}
		}
	},
	methods: {
		handleFilter () {
			const top = document.documentElement.scrollTop;
			if( top >= 44 ) {
				this.haveFix = true
			} else {
				this.haveFix = false
			}
		}
	},
	activated () {
		window.addEventListener('scroll', this.handleFilter)
	},
	deactivated () {
		window.removeEventListener('scroll', this.handleFilter);
	}
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixin"
@import "~styles/varibles"
.xm-filter
	display: -webkit-box
	width: 100%
	height: .8rem
	background: $whiteTextColor
	.xm-select
		position: relative
		display: block
		-webkit-box-flex: 1
		box-sizing: border-box
		width: 100%
		height: .8rem
		line-height: .8rem
		color: $twoOneColor
		text-align: center
		ellipsis()
		&:before
			content: ""
			position: absolute
			top: .1rem
			left: 0
			width: .02rem
			height: .6rem
			border-left: 1px solid #e0e0e0
			transform: scaleX(.5)
			transform-origin: 100% 0
		&:first-child
			border: 0
		.xm-select-caption
			position: relative
			&:after
				content: "E"
				position: absolute
				top: .04rem
				right: -.34rem
				width: .24rem
				height: .24rem
				color: $sixOneColor
				font-size: .24rem
</style>