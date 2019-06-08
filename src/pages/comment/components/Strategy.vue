<template>
	<div class="gonglve-wrapper">
		<ul class="gonglve-list">
			<li class="gonglve-item" v-for="(item,index) of strategyList" :key="index">
				<div class="gonglue-sightimgcon">
					<router-link to="/strateg" class="gonglve-link"></router-link>
					<img :src="item.bigImg" alt="" class="gonglve-sightimg" />
					<div class="head-icon">
						<img :src="item.icon" alt="" class="head-icon-img" />
					</div>
					<div class="imgswipeicon">
						<span class="iconfont imgswipeicon-icon"></span>
						<em class="imgswipeicon-num" v-text="item.swipeNum"></em>
					</div>
				</div>
				<div class="gonglve-infocon">
					<div class="comment-usercon">
						<span class="gonglue-username" v-text="item.username"></span>
						<span class="gonglve-time" v-text="item.time"></span>
					</div>
					<div class="comment-con">
						<div class="commentContent" :style=" item.flag ? showHeight : hideHeight" v-text="item.commentCon"></div>
						<div class="comment-descmore" @click="handleArrowClick(item)">
							<span class="iconfont">向下箭头</span>
						</div>						
					</div>
				</div>
			</li>			
		</ul>
	</div>
</template>

<script>
export default {
	name: 'CommentStrategy',
	props: {
		strategyList: Array
	},
	data () {
		return {
			hideHeight: {
				height: '100px',
				overflow: 'hidden'
			},
			showHeight: {
				height: 'auto',
				overflow: 'auto'
			}
		}
	},
	methods: {
		handleArrowClick (item) {
			this.$set(item,'flag',!item.flag)
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles'
.gonglve-wrapper
	padding: .88rem 0 0 0
	color: $sixOneColor
	font-size: .28rem
	line-height: .4rem
	.gonglve-item
		position: relative
		background-color: $whiteTextColor
		margin-bottom: .2rem
		.gonglue-sightimgcon
			position: relative
			.gonglve-link
				position: absolute
				left: 0
				top: 0
				z-index: 2
				width: 100%
				height: 100%
			.head-icon
				position: absolute
				left: .2rem
				bottom: -0.6rem
				background: $whiteTextColor
				width: 1.2rem
				height: 1.2rem
				border-radius: .62rem
				padding: .04rem
				.head-icon-img
					width: 1.2rem
					height: 1.2rem
					border-radius: .6rem
			.imgswipeicon
				position: absolute
				bottom: .2rem
				right: .2rem
				width: 1.2rem
				height: .4rem
				background: rgba(0,0,0,.5)
				border-radius: .2rem
				font-size: .24rem
				color: $whiteTextColor
				line-height: .4rem
				text-align: center
				.imgswipeicon-icon
					position: relative
					top: .02rem
				.imgswipeicon-num
					margin-left: .1rem
		.gonglve-infocon
			padding: .2rem .3rem 0 .3rem
			color: $sixOneColor
			font-size: .28rem
			overflow: hidden
			.comment-usercon
				padding-left: 1.2rem
				.gonglue-username
					font-size: .24rem
					color: $sixOneColor
					margin-right: .1rem
				.gonglve-time
					position: absolute
					right: .4rem
					color: #9e9e9e
			.comment-con
				margin-top: .2rem
				line-height: .4rem
				.commentContent
					margin-bottom: .3rem
					position: relative
					&:after
						content: "..."
						position: absolute
						bottom: 0
						right: 0
						padding-left: 1em
						background-image: -webkit-linear-gradient(left,rgba(255,255,255,.2),rgba(255,255,255,1) 55%)
				.comment-descmore
					display: block
					height: .2rem
					color: #9e9e9e
					line-height: .2rem
					text-align: center
					padding: .1rem 0					
</style>