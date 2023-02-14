export function init() {
	const toggleLists = document.querySelectorAll('.toggle-menu');

	if(toggleLists.length > 0){
		toggleLists.forEach(function(item){
			const button = item.querySelector('button');

			button.addEventListener('click', function(){
				const isActive = item.classList.contains('show');
				
				if(isActive){
					item.classList.remove('show');
				}else{
					item.classList.add('show');
				}
			});
		});

		document.addEventListener('click', (event) => {
			toggleLists.forEach(function(item){
				if(!item.contains(event.target)){
					item.classList.remove('show');
				}
			});
		});
	}
}