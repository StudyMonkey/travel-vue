<template>
    <div class="header">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
                              输入城市/景点/游玩主题
      </div>
      <router-link to="/city">
	    <div class="header-right">
	        {{this.city}}
	    	<span class="iconfont arrow-icon">&#xe64a;</span>
	    </div>      	
      </router-link>

    </div>
</template>

<script>
import { mapState } from 'vuex'
export default{
  name: 'HomeHeader',
  computed: {
  	...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
  .header
    height: $headerHeight
    line-height: $headerHeight
    display: flex
    background: $bgColor
    color: $whiteTextColor
    .header-left
      width: .5rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #ffffff
      border-radius: .1rem
      color: $darkTextColor
      line-height: .64rem
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: $whiteTextColor
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
