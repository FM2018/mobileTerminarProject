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
				content : "购物车",
				hasBtn :true
			}
		}
	},
	methods : {

	},
	components : {
		headerCom : Header
	}
}