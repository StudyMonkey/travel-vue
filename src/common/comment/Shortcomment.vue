<template>
	<div class="comment">
		<div class="comment-title">用户评论</div>
		<common-comment :commentList="commentList" v-if="commentList"></common-comment>
		<router-link to="/comment">
			<div class="more-refresh border-top">
				查看全部评论
				<span class="iconfont">></span>
			</div>
		</router-link>
	</div>
</template>

<script>
import CommonComment from 'common/comment/Comment'
export default{
	name: 'DetailComment',
	props: {
		commentList: Array
	},
	components: {
		CommonComment
	}
}
</script>

<style lang="stylus" scoped>
	.comment-title
	    padding: 0 .2rem
	    height: .88rem
	    background: #fff
	    color: #333
	    font-size: .3rem
	    line-height: .88rem
	    text-indent: .2rem
	    position: relative
	    &:after
	    	content: ""
		    position: absolute
		    top: .33rem
		    left: .2rem
		    width: .06rem
		    height: .25rem
		    background: #1ba9ba
		    border-radius: .04rem
	.more-refresh
		position: relative
		margin-top: -.02rem
		height: .8rem
		line-height: .8rem
		background: #ffffff
		color: #616161
		text-align: center
		z-index: 2
		.iconfont
			margin-left: .1rem
			color: #616161
			font-size: .2rem
</style>
