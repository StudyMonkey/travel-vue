<template>
	<div class="xm-baseinfo">
		<div class="xm-flexbox xm-flex-card">
			<div class="xm-flexbox-item xm-flexlink-con">
				<router-link to="/" class="xm-card-link"></router-link>
				<div>
					<span class="xm-commentcard-score">4.7</span>
					<span class="xm-commentcard-text">分</span>
					<span class="xm-commentcard-desc">很棒</span>
				</div>
				<div>
					<span class="xm-totalcommentnum">1693条评论</span>
					<span class="xm-totalcommentnum">6条攻略</span>
					<span class="iconfont xm-rightarrow"></span>
				</div>
			</div>
			<div class="xm-flexbox-item xm-flexlink-con">
				<router-link to="/" class="xm-card-link"></router-link>
				<div>
					<span class="xm-sightcard-title">景点简介</span>
				</div>
				<div>
					<span class="xm-sightcard-text">开放时间、贴士</span>
					<span class="iconfont xm-rightarrow"></span>
				</div>
			</div>			
		</div>
		<div class="xm-baseinfo-address border-top">
			<p class="xm-baseinfo-address-text">
				<span class="iconfont xm-baseinfo-address-icon">定位</span>
				湖南省长沙市雨花区植物园路111号
				<span class="iconfont xm-baseinfo-address-arrow">向右箭头</span>
			</p>
		</div>
	</div>
</template>

<script>
export default{
	name: 'ProductBaseinfo'
}
</script>

<style lang="stylus" scoped>
	.xm-baseinfo
		position: relative
		top: -.1rem
		padding: .1rem .2rem 0 .2rem
		margin-bottom: .1rem
		background: #ffffff
		border-radius: .1rem .1rem 0 0
		.xm-flexbox
			display: flex
			width: 100%
			.xm-flexbox-item
				flex: 1
				.xm-card-link
					position: absolute
					left: 0
					top: 0
					width: 100%
					height: 100%
				.xm-commentcard-score
					font-size: .44rem
					color: #ff8300
					line-height: .44rem
				.xm-commentcard-text
					font-size: .28rem
					color: #ff8300
					line-height: .48rem
				.xm-commentcard-desc
					font-size: .28rem
					color: #ff8300
					line-height: .48rem
					margin-left: .2rem
				.xm-totalcommentnum
					font-size: .24rem
					color: #9e9e9e
					line-height: .32rem
					margin-right: .2rem
				.xm-rightarrow
					position: absolute
					top: .3rem
					right: .2rem
					color: #9e9e9e
					font-size: .24rem
				.xm-sightcard-title
					font-size: .28rem
					color: #212121
					line-height: .48rem
					padding-left: .3rem
				.xm-sightcard-text
					color: #9e9e9e
					font-size: .24rem
					padding-left: .3rem
		.xm-flex-card
			padding-top: .1rem
			padding-bottom: .2rem
		.xm-baseinfo-address
			display: block
			position: relative
			padding: .2rem 0
			line-height: .36rem
			color: #212121
			&:before
				border-top: 1px solid #f0f0f0
			.xm-baseinfo-address-icon
				display: block
				height: 100%
				line-height: 100%
				position: absolute
				left: 0
				top: .16rem
				margin-top: -.16rem
				margin-right: .2rem
				color: #9e9e9e
				font-size: .36rem
			.xm-baseinfo-address-text
				padding-right: .56rem
				position: relative
				padding-left: .56rem
			.xm-baseinfo-address-arrow
				position: absolute
				right: 0
				top: 50%
				margin-top: -.14rem
				color: #9e9e9e
				font-size: .24rem
</style>
