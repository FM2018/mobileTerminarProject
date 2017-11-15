import {Header} from "./header.js";
import {Carousel} from "./carousel.js";
import Goods from "./goods.js";

export default {
	template : `<div>
					<header-com :content="header.content" />
					<div class="main">
						<goods :goodsList="goodsList" />
					</div>
				</div>`,
	data() {
		return {
			header : {
				content : "全作品",
				hasBtn : false
			},
			carousel : ["images/01.jpg","images/02.jpg","images/03.jpg","images/04.jpg","images/05.jpg","images/06.jpg","images/07.jpg","images/08.jpg"],
			goodsList : [
				{name:"星期天沙发",price: 1999,image:"images/01.jpg"},
				{name:"星期天沙发",price: 1999,image:"images/01.jpg"},
				{name:"星期天沙发",price: 1999,image:"images/01.jpg"},
				{name:"星期天沙发",price: 1999,image:"images/01.jpg"},
				{name:"星期天沙发",price: 1999,image:"images/01.jpg"},
			]
		}
	},
	methods : {
		// delHead() {
		// 	this.hasHead=false
		// }
	},
	components : {   //注册组件
		headerCom : Header,
		carouselCom : Carousel,
		Goods : Goods,
	}
}