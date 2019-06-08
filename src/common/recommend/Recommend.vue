<template>
	<div class="recommend" style="background: #FFFFFF;margin-top: .2rem;">
		<div class="recommend-title border-bottom">看了该景点的人还看了</div>
		<div class="recommend-list">
			<ul>
				<router-link :to="recom.link" v-for="recom of recommend" :key="recom.id">
					<li>
						<img class="recommend-img" :src="recom.imgUrl"/>
						<div class="recommend-info border-bottom">
							<div class="recommend-sight" v-text="recom.sight"></div>
							<div class="recommend-price">¥<em class="price-num" v-text="recom.price"></em><span class="price-flag">起</span></div>
							<div class="recommend-comment">
<!--								<span class="mpf-starlevel">
									<i class="iconfont mpf-starlevel-gain" data-score="4.44" style="width:98.00000000000001%"></i>
									<i class="iconfont mpf-starlevel-total"></i>
								</span>-->
								<span class="recommend-commentnum"><i v-text="recom.recommendNum"></i>条评论</span>
							</div>	
							<div class="recommend-position">
								<span class="recommend-subposition border-left" v-text="recom.position"></span>
							</div>
						</div>
					</li>
				</router-link>
			</ul>			
		</div>

	</div>
</template>

<script>
export default{
	name: 'DetailRecommend',
	data () {
		return {
			recommend: [{
				id: '001',
				link: '/detail/001',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1802/f6/f699d3b082edde9fa3.img.png_228x168_ab2f0c6a.png',
				sight: '三只熊冰雪王国',
				price: '30',
				recommendNum: '476',
				position: '长沙·长沙县'
			},{
				id: '002',
				link: '/detail/002',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/91/917f8ff98ab0bf6fa3.img.jpg_228x168_10567f5a.jpg',
				sight: '湖南省森林植物园',
				price: '9',
				recommendNum: '1691',
				position: '长沙·雨花区'				
			},{
				id: '003',
				link: '/detail/003',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1408/18/af4e8d5427a982540ec265b0daab2971.jpg_228x168_d7fd9c93.jpg',
				sight: '长沙摩天轮',
				price: '65',
				recommendNum: '1314',
				position: '长沙·天心区'				
			},{
				id: '004',
				link: '/detail/004',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/57/579b6c97900745db.water.jpg_228x168_9d8a403e.jpg',
				sight: '橘子洲',
				price: '30',
				recommendNum: '2471',
				position: '长沙·岳麓区'				
			},{
				id: '005',
				link: '/detail/005',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1412/36/0b5ddfc9e04db2b870a84986fa7444a0.water.jpg_228x168_46d7ee46.jpg',
				sight: '长沙世界之窗',
				price: '128',
				recommendNum: '6275',
				position: '长沙·开福区'				
			}]
		}
	}
	
}
</script>

<style lang="stylus" scoped>
	.recommend-title
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
	.recommend-list
		.recommend-img
		    margin: .2rem .2rem 0 .2rem
		    width: 1.62rem
		    height: 1.62rem
		    float: left
		.recommend-info    
	    	position: relative
		    padding-top: .2rem
		    margin-left: 2.02rem
		    height: 1.8rem
		    .recommend-sight
			    position: absolute
			    top: .2rem
			    left: 0
			    right: 1.5rem
			    height: .4rem
			    line-height: .4rem
			    font-size: .3rem
			    color: #212121
			    overflow: hidden
			    white-space: nowrap
			    text-overflow: ellipsis	
			.recommend-price
			    position: absolute
			    right: .2rem
			    top: .2rem
			    line-height: .4rem
			    vertical-align: baseline
			    color: #ff9800
				.price-num
					font-size: .36rem
				.price-flag
					color: #9e9e9e
			.recommend-position
				position: absolute
				bottom: .24rem
				left: 0
				color: #9e9e9e
				font-size: .24rem
				.recommend-subposition
					padding: 0 .04rem 0 .1rem					
			.recommend-comment
			    position: absolute
			    top: 1rem
			    left: 0	
			    .recommend-commentnum
			    	vertical-align: middle
			    	color: #9e9e9e
			    	margin-left: .1rem
			    	line-height: .28rem
					font-size: .24rem
	
</style>