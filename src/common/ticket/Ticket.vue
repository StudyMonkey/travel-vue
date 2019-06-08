<template>
	<div>
		<div class="item" style="background: #FFFFFF;margin-bottom: .2rem;" v-for="(item,index) of list" :key="index">
			<div class="item-title border-bottom">
				<span class="item-title-icon"></span>
				{{item.title}}
			</div>
			<div v-if="item.children" class="item-children">
				<common-ticket :list="item.children"></common-ticket>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'commonTicket', // 这个name 可直接用于调用自身的组件
	props: {
		list: Array
	}
}
</script>

<style lang="stylus" scoped>
	.item-title
	    z-index: 1
	    height: .88rem
	    background: #fff
	    color: #333
	    font-size: .32rem
	    padding: 0 .2rem
	    line-height: .88rem
	    text-indent: .36rem
		.item-title-icon
		    display: inline-block
		    position: absolute
		    width: .36rem
		    height: .36rem
		    top: .26rem
		    left: .2rem
		    background-image: url(//s.qunarzz.com/piao/image/touch/sight/detail.png)
		    background-position: 0 -.45rem 
		    background-repeat: no-repeat
		    margin-right: .1rem
		    background-size: .4rem 3rem
	.item-children
		padding: 0 .2rem			    
</style>