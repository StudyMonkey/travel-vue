<template>
	<div>
		<comment-header @handleIndex="handleDivShow"></comment-header>
		<div v-show="index == 0">
			<comment-view :tagList="tagList"></comment-view>
			<common-comment :commentList="commentList"></common-comment>
			<comment-foot></comment-foot>
			<comment-gotop></comment-gotop>			
		</div>
		<div v-show="index == 1">
			<comment-strategy :strategyList="strategyList"></comment-strategy>
		</div>
	</div>
</template>

<script>
import CommentHeader from './components/Header'
import CommentView from './components/View'
import CommonComment from 'common/comment/Comment'
import CommentFoot from './components/Foot'
import CommentGotop from './components/GoTop'
import CommentStrategy from './components/Strategy'
import axios from 'axios'
export default{
	name: 'comment',
	data () {
		return {
			index: 0,
			commentList: [],
			tagList: [],
			strategyList: []
		}
	},
	components: {
		CommentHeader,
		CommentView,
		CommonComment,
		CommentFoot,
		CommentGotop,
		CommentStrategy
	},
	mounted () {
		this.getCommentInfo()
		this.getStrategyInfo()
	},
	methods: {
		handleDivShow (ind) {
			this.index = ind 
			console.log(ind)
		},
		getCommentInfo () {
  			axios.get('/api/comment.json')
  				.then(this.getCommentInfoSucc)
  				.catch(function(error){
  					console.log(error)
  				})			
		},
		getStrategyInfo () {
			axios.get('/api/Strategy.json')
				.then(this.getStrategySucc)
				.catch(function(error){
					console.log(error)
				})
		},
		getCommentInfoSucc (res) {
			res = res.data
			if ( res.ret && res.data ) {
				const data = res.data
				this.commentList = data.comment
				this.tagList = data.tagBtn
			}
		},
		getStrategySucc (res) {
			res = res.data 
			if( res.ret && res.data) {
				const data = res.data
				this.strategyList = data.strategyList
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
</style>