<template>
	<div class="comment-view">
		<div class="comment-view-head">
			<div class="comment-view-border">
				<div class="comment-total border-bottom">
					综合评分
					<span class="sight-score">4.9</span>
					<span class="total-score">/5</span>
					<span class="total-score-text">分</span>
				</div>
			</div>
			<ul class="tagbar" :style="showHeight">
				<li 
					class="tag" 
					:class="ind == index ? 'tag-actived' : '' " 
					v-for="(tag,index) of tagList" 
					v-text="tag" :key="index"
					@click="changeTag(index)"
					>
				</li>
			</ul>
			<div class="comment-descmore" @click="showMoreTag">
				<span class="iconfont">向下箭头</span>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name: 'CommentView',
	props: {
		tagList: Array
	},
	data () {
		return {
			showHeight: {
				height: '70px',
				overflow: 'hidden'
			},
			ind: 0
		}
	},
	methods: {
		showMoreTag () {
			if ( this.showHeight.height == '70px' ) {
				this.showHeight = { height: 'auto', overflow: 'auto'}
			}else{
				this.showHeight = { height: '70px', overflow: 'hidden'}
			}
		},
		changeTag (index) {
			this.ind = index
		}
	}
}
</script>

<style lang="stylus" scoped>
.comment-view
	padding-top: .88rem
	.comment-view-head
		padding: .18rem 0
		background: #ffffff
		overflow: hidden
		.comment-total
			padding-left: .3rem
			padding-bottom: .16rem
			margin-bottom: .32rem
			color: #313131
			height: .6rem
			line-height: .6rem
			.sight-score
				color: #ff8300
			.total-score
				color: #9e9e9e
			.total-score-text
				position: relative
				top: -.01rem
				left: -.04rem
				font-size: .24rem
				color: #9e9e9e
		.tagbar
			padding: 0 .3rem
			margin-left: -.05rem
			zoom: 1
			&:after
				content: ""
				clear: both
				display: block
				overflow: hidden
			.tag
				float: left
				font-size: .24rem
				padding: .05rem .12rem
				line-height: .4rem
				border: .02rem solid #e0e0e0
				margin: 0 .08rem .16rem
				background: #ffffff
				border-radius: .08rem
				color: #616161
				&.tag-actived
					background-image: linear-gradient(135deg,#0fdfff 0,#00cbe6 100%)
					color: #ffffff
					border: 0
					padding: .07rem .14rem 
		.comment-descmore
			display: block
			height: .2rem
			color: #9e9e9e
			line-height: .2rem
			text-align: center
			padding: .1rem 0
</style>