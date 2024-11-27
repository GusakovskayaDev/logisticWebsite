import listenersMethods from './listeners.js';

const popupMethods = {

	status: ["Ожидает", "В пути", "Доставлен"],
	from: ["Москва", "Санкт-Петербург", "Казань", "Самара"],
	to: ["Москва", "Санкт-Петербург", "Казань", "Самара"],

	// Генерация ПОПАП для создания новой поставки _______________________________
	generation_newDeliver(){
			// Создаем контейнер (попап) в который будем загружать другие элементы
			const popup__container = document.getElementById('popup__container');
			const popup__upperContainer = document.createElement('div');

			// Создаем контейнер для Заголовка Попапа
			popup__upperContainer.classList.add('popup__upper-container');
			popup__upperContainer.id = 'popup__upper-container';

			// Создаем Заголовок
			const popup__title = document.createElement('h2');
			popup__title.classList.add('popup__title');
			popup__title.innerText = 'Новая поставка';

			// Создаем Крестик (для закрытия попапа)
			const material__close = document.createElement('span');
			material__close.id = 'popup__close';
			material__close.classList.add('popup__close', 'material-symbols-outlined');
			material__close.id = 'popup__close';
			material__close.innerText = 'close';

			// Добавляем контейнер Заголовка в основной контенер
			popup__upperContainer.appendChild(popup__title);
			popup__upperContainer.appendChild(material__close);

			// Создаем Форму куда будем добавлять нвоые элементы
			const popup__form = document.createElement('form');
			popup__form.id = 'popup__form';
			popup__form.classList.add('popup__form');

			// Создаем поле Название
			const popup__input = document.createElement('input');
			popup__input.id = 'popup__name';
			popup__input.classList.add('popup__input');
			popup__input.type = 'text';
			popup__input.placeholder = 'Название';
			popup__form.appendChild(popup__input);

			// Генерируем Статус поставки в зависимости от элементов в массиве status. Поэтому можно добавлять или удалять статусы, это никак не отобразиться на работе программы.
			const popup__selectStatus = document.createElement('select');
			popup__selectStatus.id = 'popup__status';
			popup__selectStatus.classList.add('popup__select', 'popup__select-status');
			popup__form.appendChild(popup__selectStatus);
			this.status.forEach(element => {
					const popup__option = document.createElement('option');
					popup__option.classList.add('popup__option');
					popup__option.innerText = element;
					popup__option.value = element;
					popup__selectStatus.appendChild(popup__option);
			});

			// Генерируем Откуда поставки в зависимости от элементов в массиве from. Поэтому можно добавлять или удалять статусы, это никак не отобразиться на работе программы.
			const popup__selectFrom = document.createElement('select');
			popup__selectFrom.id = 'popup__from';
			popup__selectFrom.classList.add('popup__select', 'popup__selectFrom');
			popup__form.appendChild(popup__selectFrom);
			this.from.forEach(element => {
				const popup__option = document.createElement('option');
				popup__option.classList.add('popup__option');
				popup__option.innerText = element;
				popup__option.value = element;
				popup__selectFrom.appendChild(popup__option);
			});

			// Генерируем Куда поставки в зависимости от элементов в массиве to. Поэтому можно добавлять или удалять статусы, это никак не отобразиться на работе программы.
			const popup__selectTo = document.createElement('select');
			popup__selectTo.id = 'popup__to';
			popup__selectTo.classList.add('popup__select', 'popup__select-to');
			popup__form.appendChild(popup__selectTo);
			this.to.forEach(element => {
				const popup__option = document.createElement('option');
				popup__option.classList.add('popup__option');
				popup__option.innerText = element;
				popup__option.value = element;
				popup__selectTo.appendChild(popup__option);
			});

			// Создаем Календарь
			const popup__calendar = document.createElement('input');
			popup__calendar.classList.add('popup__calendar', 'popup__input');
			popup__calendar.id = 'calendar';
			popup__calendar.type = 'date';
			popup__calendar.placeholder = 'date';

			// Создаем Кнопку для отправки
			const popup__button = document.createElement('button');
			popup__button.id = 'popup__adding';
			popup__button.classList.add('popup__button');
			popup__button.innerText = 'Добавить'

			// Загружаем календарь и кнопку в форму
			popup__form.appendChild(popup__calendar);
			popup__form.appendChild(popup__button);

			// Загружаем контенйер с Заголовком и Форму в основной контейнер
			popup__container.appendChild(popup__upperContainer);
			popup__container.appendChild(popup__form);

			// flatpickr(popup__calendar, {
			// 	// inline: true,
			// 	dateFormat: 'd m Y',
			// });

			listenersMethods.popup__adding();
	},

	// Генерация ПОПАП для редактирования поставки _______________________________
	generation_cardDeliver(dataObj){
		
	},

	// Генерация ПОПАП для изменения статуса поставки _______________________________
	generation_status(idRecord){
			// Создаем контейнер (попап) в который будем загружать другие элементы
			const popup__container = document.getElementById('popup__container');
			const popup__upperContainer = document.createElement('div');

			// Создаем контейнер для Заголовка Попапа
			popup__upperContainer.classList.add('popup__upper-container');
			popup__upperContainer.id = 'popup__upper-container';

			// Создаем Заголовок
			const popup__title = document.createElement('h2');
			popup__title.classList.add('popup__title');
			popup__title.innerText = 'Новая поставка';

			// Создаем иконку для закрытия окна
			const material__close = document.createElement('span');
			material__close.id = 'popup__close';
			material__close.classList.add('popup__close', 'material-symbols-outlined');
			material__close.id = 'popup__close';
			material__close.innerText = 'close';

			// Загружаем Заголовок в контейнер
			popup__upperContainer.appendChild(popup__title);
			popup__upperContainer.appendChild(material__close);
			popup__container.appendChild(popup__upperContainer);

			// Создаем Статус
			const popup__selectStatus = document.createElement('select');
			popup__selectStatus.id = 'popup__status';
			popup__selectStatus.classList.add('popup__select', 'popup__select-status');
			popup__container.appendChild(popup__selectStatus);

			this.status.forEach(element => {
					const popup__option = document.createElement('option');
					popup__option.classList.add('popup__option');
					popup__option.innerText = element;
					popup__option.value = element;
					popup__selectStatus.appendChild(popup__option);
			});

			// Создаем Кнопку для отправки
			const popup__button = document.createElement('button');
			popup__button.id = 'popup__changing';
			popup__button.classList.add('popup__button');
			popup__button.innerText = 'Изменить'
			popup__button.dataset.change = idRecord;
			
			// Загружаем кнопку в контейнер
			popup__container.appendChild(popup__button);
			listenersMethods.popup__changing();
	},

	// Функция для Открытия попап _______________________________
	open(param, dataObj) {
			const popup = document.getElementById('popup');

			if(param === 'newDeliver'){
				popup.style.display = 'block';
				this.generation_newDeliver();
			} else if(param === 'cardDeliver'){
				this.generation_cardTask(dataObj);
			} else if(param === 'status'){
				this.generation_status(dataObj);
			}

			listenersMethods.popup__close();
			popup.style.display = 'block';
	},

	// Функция для Закрытия попап _______________________________
	close() {
			const popup = document.getElementById('popup');
			const popup__container = document.getElementById('popup__container');
			if (popup) {
					popup.style.display = 'none';
					popup__container.innerHTML = '';
			}
	},
};

export default popupMethods;
