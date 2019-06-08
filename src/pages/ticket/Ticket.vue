<template>
	<div style="background: #f5f5f5;">
		<common-header></common-header>
		<common-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></common-banner>	
		<ticket-info></ticket-info>
		<ticket-prddetail></ticket-prddetail>
		<common-shortcomment :commentList="commentList"></common-shortcomment>
		<ticket-more></ticket-more>
		<div class="whitespace"></div>
		<ticket-foot></ticket-foot>
	</div>
</template>

<script>
import CommonBanner from 'common/banner/Banner'
import CommonHeader from 'common/header/Header'
import CommonShortcomment from 'common/comment/Shortcomment'
import TicketInfo from './components/Info'
import TicketPrddetail from './components/Prddetail'
import TicketMore from './components/More'
import TicketFoot from './components/Foot'

import axios from 'axios'
export default{
	name: 'Ticket',
	data () {
		return {
			commentList: [],
			sightName: '',
			bannerImg: '',
			gallaryImgs: []			
		}
	},
	components: {
		CommonHeader,
		CommonBanner,
		TicketInfo,
		TicketPrddetail,
		CommonShortcomment,
		TicketMore,
		TicketFoot
	},
	mounted () {
		this.getTicketInfo()
		this.getCommentInfo()
	},
	methods: {
		getTicketInfo () {
			axios.get('/api/detail.json')
				.then(this.getTicketSucc)
				.catch(function(error){
					console.log(error)
				})
		},
		getCommentInfo () {
			axios.get('/api/comment.json')
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
		getTicketSucc (res) {
			res = res.data
			if ( res.ret && res.data ) {
				const data = res.data
				this.sightName = data.sightName
				this.bannerImg = data.bannerImg
				this.gallaryImgs = data.gallaryImgs	
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
.whitespace
	width: 100%
	height: 1rem
</style>