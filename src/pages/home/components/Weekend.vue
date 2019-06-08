<template>
	<div>
		<div class="title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for='recom of weekendList' :key='recom.id'>
				<div class="item-img-wrapper">
					<img class="item-img" :src="recom.imgUrl"/>
				</div>
				<div class="item-info">
					<p class="item-title" v-text='recom.title'></p>
					<p class="item-desc" v-text='recom.desc'></p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeWeekend',
	props: {
		weekendList: Array
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixin.styl'
	.title
		line-height: .8rem
		background: #eeeeee
		text-indent: .2rem
	 
	.item-img-wrapper
		overflow: hidden
		height: 0
		padding-bottom: 37.09%		
		.item-img
			width: 100%
	.item-info
		padding: .1rem
		.item-title
			line-height: .54rem
			font-size: .32rem
			ellipsis()
		.item-desc
			ellipsis()
			line-height: .4rem
			color: #cccccc
</style>