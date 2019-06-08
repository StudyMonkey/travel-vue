<template>
	<div class="flexWrapper" style="overflow: hidden;padding-bottom: 0;">
		<div class="scroller">
			<div class="comment-detail">
				<div class="score">
					<span class="blue-shiyong">实用</span>
					<span class="commentTime">2015-07-09</span>
				</div>
				<div class="commentTitle">...很大的动物园，里面有好多没有见过的动物，非常的不错一般都是大人带着小孩子来的，价格方面也不算贵</div>
				<div class="detail-list">
					<div class="detail-text">
						<div class="text">
							<router-link tag="span" to="/" class="a_poi_link">长沙生态动物园</router-link>
							<p class="phase">一个很大的动物园，里面有好多没有见过的动物，非常的不错一般都是大人带着小孩子来的，价格方面也不算贵。玩得不错，动物表演还好吧，熊猫萌爆！！！可能去的那天人不多，车行区司机比较耐心，没有一味的快快的开。只是九十的团购不划算，现场买票也只多十块（没有海豚，海豚馆没建好，所以全票不是一百三），看宣传牌还送游乐场的券，总之要是团九十的票不如现场买。</p>
						</div>
						<div class="imgbox">
							<img src="https://img1.qunarzz.com/travel/d2/1507/a4/cb789773582ab3.jpg_r_400x502x95_428d97f1.jpg">
						</div>
						<div class="imgbox">
							<img src="https://img1.qunarzz.com/travel/d5/1507/fc/d034b38f435f9a.jpg_r_400x502x95_d95c9444.jpg">
						</div>
						<div class="imgbox">
							<img src="https://img1.qunarzz.com/travel/d8/1507/63/ad3e169c2213a4.jpg_r_400x502x95_85ee6239.jpg">
						</div>
						<div class="imgbox">
							<img src="https://img1.qunarzz.com/travel/d9/1507/5c/540bcaae8e58b5.jpg_r_400x502x95_2f56050a.jpg">
						</div>						
					</div>
				</div>
				<div class="commentUser">
					<span class="userInfo">ttxs987</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name: 'StrategContent'
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles"
.flexWrapper
	flex: 1
	position: relative
	.scroller
		transform: translate(0px,0px) translateZ(0px)
		transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
		transition-duration: 0ms;
		.comment-detail
			padding: .2rem .4rem 0 .4rem
			background-color: $whiteTextColor
			.a_poi_link
				color: #00bcd4
				text-decoration: underline
			.blue-shiyong
				background-color: #4dd0e1
				padding: .02rem .1rem
				color: $whiteTextColor
				border-radius: 2px
				font-size: .2rem
			.commentTime
				color: $nineEColor
				float: right
				font-size: .24rem
			.commentTitle
				color: $twoOneColor
				font-size: .32rem
				line-height: .48rem
				font-weight: bold
				width: 100%
				display: inline-block
			.detail-list
				word-wrap: break-word
				.text
					text-align: justify
				.imgbox
					padding: .1rem 0
					img
						width: 100%
			.commentUser
				padding-bottom: .2rem
				.userInfo
					font-size: .24rem
					line-height: .45rem
					color: $nineEColor
</style>