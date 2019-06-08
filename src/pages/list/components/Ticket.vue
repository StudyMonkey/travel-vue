<template>
	<div class="ticketCon">
		<ul class="xm-view-list">
			<li class="sight-group" v-for="item of tourList" :key="item.id">
				<div class="item-content">
					<div class="sight-info">
						<router-link to="/product" class="sight-link" :title="item.sightName">
							<div class="sight-imgcon image-ready">
								<img class="sight-img" :src="item.sightImg" :alt="item.sightName" />
								<span class="sight-bookingflag" style="background-image: url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png)">随买随用</span>
							</div>
							<div class="sight-detail">
								<h3 class="sight-name" v-text="item.sightName"></h3>
								<div class="sight-comments">
									<span class="comments-totalnum" v-text="item.commentNum"></span>
								</div>
								<div class="sight-pricecon">
									<div class="sight-price">
										¥<em v-text="item.sightPrice"></em><span class="lowprice-text">&nbsp;起</span>
									</div>
									<div class="sight-location">
										<span class="sight-address" v-text="item.address"></span>
									</div>
								</div>
								<div class="sight-tagList">
									<span class="sight-tag xm-border sight-tag14" v-for="tag of item.tagList">
										<em>{{tag}}</em>
									</span>
								</div>
							</div>
						</router-link>
					</div>
					<div class="sight-ticket-item border-top" v-for="list of item.ticketItem">
						<router-link to="/ticket" class="linkarea">
							<h4 class="ticket-name">{{list.ticketName}}</h4>
							<span class="ticket-price">¥<em>{{list.ticketPrice}}</em></span>
						</router-link>
					</div>
				</div>
			</li>			
		</ul>
	</div>
</template>

<script>
export default{
	name: 'ListTicket',
	props: {
		tourList: Array
	}
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles"
@import "~styles/mixin"
	.sight-group
		margin-bottom: .2rem
		background: $whiteTextColor
		.sight-info
			overflow: hidden
			padding: .2rem .22rem
			.image-ready
				background: none !important
			.sight-imgcon
				position: relative
				float: left
				width: 2rem
				height: 2rem
				.sight-img
					width: 2rem
					height: 2rem
				.sight-bookingflag
					position: absolute
					left: 0
					top: 0
					width: 1.04rem
					height: .38rem
					line-height: .38rem
					background-size: 100%
					background-repeat: no-repeat
					color: $whiteTextColor
					font-size: .2rem
					text-indent: .08rem 
			.sight-detail
				position: relative
				overflow: hidden
				padding-left: .2rem
				.sight-name
					height: .44rem
					line-height: .44rem
					color: $twoOneColor
					font-size: .32rem
					ellipsis()
				.sight-comments
					margin-top: .14rem
					height: .34rem
					line-height: .34rem
					font-size: 0
					.comments-totalnum
						position: relative
						top: -.04rem
						/*margin-left: -.18rem*/
						color: $sixOneColor
						font-size: .24rem
				.sight-pricecon
					position: relative
					margin-top: .18rem
					.sight-price
						height: .36rem
						line-height: .4rem
						color: #ff8300
						font-size: .2rem
						em
							font-size: .4rem
						.lowprice-text
							color: $sixOneColor
							font-size: .24rem
							vertical-align: .02rem
					.sight-location
						position: absolute
						bottom: 0
						right: 0
						color: $sixOneColor
						font-size: 0
						white-space: nowrap
						.sight-address
							font-size: .24rem
				.sight-tagList
					margin-top: .18rem
					font-size: 0
					.sight-tag
						display: inline-block
						margin-top: .04rem
						height: .32rem
						margin-right: .08rem
						&.xm-border
							&:before
								border-color: #a5e4ec
								border-radius: .08rem						
						&:last-child
							margin-right: 0
						em
							display: inline-block
							height: .336rem
							line-height: .336rem
							font-size: .24rem
							transform: scale(.83)
					.sight-tag14
						color: #00afc7
					.sight-tag15
						background: #f0fbfd
						color: #00bcd4
		.sight-ticket-item
			position: relative
			height: .96rem
			margin-left: .2rem
			&.border-top
				&:before
					border-color: #e0e0e0
			.ticket-name
				ellipsis()
				margin-right: 1.4rem
				color: $sixOneColor
				font-size: .28rem
				height: .96rem
				line-height: .96rem
			.ticket-price
				position: absolute
				top: 0
				right: .2rem
				width: 1.2rem
				height: .96rem
				line-height: .96rem
				color: #ff8300
				font-size: .2rem
				overflow: hidden
				text-align: right
				em
					font-size: .32rem
</style>