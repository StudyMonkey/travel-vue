<template>
	<div>
		<city-header></city-header>
		<city-search :cities='cities'></city-search>	
		<city-list :hotCities='hotCities' :cities='cities' :letter='letter'></city-list>
		<city-alphabet :cities='cities' @letterChange='handleLetterChange'></city-alphabet>
	</div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default{
	name: 'City',
	components: {
		CityHeader,
		CitySearch,
		CityList,
		CityAlphabet
	},
	data () {
		return {
			hotCities: [],
			cities: {},
			letter: ''
		}
	},
	methods: {
		getCityInfo () {
			axios.get('/api/city.json')
				.then(this.handleGetCityInfoSucc)
		},
		handleGetCityInfoSucc (res) {
			res = res.data;
			if( res.ret && res.data ) {
				this.hotCities = res.data.hotCities
				this.cities = res.data.cities
			}
			console.log(res.data)
		},
		handleLetterChange (letter) {
			this.letter = letter;
		}
	},
	mounted () {
		this.getCityInfo()
	}
}
</script>

<style lang="stylus" scoped>
</style>