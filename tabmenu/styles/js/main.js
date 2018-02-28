(function() {
	'use strict';

	var menuItems = document.getElementsByClassName('menu_item');
	var contents = document.getElementsByClassName('content');

	for (var i = 0; i < menuItems.length; i++) {
		menuItems[i].addEventListener('click', function(e) {
			e.preventDefault();// e.preventDefault();は、イベントキャンセル。今回はクリック動作のキャンセル

			for (var i = 0; i < menuItems.length; i++) {
				menuItems[i].className = 'menu_item';  // 一旦、li aのclass="active"を外す
				}

				this.className = 'menu_item active';

				for (var i = 0; i < contents.length; i++) {
					contents[i].className = 'content';  // 一旦、divのclass="active"を外す
					}

					document.getElementById(this.dataset.id).className = 'content active';

			});
		}
	})();
