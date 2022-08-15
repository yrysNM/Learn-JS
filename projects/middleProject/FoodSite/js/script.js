require('es6-promise').polyfill();				//polyfill 9.5
// ES6 Modules import / Typescript import
import 'nodelist-foreach-polyfill';

import    tabs   from  './modules/tabs';
import    modal  from  "./modules/modal";
import 	  timer  from  "./modules/timer";
import	  cards  from  "./modules/cards";
import	  calc   from   "./modules/calc";
import	  forms  from  "./modules/forms";
import	  slider from  "./modules/slider"; 
import {openModal} from "./modules/modal";

	
window.addEventListener("DOMContentLoaded", () => {				// loaded dom first


	const modalTimerId = setTimeout(() => openModal(".modal", modalTimerId), 500000);


	tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
	modal("[data-modal]", ".modal", modalTimerId); 
	timer(".timer", "2022-12-31"); 
	cards();
	calc(); 
	forms("form", modalTimerId); 
	slider({
		container: ".offer__slider",
		nextArrow: ".offer__slider-next", 
		slide: ".offer__slide", 
		prevArrow: ".offer__slider-prev",
		totalCounter: "#total",
		wrapper: ".offer__slider-wrapper",
		field: ".offer__slider-inner", 
		currentCounter: "#current"
	});

});
