function tabs() {

	//Tabs method	

	let tabs = document.querySelectorAll(".tabheader__item"),
		tabsContent = document.querySelectorAll(".tabcontent"), 
		tabsParent = document.querySelector(".tabheader__items");

	function hideContent() {
		tabsContent.forEach(item => {
			item.classList.add("hide");
			item.classList.remove("show", "fade");
		});

		tabs.forEach(item => {
			item.classList.remove("tabheader__item_active");
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add("show", "fade");
		tabsContent[i].classList.remove("hide");
		tabs[i].classList.add("tabheader__item_active");
	}

	hideContent();
	showTabContent(); 

	tabsParent.addEventListener("click", function(e) {
		const target = e.target; 

		if(target && target.classList.contains("tabheader__item")) {
			tabs.forEach((item,  i) => {
				if(target == item) {
					hideContent();

					showTabContent(i);
				}
			});
		}
	});
}

module.exports = tabs;