import {Header} from "./header.js";
import {Carousel} from "./carousel.js";
import {Footer} from "./footer.js";



var indexPage = {
	template : `<div>
					<header-com :content="header.content" />
					<carousel-com :imagesList="carousel" />
					<footer-com :navList="footer" />
				</div>`,
	data() {
		return {
			header : {
				content : "造作ZAOZUO",
				hasBtn : true
			},
			carousel : ["images/01.jpg","images/02.jpg","images/03.jpg","images/04.jpg","images/05.jpg","images/06.jpg","images/07.jpg","images/08.jpg"],
			footer : ["首页","分类","全作品","购物车","个人","发现"]
		}
	},
	components : {
		headerCom : Header,
		carouselCom : Carousel,
		footerCom : Footer
	}
}
export {indexPage}