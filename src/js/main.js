var Vue = require("vue/dist/vue");
require("../less/style.less");
import goodsPage from "./page";
import homePage from "./homePage";
import findPage from "./findPage";
import VueRouter from "vue-router";

Vue.use(VueRouter);

var routes = [
	{ path : "/home" , component : homePage},
	{ path : "/goods" , component : goodsPage},
	{ path : "/find" , component : findPage}
]

var router = new VueRouter({
	routes : routes  //可以省略写成routers
});

var app = new Vue({
	el : "#app",
	data : {
		page : "homePage"
	},
	router : router,
	components : {
		goodsPage : goodsPage,
		homePage : homePage,
		findPage : findPage
	},
	methods : {
		goPage(pageName) {
			this.page = pageName;
		} 
	},
	template : `<div id='app'>
					<router-view></router-view>
					<footer>
						<ul>
							<li>
								<router-link class="nav-btn" to="/home">首页</router-link>
							</li>
							<li>
								<router-link class="nav-btn" to="/find">发现</router-link>
							</li>
							<li>
								<router-link class="nav-btn" to="/goods">全作品</router-link>
							</li>
							<li>
								<a href="javascript:;">购物车</a>
							</li>
							<li>
								<a href="javascript:;">我的</a>
							</li>
						</ul>
					</footer>
				</div>`
});