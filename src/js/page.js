import {Header} from "./header.js";
import {Footer} from "./footer.js";



var indexPage = {
	template : `<div>
					<header-com :content="header.content" />
					<footer-com :navList="footer" />
				</div>`,
	data() {
		return {
			header : {
				content : "造作ZAOZUO",
				hasBtn : true
			},
			footer : ["首页","分类","全作品","购物车","个人","发现"]
		}
	},
	components : {
		headerCom : Header,
		footerCom : Footer
	}
}
export {indexPage}