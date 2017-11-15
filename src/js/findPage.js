import {Header} from "./header.js";

export default {
	template : `<div>
					<header-com :content="header.content" />
					<div class="main">
						
					</div>
				</div>`,
	data() {
		return {
			header : {
				content : "造作ZAOZUO",
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