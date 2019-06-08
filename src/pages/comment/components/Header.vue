<template>
	<div class="comment-header">
		<a href="javascript:void(0);">
			<div class="iconfont header-back" @click="goBack">&#xe624;</div>
		</a>
		<h2 class="title">
			<div 
				class="tab-item" 
				:class="ind == index ? 'active' : ''" 
				@click="handleTitleClick(index)" 
				v-for="(item,index) of title" 
				v-text="item"
				>
			</div>
			<transition name="fade">
				<span class="tab-slider" :style="leftPos"></span>
			</transition>
			
		</h2>
	</div>
</template>

<script>
export default{
	name: 'CommentHeader',
	data () {
		return {
			ind: 0,
			title: ['点评', '攻略'],
			leftPos: {
				left: '45.313px'
			}
		}
	},
	methods: {
		goBack () {
			this.$router.go(-1)
		},
		handleTitleClick (index) {
			if( index == 0 ) {
				this.leftPos.left = '45.313px'
			}else{
				this.leftPos.left = '177.313px'
			}
			this.ind = index
			this.$emit('handleIndex', index);
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

	.fade-enter-active, .fade-leave-active
		transition: left 2s;
	.comment-header
		position: fixed
		width: 100%
		height: .88rem
		line-height: .88rem
		color: #ffffff
		font-size: .36rem
		overflow: hidden
		text-align: center
		background: #ffffff
		z-index: 3
		border-bottom: 1px solid #e0e0e0
		.header-back
			position: absolute
			left: 0
			top: 0
			bottom: 0
			width: .8rem
			text-align: center
			font-size: .4rem
		.title
			position: relative
			font-size: .36rem
			font-weight: normal
			color: #000000
			overflow: hidden
			white-space: nowrap
			margin: 0 .8rem
			.tab-item
				display: inline-block
				margin: 0 .45rem
				padding: 0 .45rem
				&.active
					height: .84rem
					color: #00bcd4
			.tab-slider
				position: absolute
				bottom: 0
				display: inline-block
				height: .04rem
				width: 1.4rem
				background-color: #00bcd4
</style>