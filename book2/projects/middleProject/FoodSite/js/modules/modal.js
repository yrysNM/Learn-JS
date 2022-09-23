
function closeModal(modalSelector) {
	const modal = document.querySelector(modalSelector); 
	modal.classList.add("hide");
	modal.classList.remove("show");
	//modal.classList.toggle("show");

	document.body.style.overflow = ""; 

}

function openModal(modalSelector, modalTimerId) {
	const  modal = document.querySelector(modalSelector); 
	modal.classList.add("show");
	modal.classList.remove("hide");

	document.body.style.overflow = "hidden";

	console.log(modalTimerId);
	if(modalTimerId) {

		clearInterval(modalTimerId);
	}
}

//modal
function modal(triggerSelector, modalSelector, modalTimerId) {

	//Modal Window 
	const modalTrigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector); 


	modalTrigger.forEach(btn => {
		btn.addEventListener("click", () => openModal(modalSelector, modalTimerId));
	});


	modal.addEventListener("click",  (e) => {
		let target = e.target;

		if(target == modal || target.getAttribute("data-close") == "") {
			closeModal(modalSelector);
		}
	});

	document. addEventListener("keydown", (e) => {
		let keyCode = e.code;

		if(keyCode === "Escape" && modal.classList.contains("show")) {
			closeModal(modalSelector);
		}
	});


	function showModalByScroll() {
		if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
			openModal(modalSelector, modalTimerId); 
			window.removeEventListener("scroll",  showModalByScroll);
		}
	}

	window.addEventListener('scroll', showModalByScroll);

}

export default modal; 
export {closeModal};
export {openModal};