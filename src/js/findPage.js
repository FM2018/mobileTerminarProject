import {Header} from "./header.js"; 

export default {
	template : `<div>
					<header-com :content="header.content" />
					<div class="main">
						<router-link to="child1" class="findA">空间灵感</router-link>
						<router-link :to="{name:'fc2'}" class="findA">精选晒单</router-link>
						<router-link to="child3" class="findA">实体店</router-link>
						<router-link to="child4" class="findA">专辑</router-link>
						<router-link to="child5" class="findA">品牌</router-link>
						<router-view></router-view>
					</div>
				</div>`,
	data() {
		return {
			header : {
				content : "发现",
				hasBtn : false
			}
		}
	},
	methods : {
		// delHead() {
		// 	this.hasHead=false
		// }
	},
	components : {   //注册组件
		headerCom : Header
	}
}