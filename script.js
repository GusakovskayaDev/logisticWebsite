import dataMethods from './scripts/data.js';
import listenersMethods from './scripts/listeners.js';

// Прослушиватели событий
function addEventListeners() {
		listenersMethods.popup__container();
		listenersMethods.sidebar__add();
		listenersMethods.delivery__delete();
		listenersMethods.delivery__status();
}

// Открытие секций при клике на пункты в меню _______________________________________
const sidebar = document.getElementById('sidebar');
const sections = document.querySelectorAll('.section');
const sidebar__link = document.querySelectorAll('.sidebar__link');

sidebar.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('sidebar__link')) {
      event.preventDefault();

			sidebar__link.forEach((link) => {
				link.addEventListener('click', () => {
					target.classList.remove('sidebar__link_active')
				});
			});

			const idSection = target.getAttribute('data-key');
			const section = document.getElementById(idSection);
			
			sections.forEach((section) => {
				section.classList.remove('active');
				target.classList.add('sidebar__link_active');
			});

			section.classList.add('active');
    }
  },
  false
);

	// Настройки темы _______________________________________
	const savedTheme = localStorage.getItem('theme') || 'light';
	document.documentElement.setAttribute('data-theme', savedTheme);
	const switcher_checkbox = document.getElementById('switcher_checkbox');
	if (localStorage.getItem('checkboxChecked') === 'true') {
		switcher_checkbox.checked = true;
	}

	switcher_checkbox.addEventListener('click', () => {
		const currentTheme = document.documentElement.getAttribute('data-theme');
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
		
		document.documentElement.setAttribute('data-theme', newTheme);
		localStorage.setItem('theme', newTheme);
		localStorage.setItem('checkboxChecked', switcher_checkbox.checked);
	});

	dataMethods.init();
	dataMethods.display();
	addEventListeners();
	

