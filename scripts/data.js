import popupMethods from './popup.js';
import listenersMethods from './listeners.js';

const dataMethods = {
	// Объект для хранения данных _______________________________
	data: [],

	// Инициализация данных _______________________________
	init() {
    const storedData = localStorage.getItem('logistic');
    this.data = storedData ? JSON.parse(storedData) : [
			{
			"id": "CARGO001",
			"name": "Строительные материалы",
			"status": "В пути",
			"from": "Москва",
			"to": "Казань",
			"date": "2024-11-26"
	},
	{
			"id": "CARGO002",
			"name": "Хрупкий груз",
			"status": "Ожидает",
			"from": "Санкт-Петербург",
			"to": "Самара",
			"date": "2024-11-27"
	},
	{
			"id": "CARGO003",
			"name": "Корм для животных",
			"status": "Ожидает",
			"from": "Самара",
			"to": "Москва",
			"date": "2024-11-27"
	},
	{
			"id": "CARGO004",
			"name": "Телевизоры",
			"status": "Доставлен",
			"from": "Казань",
			"to": "Санкт-Петербург",
			"date": "2024-11-29"
	}
];
		const delivery = document.getElementById('delivery');
		delivery.innerHTML = '';
  },

	// Вывод всех записей из хранилища
	display() {
			// Находим компонент на странцие в который будем загружать генерируемые элементы
			const delivery = document.getElementById('delivery');
			const processing = document.getElementById('processing');
			const ponding = document.getElementById('ponding');
			const completed = document.getElementById('completed');
			this.data.forEach(record => {
		
					// Создаем контейнер для одной поставки
					const delivery__container = document.createElement('div');
					delivery__container.classList.add('delivery__container');
					// Создаем два контейнера, один для информации о поставке, другие - иконки
					const delivery__item = document.createElement('div');
					delivery__item.classList.add('delivery__item');
					const delivery__icons = document.createElement('div');
					delivery__icons.classList.add('delivery__icons');
					// Загружаем их в контейнер
					delivery__container.appendChild(delivery__item);
					delivery__container.appendChild(delivery__icons);
					// Создаем контейнеры для информации
					// Идентификатор
					const delivery__id = document.createElement('div');
					delivery__id.id = 'delivery__id';
					delivery__id.classList.add('delivery__id');
					delivery__id.innerText = record.id;
					// Название
					const delivery__name = document.createElement('div');
					delivery__name.classList.add('delivery__name');
					delivery__name.innerText = record.name;
				// Иконки
				const delivery__status = document.createElement('div');
				delivery__status.dataset.idRecord = record.id;
				if(record.status === 'Ожидает'){
					delivery__status.classList.add('delivery__status', 'status-pond');
				} else if(record.status === 'В пути'){
					delivery__status.classList.add('delivery__status', 'status-deliver');
				} else if(record.status === 'Доставлен'){
					delivery__status.classList.add('delivery__status', 'status-done');
				}
				delivery__status.innerText = record.status;
				// Откуда
				const delivery__from = document.createElement('div');
				delivery__from.classList.add('delivery__from');
				delivery__from.innerText = record.from;
				// Куда
				const delivery__where = document.createElement('div');
				delivery__where.classList.add('delivery__where');
				delivery__where.innerText = record.to;
				// Календарь
				const delivery__date = document.createElement('div');
				delivery__date.classList.add('delivery__date');
				delivery__date.innerText = record.date;
				// Загружаем в первый контейнер информацию о поставке
				delivery__item.appendChild(delivery__id);
				delivery__item.appendChild(delivery__name);
				delivery__item.appendChild(delivery__status);
				delivery__item.appendChild(delivery__from);
				delivery__item.appendChild(delivery__where);
				delivery__item.appendChild(delivery__date);
				// Создаем иконки
				const delivery__edit = document.createElement('span');
				delivery__edit.classList.add('delivery__edit', 'material-symbols-outlined');
				delivery__edit.innerText = 'edit';
				const delivery__delete = document.createElement('span');
				delivery__delete.id = 'delivery__delete';
				delivery__delete.classList.add('delivery__delete', 'material-symbols-outlined');
				delivery__delete.innerText = 'close';
				delivery__delete.dataset.idRecord = record.id;
				// Загружаем иконки в их контейнер
				delivery__icons.appendChild(delivery__edit);
				delivery__icons.appendChild(delivery__delete);
		
				delivery.appendChild(delivery__container);

				const clonedContainer = delivery__container.cloneNode(true);

				if(record.status === 'Ожидает'){
					ponding.appendChild(clonedContainer);
				} else if(record.status === 'В пути'){
					processing.appendChild(clonedContainer);
				} else if(record.status === 'Доставлен'){
					completed.appendChild(clonedContainer);
				}
			});

			listenersMethods.delivery__status();
			listenersMethods.delivery__delete();
	},

	// Отчистка секций _______________________________
	display_clear(){
		const delivery = document.getElementById('delivery');
		delivery.innerHTML = '';
		const ponding = document.getElementById('ponding');
		ponding.innerHTML = '';
		const processing = document.getElementById('processing');
		processing.innerHTML = '';
		const completed = document.getElementById('completed');
		completed.innerHTML = '';
	},

	// Добавление новой поставки _______________________________
	add(dataObj) {
		console.log();
    this.data.push(dataObj);
    this.save();
		this.display_clear();
		this.display();
		popupMethods.close();
  },

	// Сохранение новой поставки _______________________________
	save() {
    localStorage.setItem('logistic', JSON.stringify(this.data));
  },

	// Удаление поставки _______________________________
	remove(idRecord) {
			const index = this.data.findIndex(element => element.id === idRecord);
			if (index !== -1) {
					this.data.splice(index, 1);
					this.save();
			}
			this.save();
			this.display_clear();
			this.init();
			this.display();
	},

	// Редактирование Статуса _______________________________
	edit(idRecord, status){
		const index = this.data.findIndex(element => element.id === idRecord);
		this.data[index].status = status;
		this.save();
		this.display_clear();
		this.init();
		this.display();
		popupMethods.close();
	},
}

export default dataMethods;