<template>
	<div>
		<div class="banner">
			<img @click="handleBannerClick" class="banner-img" :src="bannerImg"/>
			<div class="banner-info">
				<div class="banner-title" v-text="sightName"></div>
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe692;</span>{{this.gallaryImgs.length}}
				</div>
			</div>
		</div>	
		<common-fade>
			<common-gallary @close="handleGallaryClose" :imgs="gallaryImgs" v-show="showGallary"></common-gallary>
		</common-fade>
	</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import CommonFade from 'common/fade/Fade'
export default {
	name: 'DetailBanner',
	props: {
		sightName: String,
		bannerImg: String,
		gallaryImgs: Array
	},
	data () {
		return {
			showGallary: false
		}
	},
	components: {
		CommonGallary,
		CommonFade
	},
	methods: {
		handleBannerClick () {
			this.showGallary = true
		},
		handleGallaryClose () {
			this.showGallary = false
		}
	}
}
</script>

<style lang="stylus" scoped>
	.banner
		position: relative
		overflow: hidden
		height: 0
		padding-bottom: 55%
		.banner-img
			width: 100%
		.banner-info
			display: flex
			position: absolute
			left: 0
			right: 0
			bottom: 0
			line-height: .6rem
			color: #ffffff
			background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
			.banner-title
				font-size: .4rem
				padding: 0 .2rem
				flex: 1
			.banner-number
				height: .32rem
				line-height: .32rem
				margin-top: .14rem
				padding: 0 .4rem				
				border-radius: .2rem
				background: rgba(0, 0, 0, .8)
				font-size: .24rem
				.banner-icon
					font-size: .24rem
</style>