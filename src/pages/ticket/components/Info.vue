<template>
	<div style="background: #f5f5f5;">
		<div class="xm-prdcard-con">
			<div class="xm-prdcard-title xm-ellipsis2">长沙生态动物园一票通成人票</div>
			<div class="xm-prdcard-pricecon">
				<em class="xm-prdcard-priceicon">¥</em>
				<span class="xm-prdcard-pricetext">105</span>
			</div>

			<div class="xm-prddetail-tagarea">   
				<div class="xm-prddetail-ul">
					<div class="xm-prddetail-li">
						<img class="xm-playlimit-icon" src="//img1.qunarzz.com/piao/fusion/1804/94/3537f6969acc0c02.png">14:30前随买随用
					</div>
					<div class="xm-prddetail-li">
						<img class="xm-playlimit-icon" src="//img1.qunarzz.com/piao/fusion/1804/b0/c3cf2897c74ecc02.png">自营
					</div>
					<div class="xm-prddetail-li">
						<img class="xm-playlimit-icon" src="//img1.qunarzz.com/piao/fusion/1804/68/e49cdb22eaa16802.png">条件退
					</div>
				</div>
			</div>
		</div>
		<div class="xm-commentsinfo-con">
			<router-link to="/comment" class="xm-linkarea"></router-link>
			<span class="xm-comment-icon"></span>
			<span class="xm-starlevel">
				<span class="iconfont starlevel-gain" data-score="4.0" style="width:80%"></span>
				<span class="iconfont starlevel-total"></span>
			</span>
			<span class="xm-comments-tagscore">4.0分</span>
			<span class="xm-comments-totalnum">4090条评论&nbsp;
			  <span class="iconfont xm-comments-rightarrow">F</span>
			</span>
		</div>		
	</div>
</template>

<script>
export default{
	name: 'TicketInfo'
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixin"
@import "~styles/varibles"
.xm-ellipsis2
	display: -webkit-box
	ellipsis()
.xm-prdcard-con
	position: relative
	margin-top: -.1rem
	padding: .2rem .2rem 0 .2rem
	background: $whiteTextColor
	border-radius: .1rem .1rem 0 0
	.xm-prdcard-title
		padding-bottom: .1rem
		line-height: .5rem
		font-size: .36rem
	.xm-prdcard-pricecon
		line-height: .48rem
		.xm-prdcard-priceicon
			color: $eightThrColor
			font-size: .24rem
		.xm-prdcard-pricetext
			margin-left: -.06rem
			color: $eightThrColor
			font-size: .48rem
	.xm-prddetail-tagarea
		padding-top: .04rem
		.xm-prddetail-ul
			overflow: hidden
			margin-left: -.4rem
			padding-bottom: .2rem
			color: $nineEColor
			font-size: 0
			.xm-prddetail-li
				display: inline-block
				padding: .04rem 0
				margin-left: .4rem
				margin-top: .06rem
				font-size: .24rem
				white-space: nowrap
				.xm-playlimit-icon
					width: .22rem
					max-height: .22rem
					margin-right: .04rem
					vertical-align: 0
.xm-commentsinfo-con
	position: relative
	margin-top: .2rem
	padding-top: .02rem
	background: $whiteTextColor
	line-height: .8rem
	.xm-linkarea
		position: absolute
		z-index: 2
		top: 0
		right: 0
		bottom: 0
		left: 0
		width: 100%
		height: 100%
	.xm-comment-icon
		position: relative
		top: .08rem
		display: inline-block
		width: .36rem
		height: .36rem
		background: url('//s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -1.35rem no-repeat
		margin-left: .2rem
		background-size: .4rem 3rem
	.xm-comments-tagscore
		display: inline-block
		margin-left: .1rem
		color: $sixOneColor
	.xm-comments-totalnum
		float: right
		position: relative
		display: inline-block
		top: .25rem
		line-height: .28rem
		font-size: .28rem
		margin-left: .16rem
		margin-right: .2rem
		color: $sixOneColor
</style>

