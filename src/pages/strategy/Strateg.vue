<template>
	<div class="xm-flex">
		<strateg-header></strateg-header>
		<strateg-content></strateg-content>
	</div>
</template>

<script>
import StrategHeader from './components/Header'
import StrategContent from './components/Content'
export default{
	name: 'Strateg',
	components: {
		StrategHeader,
		StrategContent
	}
}
</script>

<style lang="stylus" scoped>
.xm-flex
	display: flex
	flex-direction: column
	overflow: hidden
</style>
