import {Header} from "./header.js";
import {Carousel} from "./carousel.js";

export default {
	template : `<div>
					<header-com :content="header.content" />
					<carousel-com :imagesList="carousel" />		
				</div>`,
	data() {
		return {
			header : {
				content : "造作ZAOZUO",
				hasBtn : false
			},
			carousel : ["images/01.jpg","images/02.jpg","images/03.jpg","images/04.jpg","images/05.jpg","images/06.jpg","images/07.jpg","images/08.jpg"]
		}
	},
	components : {
		headerCom : Header,
		carouselCom : Carousel
	}
}