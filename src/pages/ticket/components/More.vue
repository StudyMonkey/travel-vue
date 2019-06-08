<template>
	<div class="prddetail-group" id="moreprice-con">
		<h3 class="prddetail-title border-bottom">更多报价</h3>
		<div class="productlist-content">
			<div class="productlist-item">
				<a href="//touch.piao.qunar.com/touch/productdetail.htm?productId=1336050359" class="linkarea" data-click="t_more_price">
					<div class="productprices-info border-bottom">
						<h3 class="productprices-name ellipsis2">长沙生态动物园-成人票</h3>
							<ul class="ticket-light">
								<span class="ticket-desctag">
									<img class="ticket-tagicon" src="https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png">可订明日
								</span>
							</ul>
							<ul class="ticket-labelcon">
								<span class="ticket-label border label14">条件退</span>
							</ul>
						<div class="productprices-supplier ellipsis">驴妈妈旅游网</div>
						<div class="productprices-disandprice">
							<span class="product-price"><span class="price">¥<em class="price-num">105</em></span></span>
							<span class="iconfont product-arrow">F</span>
							<br>
						</div>
					</div>
				</a>
			</div>
			<div class="productlist-item">
				<a href="//touch.piao.qunar.com/touch/productdetail.htm?productId=1516685275" class="linkarea" data-click="t_more_price">
					<div class="productprices-info border-bottom">
						<h3 class="productprices-name ellipsis2">生态动物园一票通成人票【免预约，当天可订】</h3>
							<ul class="ticket-light">
								<span class="ticket-desctag">
									<img class="ticket-tagicon" src="https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png">可订明日
								</span>
							</ul>
							<ul class="ticket-labelcon">
								<span class="ticket-label border label14">随时退</span>
							</ul>
						<div class="productprices-supplier ellipsis">飞燕票务</div>
						<div class="productprices-disandprice">
							<span class="product-price"><span class="price">¥<em class="price-num">105</em></span></span>
							<span class="iconfont product-arrow">F</span>
							<br>
						</div>
					</div>
				</a>
			</div>
			<div class="productlist-item">
				<a href="//touch.piao.qunar.com/touch/productdetail.htm?productId=2046800934" class="linkarea" data-click="t_more_price">
					<div class="productprices-info">
						<h3 class="productprices-name ellipsis2">长沙生态动物园门票一票通</h3>
							<ul class="ticket-light">
								<span class="ticket-desctag">
									<img class="ticket-tagicon" src="https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png">可订明日
								</span>
							</ul>
							<ul class="ticket-labelcon">
								<span class="ticket-label border label14">随时退</span>
							</ul>
						<div class="productprices-supplier ellipsis">湖南中联国旅</div>
						<div class="productprices-disandprice">
							<span class="product-price"><span class="price">¥<em class="price-num">105</em></span></span>
							<span class="iconfont product-arrow">F</span>
							<br>
						</div>
					</div>
				</a>
			</div>
		</div>
		<div class="more border-top">
		<router-link to="/price" class="linkarea"></router-link>
		查看全部<span class="iconfont prddetail-arrow">F</span>
		</div>
	</div>
</template>

<script>
export default{
	name: 'TicketMore'
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles"
@import "~styles/mixin"
.prddetail-group
	margin-top: .2rem
	padding: .01rem 0
	background-color: $whiteTextColor
	.prddetail-title
		margin-left: .2rem
		padding: .2rem 0
		color: $sixOneColor
		font-size: .32rem
		line-height: .44rem	
	.productlist-content
		margin: 0 .2rem
	.productlist-item
		position: relative
		overflow: hidden
	.linkarea
		display: block
		.productprices-info
			overflow: hidden
			padding: .24rem 1.6rem .2rem 0
			&.border-bottom
				&:before
					border-color: #e0e0e0
			.productprices-name
				color: $twoOneColor
				font-size: .28rem
				line-height: .4rem
.ellipsis2
	display: -webkit-box
	overflow: hidden
	text-overflow: ellipsis
	-webkit-line-clamp: 2
	-webkit-box-orient: vertical
.ticket-desctag
	display: inline-block
	height: .32rem
	color: $sixOneColor
	font-size: .24rem
	line-height: .32rem
	white-space: nowrap
.ticket-desctag .ticket-tagicon, .ticket-label .ticket-tagicon
	display: inline-block
	width: .2rem
	max-height: .2rem
	margin-right: .04rem
	vertical-align: 0
.ticket-labelcon
	font-size: 0
	.ticket-label
		position: relative
		display: inline-block
		margin-top: .08rem
		padding: 0 .04rem
		height: .32rem
		line-height: .32rem
		color: #00afc7
		font-size: .2rem
		white-space: nowrap
		&:before
			position: absolute
			content: ""
			overflow: hidden
			width: 200%
			height: 200%
			transform: scale(.5)
			box-sizing: border-box
			top: 0
			left: 0
			border: 1px solid #e0e0e0
			transform-origin: 0 0
.productprices-supplier
	margin-top: .1rem
	color: $sixOneColor
	font-size: .24rem
	line-height: .34rem
.ellipsis
	width: 100%
	ellipsis()
.productprices-disandprice
	position: absolute
	top: 50%
	right: 0
	color: $nineEColor
	font-size: .22rem
	line-height: .3rem
	text-align: right
	transform: translate(0,-50%)
	.product-price
		text-align: right
		.price
			padding-right: .3rem
			color: #ff8300
			font-size: .18rem
			vertical-align: -.02rem
		.price-num
			margin: 0 .04rem 0 .06rem
			font-size: .4rem
.price
	font: .24rem "Microsoft yahei","Hiragino sans gb",Arial,sans-serif
.price-num
	font: .28rem Tahoma,Helvetica,sans-serif
.product-arrow
	position: absolute
	top: 50%
	right: .06rem
	transform: translate(0,-50%)
.more
	position: relative
	text-align: center
	color: $nineEColor
	padding: .28rem
	.linkarea
		position: absolute
		z-index: 2
		top: 0
		right: 0
		bottom: 0
		left: 0
		width: 100%
		height: 100%
	.prddetail-arrow
		color: $nineEColor
		font-size: .2rem
		margin-left: .05rem
</style>
