var Vue = require("vue/dist/vue");
import {goodsPage} from "./page";
import homePage from "./homePage";
require("../less/style.less");


var app = new Vue({
	el : "#app",
	data : {
		page : "homePage"
	},
	components : {
		goodsPage : goodsPage,
		homePage : homePage
	},
	methods : {
		goPage(pageName) {
			this.page = pageName;
		} 
	},
	template : `<div id='app'>
					<component :is='page' />
					<footer>
						<ul>
							<li>
								<a href="javascript:;" @click="goPage('homePage')">首页</a>
							</li>
							<li>
								<a href="javascript:;">发现</a>
							</li>
							<li>
								<a href="javascript:;" @click="goPage('goodsPage')">全作品</a>
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