<template>
	<div class="xm-page">
		<list-header></list-header>
		<div class="main">
			<list-filter></list-filter>
			<list-ticket :tourList="tourList"></list-ticket>
		</div>
	</div>
</template>

<script>
import ListHeader from './components/Header'
import ListFilter from './components/Filter'
import ListTicket from './components/Ticket'
import axios from 'axios'
export default{
	name: 'List',
	components: {
		ListHeader,
		ListFilter,
		ListTicket
	},
	data () {
		return {
			tourList: []
		}
	},
	methods: {
		getListInfo () {
			axios.get('/api/list.json')
				.then(this.getListSucc)
				.catch(function(error){
					console.log(error)
				})
		},
		getListSucc (res) {
			res = res.data
			if( res.ret && res.data ) {
				const data = res.data
				this.tourList = data.tourList
			}
		}
	},
	mounted () {
		this.getListInfo()
	}
}
</script>

<style lang="stylus" scoped>
.xm-page
	position: absolute
	top: 0
	left: 0
	width: 100%
	min-height: 100%
	background-color: #f5f5f5
</style>