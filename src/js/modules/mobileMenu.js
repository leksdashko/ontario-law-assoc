export function init() {
	const menuBtn = document.getElementById('mobile-mbtn');

	if(menuBtn){
		menuBtn.addEventListener('click', function(){
			const mobileMenu = document.querySelector('.top-menu');
			const isActive = mobileMenu.classList.contains('show');
			
			if(isActive){
				mobileMenu.classList.remove('show');
			}else{
				mobileMenu.classList.add('show');
			}
		});
	}
}