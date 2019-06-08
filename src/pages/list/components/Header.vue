<template>
	<div class="xm-header border-bottom">
		<router-link to='/' class="iconfont header-back">&#xe624;</router-link>		
		<h1 class="header-title">
			<input type="text" placeholder="输入城市或景点" v-model="inputVal" class="search-input" />
			<a class="search-delete" v-show="showDelete" @click="clearInputVal"></a>
		</h1>
		<span class="header-right">
			<a class="search-submit">搜索</a>
		</span>
	</div>
</template>

<script>
export default{
	name: 'ListHeader',
	computed: {
		showDelete () {
			return this.inputVal !== '' ? true : false
		}
	},
	data () {
		return {
			inputVal: ''
		}
	},
	methods: {
		clearInputVal () {
			this.inputVal = ''
		}
	}
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles"
.xm-header
	position: relative
	z-index: 98
	display: -webkit-box
	width: 100%
	height: .88rem
	text-align: center
	color: $whiteTextColor
	background-color: $whiteTextColor
	.header-back
		color: $sixOneColor
		display: inline-block
		width: .4rem
		line-height: .88rem
		padding: 0 .2rem
		font-size: .36rem
		text-align: left
	.header-title
		padding: 0 .6rem 0 .2rem
		background: #f2f2f2
		color: $twoOneColor
		border-radius: .3rem
		box-sizing: border-box
		position: relative
		height: .6rem
		margin: .14rem 0
		line-height: .6rem
		-webkit-box-flex: 1
		.search-input
			position: relative
			display: block
			width: 100%
			height: .4rem
			line-height: .4rem
			padding: .1rem 0
			background: #f2f2f2
			border: 0
			font-family: "Microsoft Yahei",Arial
			font-size: .28rem
			border-radius: .06rem
			text-align: center
		.search-delete
			position: absolute
			top: 0
			right: 0
			width: .58rem
			height: .58rem
			background: url(//img1.qunarzz.com/piao/fusion/1803/53/d259068b610c1d02.png) 0 .1rem no-repeat
			background-size: .4rem .4rem
	.header-right
		display: inline-block
		height: .88rem
		line-height: .88rem
		padding: 0 .1rem
		.search-submit
			display: inline-block
			width: .74rem
			margin-right: .04rem
			color: $twoOneColor
			font-size: .28rem
</style>