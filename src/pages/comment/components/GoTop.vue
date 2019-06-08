<template>
	<div class="gotop" v-show="showGotop" @click="goTop">
		<div class="gotop-btn">向上</div>
	</div>
</template>

<script>
export default{
	name: 'CommentGotop',
	data () {
		return {
			showGotop: false
		}
	},
	methods: {
		goTop () {
			document.documentElement.scrollTop = 0			
		},
		handleScroll () {
			const top = document.documentElement.scrollTop;
			if ( top >= 600 ) {
				this.showGotop = true
			}else{
				this.showGotop = false
			}
		}
	},
	activated () {
		window.addEventListener('scroll',this.handleScroll)
	},
	unactivated () {
		window.removeEventListener('scroll',this.handleScroll)
	}
}
</script>

<style lang="stylus" scoped>
.gotop
	position: fixed
	z-index: 3
	right: .2rem
	bottom: 1.3rem
	width: 1.04rem
	height: 1.04rem
	border-radius: .52rem
	background: rgba(256,256,256,.7)
	.gotop-btn
		position: absolute
		top: .12rem
		right: .13rem
		width: .8rem
		height: .8rem
		border-radius: .4rem
		overflow: hidden
		line-height: .8rem
		background: #00bcd4
		color: #ffffff
		font-size: .4rem
</style>