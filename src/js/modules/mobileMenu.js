export function init() {
	const menuBtn = document.getElementById('mobile-mbtn');

	if(menuBtn){
		const mobileMenu = document.querySelector('.top-menu');
		const closeBtn = mobileMenu.querySelector('.close-btn');

		menuBtn.addEventListener('click', function(){
			const isActive = mobileMenu.classList.contains('show');
			
			if(isActive){
				mobileMenu.classList.remove('show');
			}else{
				mobileMenu.classList.add('show');
			}
		});

		closeBtn.addEventListener('click', function(){
			mobileMenu.classList.remove('show');
		});
	}
}