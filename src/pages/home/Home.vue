<template>
    <div>
      <home-header></home-header>
      <home-swiper :swiperList='swiperList'></home-swiper>
      <home-icons :iconList='iconList'></home-icons>
      <home-recommend :recommendList='recommendList'></home-recommend>
      <home-weekend :weekendList='weekendList'></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios' // 放在这里发送ajax请求，就只有一个请求，如果放在组件里面则会发送多个请求
import { mapState } from 'vuex'
export default{
    name: 'Home',
    components: {
    	HomeHeader,
    	HomeSwiper,
    	HomeIcons,
    	HomeRecommend,
    	HomeWeekend
    },
    data () {
    	return {
    		lastCity: '',
    		iconList: [],
    		swiperList: [],
    		recommendList: [],
    		weekendList: []
    	}
    },
    computed: {
    	...mapState(['city'])
    },
    methods: {
  		getHomeInfo () {
  			axios.get('/api/index.json?city='+ this.city)
  				.then(this.getHomeInfoSucc)
  				.catch(function(error){
  					console.log(error)
  				})

    	},
	    getHomeInfoSucc (res) {
	    	res = res.data;
	    	if( res.ret && res.data ) {
	    		const data = res.data;
	    		this.iconList = data.iconList;
	    		this.swiperList = data.swiperList;
	    		this.recommendList = data.recommendList;
	    		this.weekendList = data.weekendList
	    	}
	  	}
	},
	mounted () { // 页面挂载才会调用，重复不会调用
		this.lastCity = this.city
		this.getHomeInfo()
	},
	activated () { // 页面渲染就会调用，页面路由跳转会重复调用
		if ( this.lastCity !== this.city ) {
			this.lastCity = this.city
			this.getHomeInfo()
		}
	}
}
</script>

<style lang="stylus" scoped>
</style>
