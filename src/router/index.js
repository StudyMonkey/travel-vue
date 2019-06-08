import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Comment from '@/pages/comment/Comment'
import Strateg from '@/pages/strategy/Strateg'
import List from '@/pages/list/List'
import Product from '@/pages/product/Product'
import Ticket from '@/pages/ticket/Ticket'
import Price from '@/pages/price/Price'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/city',
    	name: 'City',
    	component: City
    },
    {
    	path: '/detail/:id',
    	name: 'Detail',
    	component: Detail
    },
    {
    	path: '/comment',
    	name: 'Comment',
    	component: Comment
    }, 
    {
    	path: '/strateg',
    	name: 'Strateg',
    	component: Strateg
    }, 
    {
    	path: '/list',
    	name: 'List',
    	component: List
    },{
			path: '/product',
			name: 'Product',
			component: Product
		},
		{
			path: '/ticket',
			name: 'Ticket',
			component: Ticket
		},
		{
			path: '/price',
			name: 'Price',
			component: Price
		}    
  ],
  scrollBehavior (to, from, savedPosition) {
  	return {x: 0, y: 0}
  }
})
