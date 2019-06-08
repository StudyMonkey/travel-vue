import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)  // 在vue里面调用插件都需要vue.use



export default new Vuex.Store({
	state,
/*	actions: {
		changeCity (ctx, city) {
			// 第一个参数ctx 上下文
			// 第二个参数city 传过来的参数
//			console.log(city);
			ctx.commit('changeCity', city);
		}
	},*/
	// 组件可直接调用 commit
	mutations 
})
