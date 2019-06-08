<template>
	<div class="wrapper">
	  <swiper :options="swiperOptions" v-if="showSwiper">
	    <swiper-slide v-for='swiper of swiperList' :key='swiper.id'>
	    	<img class="swiper-img" :src="swiper.imgUrl"/>
	    </swiper-slide>   
	    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>		
	</div>

</template>

<script>
export default{
  name: 'HomeSwiper',
  props: {
  	swiperList: Array
  },
  data () {
  	return{
  		swiperOptions: {
  			pagination: '.swiper-pagination',
  			loop: true
  		}
  	}
  },
  computed: {
  	showSwiper () {
  		return this.swiperList.length
  	}
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
	background: #FFFFFF
.wrapper
	overflow: hidden
	width: 100%
	height: 0
	padding-bottom: 26.5%
	background: #eee
	.swiper-img
		width: 100%
</style>
