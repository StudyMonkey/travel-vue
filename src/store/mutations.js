export default {
	changeCity (state, city) {
		// 第一个参数 state 表示公共数据
		// 第二个参数city 传过来的参数
		state.city = city
		try {
			localStorage.city = city
		}catch (e) {}
		
	}
}