<template>
	<div class="fixbooking-con flexbox">
		<div class="fixbooking-pricecon border-top">
			<span class="fixbooking-priceitem ">
				价格<em class="fixbooking-priceicon">¥</em><span class="fixbooking-price">105</span>
			</span>

		</div>
		<div class="fixbooking-btn">
			<a href="javascript:void(0);"  class="booking-link" >立即预订</a>
		</div>

		<div class="weekend-collection"></div>
	</div>	
</template>

<script>
export default{
	name: 'TicketFoot'
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles"
.fixbooking-con
	position: fixed
	z-index: 82
	bottom: 0
	left: 0
	width: 100%
	height: .88rem
	line-height: .88rem
	.fixbooking-pricecon
		float: left
		height: .88rem
		width: 56%
		background: #ffffff
		color: #ff8300
		text-indent: .2rem
		&.border-top
			&:before
				background: #e0e0e0
		.fixbooking-priceitem	
			color: $sixOneColor
			line-height: .88rem
			font-size: .28rem
			.fixbooking-priceicon
				margin-left: .1rem
				color: $eightThrColor
				font-size: .24rem
			.fixbooking-price
				margin-right: .1rem
				font-size: .4rem
				color: $eightThrColor
	.fixbooking-btn
		overflow: hidden
		width: 44%
		height: .88rem
		background: #ff9800
		font-size: .36rem
		text-align: center
		.booking-link
			display: block
			color: $whiteTextColor
.flexbox
	display: flex
</style>