<template>
	<div style="background: #f5f5f5;">
		<common-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></common-banner>
		<common-header></common-header>
		<common-ticket :list="list"></common-ticket>
		<common-shortcomment :commentList="commentList"></common-shortcomment>
		<common-recommend></common-recommend>		
	</div>
</template>

<script>
import CommonBanner from 'common/banner/Banner'
import CommonHeader from 'common/header/Header'
import CommonTicket from 'common/ticket/Ticket'
import CommonShortcomment from 'common/comment/Shortcomment'
import CommonRecommend from 'common/recommend/Recommend'
import axios from 'axios'
export default {
	name: 'Detail',
	components: {
		CommonBanner,
		CommonHeader,
		CommonTicket,
		CommonShortcomment,
		CommonRecommend
	},
	data () {
		return{
			commentList: [],
			list: [],
			sightName: '',
			bannerImg: '',
			gallaryImgs: []
		}
	},
	mounted () {
		this.getDetailInfo()
	},	
	methods: {
		getDetailInfo () {
  			axios.get('/api/comment.json')
  				.then(this.getDetailCommentInfoSucc)
  				.catch(function(error){
  					console.log(error)
  				})
  			axios.get('/api/detail.json?id='+ this.$route.params.id)
  				.then(this.getDetailHeaderInfoSucc)
  				.catch(function(error){
  					console.log(error)
  				})
		},
		getDetailCommentInfoSucc (res) {
			res = res.data
			if ( res.ret && res.data ) {
				const data = res.data
				this.commentList = data.comment.slice(0,2)
			}
		},
		getDetailHeaderInfoSucc (res) {
			res = res.data
			if ( res.ret && res.data ) {
				const data = res.data
				this.list = data.categoryList
				this.sightName = data.sightName
				this.bannerImg = data.bannerImg
				this.gallaryImgs = data.gallaryImgs
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
</style>