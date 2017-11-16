var Vue = require("vue/dist/vue");
require("../less/style.less");
import goodsPage from "./page";
import homePage from "./homePage";
import findPage from "./findPage";
import carPage from "./carPage";
import minePage from "./minePage";
import VueRouter from "vue-router";

import goodsContent from "./goodsContent";

//二级页面
import child1 from "./findChild1";
import child2 from "./findChild2";
import child3 from "./findChild3";
import child4 from "./findChild4";
import child5 from "./findChild5";
//三级页面
import sub1 from "./subChild1";
import sub2 from "./subChild2";



//组件
// import banner from "./banner";

Vue.use(VueRouter);
//子路由不需要加上斜线
var routes = [
	{ path : "", redirect : "home"},
	{ path : "/home" , component : homePage,name:"h"},
	{ path : "/goods" , component : goodsPage,name:"g"},
	{ path : "/find" , component : findPage,name:"f", children:[
		{ path : "", redirect : "child1"},
		//此处有bug,刷新才会跳转  
		{ path : "child1", component : child1,name:"fc1"},
		{ path : "child2", component: child2, name:"fc2", children: [
			{path: "", redirect: "ss"},
			{path: "ss", name: "ss", components : {
				cone : sub1,
				ctwo : sub2
				}
			}
		]},
		{ path : "child3", component : child3,name:"fc3"},
		{ path : "child4", component : child4,name:"fc4"},
		{ path : "child5", component : child5,name:"fc5"}
	]},
	{ path : "/car" , component : carPage,name:"c"},
	{ path : "/mine" , component : minePage,name:"m"},
	{ path : "/goodsContent", component : goodsContent, name:"gc"}
]

var router = new VueRouter({
	routes : routes  //可以省略写成routers
});

var app = new Vue({
	el : "#app",
	data : {
		page : "homePage"
		// bannerList :[
		// 	{images:"images/01.jpg"},
		// 	{images:"images/02.jpg"},
		// 	{images:"images/03.jpg"},
		// 	{images:"images/04.jpg"},
		// 	{images:"images/05.jpg"},
		// 	{images:"images/06.jpg"},
		// 	{images:"images/07.jpg"},
		// 	{images:"images/08.jpg"}
		// ]
	},
	router : router,
	components : {
		goodsPage : goodsPage,
		homePage : homePage,
		findPage : findPage,
		carPage : carPage,
		minePage : minePage,
		goodsContent
		// banner
	},
	methods : {
		goPage(pageName) {
			this.page = pageName;
		},
		// toGc() {
		// 	router.push({name:"gc",query:{goodsId:"30004"}})
		// }
		// toHome() {
		// 	// router.push({name:"h",query:{username:'xiaomin'}});
		// 	// router.go(-1);
		// }
	},
	template : `<div id='app'>
					<router-view></router-view>
					
					<footer>
						<ul>
							<li>
								<router-link class="nav-btn" :to="{name:'h'}">首页</router-link>
							</li>
							<li>
								<router-link class="nav-btn" :to="{name:'f'}">发现</router-link>
							</li>
							<li>
								<router-link class="nav-btn" :to="{name:'g'}">全作品</router-link>
							</li>
							<li>
								<router-link class="nav-btn" :to="{name:'c'}">购物车</router-link>
							</li>
							<li>
								<router-link class="nav-btn" :to="{name:'m'}">我的</router-link>
							</li>
						</ul>
					</footer>
				</div>`
});