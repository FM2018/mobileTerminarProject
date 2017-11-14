var Vue = require("vue/dist/vue");
import {indexPage} from "./page";
require("../less/style.less");


var app = new Vue({
	el : "#app",
	components : {
		page : indexPage
	},
	template : "<div id='app'><page /></div>"
});