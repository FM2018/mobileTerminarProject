var Swiper = require("swiper");  //3.4.2
// import Swiper from "swiper"  //4.x版本
require("swiper/dist/css/swiper.min.css");
require("../less/banner.less");
export default {
	props : {
		className : {
			type : [String , Object],
			default : null
		},
		list : Array,
		hasPagination : {
			type : Boolean,
			default : true
		},
		hasBtn : {
			type : Boolean,
			default : true
		}
	},
	template : `<div class="swiper-container" :class="className">
					<div class="swiper-wrapper">
				        <div class="swiper-slide" v-for="(banner,i) in list">
							<slot :bannerObj="banner"></slot>
				        </div>
				    </div>

				    <div class="swiper-pagination" v-if="hasPagination"></div>
				    
				    <div class="swiper-button-prev" v-if="hasBtn"></div>
				    <div class="swiper-button-next" v-if="hasBtn"></div>
				</div>`,
	mounted() {
		var selected = this.className === null ?"swiper-container":"."+this.className;
		var option = {
			autoplay: 3000,
			effect : "fade",
			loop : {
				type : Boolean,
				default : true
			}
		};
		if(this.hasPagination) {
			option.pagination ='.swiper-pagination';
		}
		if(this.hasBtn) {
			option.prevButton = '.swiper-button-prev';
			option.nextButton = '.swiper-button-next';
		}

		var swiper = new Swiper(selected,option);
	}
}