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
				content : "我的",
				hasBtn : false
			}
		}
	},
	methods : {

	},
	components : {
		headerCom : Header
	}
}