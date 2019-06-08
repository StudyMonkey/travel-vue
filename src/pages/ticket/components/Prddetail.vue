<template>
	<div>
		<div class="prddetail-group">
			<h3 class="prddetail-title border-bottom">购票须知</h3>
			<div class="ticketcontent">
					<div class="ticketcontent-item">
						<p class="ticketcontent-title">预订说明</p>
							<div class="ticketcontent-line">
								<div class="ticketcontent-keyword">预订时间：</div>
								<div class="ticketcontent-con">
									<div class="ellipsis">
										<span class="ticketcontent-light">14:30前随买随用</span>
									</div>
									<p class="ticketcontent-desc">需要在游玩当天的14:30前预订</p>
								</div>
							</div>
							<div class="ticketcontent-line">
								<div class="ticketcontent-keyword">有 效 期：</div>
								<div class="ticketcontent-con">
									<p class="ticketcontent-desc">游玩日期当天内的09:00~14:30有效</p>
								</div>
							</div>
							<div class="ticketcontent-line">
								<div class="ticketcontent-keyword">限购政策：</div>
								<div class="ticketcontent-con">
									<p class="ticketcontent-desc">每笔订单最多购买10份</p>
								</div>
							</div>
					</div>

					<div class="ticketcontent-item">
						<p class="ticketcontent-title">入园须知</p>
							<div class="ticketcontent-line">
								<div class="ticketcontent-keyword">入园方式：</div>
								<div class="ticketcontent-con">
									<div class="ticketcontent-lightcon ellipsis">
										<span class="ticketcontent-light">需提前换票入园</span>
									</div>
								</div>
							</div>
									<p class="ticketcontent-sepline">
										<span class="ticketcontent-linetag"><img class="ticketcontent-innericon" src="//img1.qunarzz.com/piao/fusion/1703/4f/60b1629ae5d22702.png"></span>凭商家确认短信、手机号、姓名到景区门口左手边团队接待中心（网络兑票处)进行换票
									</p>
									<p class="ticketcontent-sepline">
										<span class="ticketcontent-linetag"><img class="ticketcontent-innericon" src="//img1.qunarzz.com/piao/fusion/1703/e2/8f4c1d0b353c9402.png"></span>在检票处凭票入园
									</p>

							<p class="ticketcontent-line"><span class="ticketcontent-keyword">商家短信：</span></p>
							<p class="ticketcontent-desc">商家确认短信会在下单成功后1分钟内发送</p>

							<p class="ticketcontent-line"><span class="ticketcontent-keyword">景区开放时间：</span></p>
							<p class="ticketcontent-desc">周六～周日：08:45～17:30开放，17:30停止入园；<br>周一～周五：09:00～16:45开放，16:30停止入园；</p>
						


					</div>


					<div class="ticketcontent-item">
						<p class="ticketcontent-title">退款说明</p>
							<div class="ticketcontent-line">
								<div class="ticketcontent-keyword">退款规则：</div>
								<div class="ticketcontent-con">
									<div class="ellipsis">
										<span class="ticketcontent-light">条件退</span>
									</div>
									<p class="ticketcontent-desc">使用日期截止后30天00:00前可申请退款<br></p>
								</div>
							</div>
							<div class="ticketcontent-line">
								<div class="ticketcontent-keyword">极速处理：</div>
								<div class="ticketcontent-con">
									<p class="ticketcontent-desc">去哪儿网承诺，提交申请后一个工作日内完成退款申请的审核</p>
								</div>
							</div>
					</div>

					<div class="ticketcontent-item">
						<p class="ticketcontent-title">费用说明</p>
						<p class="ticketcontent-line" role="feeDesc">长沙生态动物园成人票1张（长沙生态动物园步行区票+车行区票+大象行为驯化展示票+森林剧场票+鸟类表演票+萌宠乐园票（成人票）</p>
					</div>

						<div class="ticketcontent-item" style="display:none;" role="usingDescArea">
							<p class="ticketcontent-title">使用说明</p>
							<p class="ticketcontent-line">温馨提示：仅婴儿推车和手扶轮椅可入园，其他代步工具一律不可携带入园。</p>
						</div>
			   
				<div class="ticketcontent-more" role="useDescMoreBtn" style="display: block;">
					<div role="moreShaddow" class="ticketcontent-shadow"></div>
					<span role="moreText">更多购票须知</span><span class="iconfont ticketcontent-arrow" role="useDescMoreArrow">E</span>
				</div>
			</div>
		</div>	
		<div class="prddetail-group">
			<h3 class="prddetail-title">景区信息</h3>
			<div class="prddetail-content border-top">
				<div class="sightlist">
					<span class="sightlist-item border-left">
						<router-link to="/product" class="sightlist-link">
						<span class="iconfont sightlist-temple"></span>
						长沙生态动物园(4A)</router-link></span>
				</div>
			</div>
		</div>
		<div class="prddetail-group" style="position:relative">
			<h3 class="prddetail-title">供应商：华东兴兴自营店</h3>
			<div class="prddetail-content border-top">
				<div class="sullier" :class="supplyShow ? 'ellipsis2' : '' ">
					消费者成功预订门票并按产品规则使用，出游当日无法按照原订单入园，联系供应商（或去哪儿网）后10分钟未解决，消费者可在景区购买门市价入园并保留票根，去哪儿网将双倍赔付差价。
				</div>
			</div>

			<div class="supplier-more" @click="showSupply">
				<div class="supplier-shadow" v-show="supplyShow"></div>
				<span><span class="iconfont supplier-arrow">E</span>
			</span></div>

		</div>
		<div class="risktip-con" :class="riskShow ? 'risktip-con-fold' : ''">
			<div class="risktip-titlecon" @click="showRisk">
				温馨提示<span class="risktip-arrowright mpg-iconfont">F</span>
			</div>
			<div class="risktip-content">
			   1.去哪儿网提醒您注意人身安全，参加有一定危险性的室内或户外活动（如跳伞、潜水、滑雪等）前，请务必仔细阅读<a target="_blank" href="https://yun.qunar.com/uploads2/notice/20180801/HighRiskProjectWarning.pdf " class="risklink" role="riskLink">《风险提示》</a>。<br>2.为普及旅游安全知识及旅游文明公约，使您的旅程顺利圆满完成，特制定<a target="_blank" href="https://yun.qunar.com/uploads2/notice/20180711/travelnotes.pdf " class="risklink" role="riskLink">《去哪儿网旅游安全手册》</a>，请您认真阅读并切实遵守。
			</div>
		</div>		
	</div>
