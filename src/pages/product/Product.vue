<template>
	<div style="background: #f5f5f5;">
		<common-header></common-header>
		<common-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></common-banner>
		<product-baseinfo></product-baseinfo>
		<common-ticket :list="list"></common-ticket>
		<common-shortcomment :commentList="commentList"></common-shortcomment>
		<common-recommend></common-recommend>
	</div>
	
</template>

<script>
import CommonHeader from 'common/header/Header'
import CommonBanner from 'common/banner/Banner'
import ProductBaseinfo from './components/Baseinfo'
import CommonTicket from 'common/ticket/Ticket'
import CommonShortcomment from 'common/comment/Shortcomment'
import CommonRecommend from 'common/recommend/Recommend'
import axios from 'axios'
export default{
	name: 'Product',
	components: {
		CommonHeader,
		CommonBanner,
		ProductBaseinfo,
		CommonTicket,
		CommonShortcomment,
		CommonRecommend
	},
	data () {
		return {
			commentList: [],
			list: [],
			sightName: '',
			bannerImg: '',
			gallaryImgs: []
		}
	},
	mounted () {
		this.getProductInfo()
		this.getCommentInfo()
	},
	methods: {
		getCommentInfo () {
			axios('/api/comment.json')
				.then(this.getCommentSucc)
				.catch(function(error){
					console.log(error)
				})
		},
		getCommentSucc (res) {
			res = res.data
			if ( res.ret && res.data ) {
				const data = res.data
				this.commentList = data.comment.slice(0,2)
			}
		},
		getProductInfo () {
			axios.get('/api/detail.json')
				.then(this.getProductSucc)
				.catch(function(error){
					console.log(error)
				})
		},
		getProductSucc (res) {
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