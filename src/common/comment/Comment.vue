<template>
	<div class="commentList">
		<ul class="comment-item">
			<li class="border-top" v-for="comment of commentList">
				<div class="comment-stardate">
					<span class="comment-date" v-text="comment.date"></span>
				</div>	
				<p class="comment-content" role="commentContent" :style="showHeight" v-text="comment.content"></p>	
				<div class="comment-imgs">
					<div class="comment-imgouter" @click="handleBannerClick(comment.bigImg)" v-for="mini of comment.miniImg">
						<div class="comment-imginner">
							<img class="comment-img" :src="mini" />
						</div>
					</div>
				</div>
				<div class="comment-imgnumtag" v-if="comment.tagnum > 6">
					<span class="commenttag-bg"></span>
					<span class="comment-tagnum">共<i v-text="comment.tagnum"></i>张</span>
				</div>
			</li>			
		</ul>
		<common-gallary v-if="imgs.length > 0" @close="handleGallaryClose" :imgs="imgs" v-show="showGallary"></common-gallary>
	</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default{
	name: 'CommonComment',
	props: {
		commentList: Array
	},
	data () {
		return {
			showGallary: false,
			imgs: '',
			showHeight: {
				height: '100px',
				overflow: 'hidden'
			}
		}
	},
	components: {
		CommonGallary
	},
	methods: {
		handleBannerClick (img) {
			this.imgs = img;
			this.showGallary = true
		},
		handleGallaryClose () {
			this.showGallary = false
		}		
	}
}
</script>

<style lang="stylus" scoped>
	.commentList
		background: #ffffff
		.comment-item
			padding: .1rem .2rem .3rem .2rem
			.comment-stardate
				margin-top: .1rem
				line-height: .6rem
				height: .6rem
				.comment-date
					position: relative
					float: right
					top: .16rem
					margin-left: .2rem
					line-height: .28rem
					font-size: .24rem
					vertical-align: middle
					color: #212121
			.comment-content
				word-break: break-all
				word-wrap: break-word
				line-height: .42rem
				font-size: .26rem
				color: #616161
				position: relative
				&:after
					content: '...'
					position: absolute
					bottom: -4px
					right: 0
					padding-left: 1em
					background-image: -webkit-linear-gradient(left,rgba(255,255,255,0.2),rgba(255,255,255,1) 55%)
			.comment-imgs
				margin: .2rem 0 .1rem 0
				position: relative
				zoom: 1
				overflow: hidden
				.comment-imgouter
					float: left
					width: 33.33%
					margin-bottom: .1rem
					.comment-imginner
						margin: 0 .07rem
						.comment-img
							width: 100%
							background-size: contain
			.comment-imgnumtag
				position: absolute
				bottom: .8rem
				right: 0
				.commenttag-bg
					position: absolute
					right: .07rem
					display: inline-block
					background: #000000
					opacity: .5
					height: .4rem
					width: .94rem
					border-top-left-radius: .2rem
					border-bottom-left-radius: .2rem
				.comment-tagnum
					position: absolute
					right: .07rem
					height: .4rem
					line-height: .4rem
					width: .94rem
					font-size: .24rem
					color: #ffffff
					text-align: right
					padding-right: .05rem
</style>