</template>

<script>
export default{
	name: 'TicketPrddetail',
	data () {
		return {
			riskShow: true,
			supplyShow: true
		}
	},
	methods: {
		showRisk () {
			this.riskShow = !this.riskShow
		},
		showSupply () {
			this.supplyShow = !this.supplyShow
		}
	}
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles"
.ellipsis2
	display: -webkit-box
	overflow: hidden
	text-overflow: ellipsis
	-webkit-line-clamp: 2
	-webkit-box-orient: vertical
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
	.ticketcontent
		position: relative
		padding: 0 .38rem .3rem .38rem
		.ticketcontent-item
			padding-bottom: .2rem
			.ticketcontent-title
				position: relative
				margin-top: .3rem
				height: .48rem
				line-height: .48rem
				color: $twoOneColor
				font-size: .34rem
				&:before
					content: ""
					position: absolute
					top: 50%
					left: -.18rem
					width: .06rem
					height: .32rem
					background: #00bcd4
					border-radius: .06rem
					transform: translateY(-.16rem)
			.ticketcontent-line,.ticketcontent-sepline
				overflow: hidden
				margin-top: .2rem
				color: $sixOneColor
				font-size: .28rem
				line-height: .4rem
				word-break: break-all
				word-wrap: break-word
				.ticketcontent-keyword
					float: left
					width: 1.4rem
					color: $twoOneColor
					text-align: justify
				.ticketcontent-con
					overflow: hidden
					.ticketcontent-light
						display: inline-block
						height: .38rem
						padding: 0 .1rem
						color: $whiteTextColor
						line-height: .38rem
						border-radius: .02rem
						background-image: linear-gradient(130deg,#ffab1e 37%,#ff8c12 100%)
					.ticketcontent-desc
						color: $sixOneColor
						font-size: .28rem
						line-height: .4rem
						word-break: break-all
						word-wrap: break-word
						&:not(:first-child)
							margin-top: .08rem
			.ticketcontent-sepline
				position: relative
				padding-left: .4rem
				.ticketcontent-linetag
					position: absolute
					left: 0
					top: 0
					width: .4rem
					height: .4rem
					text-align: left
					.ticketcontent-innericon
						width: .26rem
						height: .26rem
						vertical-align: top
						margin-top: .06rem
		.ticketcontent-more
			display: block
			padding-top: .3rem
			text-align: center
			border-top: 0
			font-size: .28rem
			color: $sixOneColor
.ticketcontent-shadow,.supplier-shadow
	position: absolute
	left: 0
	right: 0
	height: .5rem
	background-image: linear-gradient(to bottom,rgba(255,255,255,0),#fff)
.ticketcontent-shadow
	bottom: .8rem
.ticketcontent-arrow
	font-size: .24rem
	margin-left: .05rem
.prddetail-content
	color: $nineEColor
	font-size: .28rem
	line-height: .44rem
	overflow: hidden
	padding: .15rem 0
	margin: 0 .2rem
.sightlist
	overflow: hidden
	overflow-x: auto
	white-space: nowrap
	.sightlist-item
		display: inline-block
		padding: 0 .4rem
		margin: .15rem 0
		line-height: .4rem
		font-size: .28rem
		&:first-of-type
			padding-left: .2rem
			&:before
				border-color: #ffffff
		&:last-of-type
			padding-left: .2rem
	.sightlist-link
		color: $twoOneColor
		.sightlist-temple
			color: #bdbdbd
			position: relative
			top: .02rem
			margin-right: .1rem
.supplier-more
	padding: .06rem 0 .2rem 0
	text-align: center
	border-top: 0
	font-size: .28rem
	color: $sixOneColor
.supplier-shadow
	bottom: .6rem
.supplier-arrow
	font-size: .24rem
	margin-left: .05rem
.prddetail-arrowup
	display: inline-block
	color: $nineEColor
	transform: rotate(180deg)
.risktip-con-fold
	height: 1rem
	overflow: hidden
.risktip-con
	background: #ffffff
	margin: .2rem 0
	padding: 0 .24rem
	color: $sixOneColor
	.risktip-titlecon
		height: 1rem
		line-height: 1rem
		color: $twoOneColor
		font-size: .34rem
		.risktip-arrowright
			float: right
			height: 1rem
			line-height: 1rem
			color: $nineEColor
			font-size: .24rem
.risktip-content
	line-height: .4rem
	margin-bottom: .3rem
	display: inline-block
.risklink
	color: #00bcd4
	text-decoration: none
</style>
