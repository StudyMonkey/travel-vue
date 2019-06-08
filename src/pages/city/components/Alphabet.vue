<template>
	<ul class="list">
		<li 
			class="item" 
			v-for="item of letters" 
			:key="item" 
			:ref="item" 
			@touchstart="handleTouchStart"
			@touchmove="handleTouchMove"
			@touchend="handleTouchEnd"
			@click="handleLetterClick"
		>{{item}}</li>
	</ul>
</template>

<script>
export default{
	name: 'CityAlphabet',
	props: {
		cities: Object
	},
	computed: {
		letters () {
			const letter = [];
			for( let i in this.cities ) {
				letter.push(i)
			}
			return letter
		}
	},
	data () {
		return {
			touchStatus: false,
			startY: 0,
			timer: null
		}
	},
	updated () {
		this.startY = this.$refs['A'][0].offsetTop; // A字母距头部底边的距离
	},
	methods: {
		handleLetterClick (e) {
			this.$emit('letterChange', e.target.innerHTML);
		},
		handleTouchStart () {
			this.touchStatus = true
		},
		handleTouchMove (e) {
			if( this.touchStatus ) {
				//const startY = this.$refs['A'][0].offsetTop; // 为了提升性能防止每次都在这里计算，放在updated的钩子里面
				if( this.timer ) {
					clearTimeout(this.timer)
				}
				this.timer = setTimeout( () => {
					const touchY = e.touches[0].clientY - 79;  // 鼠标距离header底边的距离
					const index = Math.floor((touchY - this.startY) / 20) // 20是每个字母的高度
					if( index >= 0 && this.letters.length ) {
						this.$emit('letterChange', this.letters[index]);
					}					
				}, 16)
			}
		},
		handleTouchEnd () {
			this.touchStatus = false
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
	display: flex
	flex-direction: column
	justify-content: center
	position: absolute
	top: 1.58rem
	right: 0
	bottom: 0
	width: .4rem
	.item
		line-height: .4rem
		text-align: center
		color: $bgColor
</style>