<template>
	<div class="icons">
	    <swiper :options="swiperOption">
		    <swiper-slide v-for="(page,index) of pages" :key="index">
				<router-link 
					tag="div" 
					class="icon" 
					v-for="icon of page" 
					:key="icon.id"
					to="/list"
					>
					<div class="icon-img">
						<img class="icon-ImgCon" :src="icon.imgUrl" />
					</div>
					<p class="icon-desc" v-text="icon.desc"></p>
				</router-link>
			</swiper-slide> 
			<div class="swiper-pagination"  slot="pagination"></div>
	    </swiper>		
	</div>
</template>

<script>
export default{
	name: 'HomeIcons',
	props: {
		iconList: Array
	},
	data () {
		return {
	  		swiperOption: {
	  			pagination: '.swiper-pagination',
	  			autoplay: false
	  		}			
		}
	},
	computed: { // 计算属性
		pages () { // 计算图标的分页页数，拼成一个二维数组
			const pages = [];
			this.iconList.forEach((item, index) => {
				const page = Math.floor( index / 8 );
				if( !pages[page] ) {
					pages[page] = []
				}
				pages[page].push(item)
			})
			return pages
		}
	}

}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.icons >>> .swiper-container
	overflow: hidden
	height: 0
	padding-bottom: 55%
.icons >>> .swiper-pagination-bullets
	bottom: 0
.icons
	margin-top: .1rem
	.icon
		position: relative
		overflow: hidden
		width: 25%
		height: 0
		float: left
		padding-bottom: 25%
		.icon-img
			position: absolute
			top: 0
			left: 0
			right: 0
			bottom: .44rem
			box-sizing: border-box
			padding: .1rem
			.icon-ImgCon
				display: block
				margin: 0 auto
				height: 100%
		.icon-desc
			position: absolute
			bottom: 0
			left: 0
			right: 0
			height: .44rem
			line-height: .44rem
			color: $darkTextColor
			text-align: center
			ellipsis()
</style>