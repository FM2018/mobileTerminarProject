import {Header} from "./header.js";
import {Carousel} from "./carousel.js";
import banner from "./banner";

var jsonp = require("fetch-jsonp");

//调用接口获取banner数据


export default {
	// mounted() {
	// 	jsonp()
	// 		// .then(res=>{ return res.json()}) 
	// 		//可以简写为
	// 		.then(res=>res.json())
	// 		.then(data =>{
	// 			console.log()
	// 		})
	// },
	template : `<div>
					<header-com :content="header.content" />
					<banner className="abc" :list="bannerList" >
			            <template slot-scope="props">
			            	<img :src="props.bannerObj.images"/>
			            </template>
			        </banner>	
				</div>`,
	data() {
		return {
			header : {
				content : "造作ZAOZUO",
				hasBtn : false
			},
			carousel : ["images/01.jpg","images/02.jpg","images/03.jpg","images/04.jpg","images/05.jpg","images/06.jpg","images/07.jpg","images/08.jpg"],
			bannerList :[
				{images:"images/01.jpg"},
				{images:"images/02.jpg"},
				{images:"images/03.jpg"},
				{images:"images/04.jpg"},
				{images:"images/05.jpg"},
				{images:"images/06.jpg"},
				{images:"images/07.jpg"},
				{images:"images/08.jpg"}
			]
		}
	},
	components : {
		headerCom : Header,
		carouselCom : Carousel,
		banner
	}
}