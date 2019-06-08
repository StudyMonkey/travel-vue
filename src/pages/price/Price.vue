<template>
	<div>
		<price-header></price-header>
		<price-list></price-list>
	</div>
</template>

<script>
import PriceHeader from './components/Header'
import PriceList from './components/List'
export default{
	name: 'Price',
	components: {
		PriceHeader,
		PriceList
	}
}
</script>

<style lang="stylus" scoped></style>
