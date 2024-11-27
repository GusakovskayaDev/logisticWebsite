import popupMethods from './popup.js';
import dataMethods from './data.js';

const listenersMethods = {
	
	// Прослушиватель на кнопку Закрыть в попап _____________________
	popup__close(){
			const popup__close = document.getElementById('popup__close');
			popup__close.addEventListener('click', () => {
					popupMethods.close();
			});
	},

	// Прослушиватель при клике на область вне попап _____________________
	popup__container(){
			const popup__container = document.getElementById('popup__container');
			document.addEventListener('mousedown', (event) => {
					if (!popup__container.contains(event.target)) {
							popupMethods.close();
					}
			});
	},

	// Прослушиватель на кнопку Добавить в sidebar _____________________
	sidebar__add(){
			const sidebar__add = document.getElementById('sidebar__add');
			sidebar__add.addEventListener('click', (event) => {
					event.preventDefault();
					popupMethods.open('newDeliver');
			});
	},

	// Прослушиватель при клике на кнопку Добавить в Попап _____________________
	popup__adding(){
			const popup__adding = document.getElementById('popup__adding');
			popup__adding.addEventListener('click', (event) => {
					event.preventDefault();

					const popup__name = document.getElementById('popup__name');
					const popup__status = document.getElementById('popup__status');
					const popup__from = document.getElementById('popup__from');
					const popup__to = document.getElementById('popup__to');
					const popup__date = document.getElementById('calendar');

					// Генерируем Идентификатор
					let newArray = [...new Set(dataMethods.data.map(item => {
						let num = item.id.replace('CARGO', '');
						return parseInt(num, 10);
					}))];
					let maxId = Math.max(...newArray); 
					let newIdNumber = maxId + 1;
					let newId = 'CARGO' + String(newIdNumber).padStart(3, '0');

					let dataObj = {
						id: newId,
						name: popup__name.value,
						status: popup__status.value,
						from: popup__from.value,
						to: popup__to.value,
						date: popup__date.value,
					}

					dataMethods.add(dataObj);
			});
	},

	// Прослушиватель при клике на Статус в позиции поставки _____________________
	delivery__status(){
			const delivery__status = document.querySelectorAll('.delivery__status ');
			delivery__status.forEach(element => {
					element.addEventListener('click', () => {
							const idRecord = element.dataset.idRecord;
							popupMethods.open('status', idRecord);
					});
			});
	},

	// Прослушиватель при клике на кнопку Изменить в Попап _____________________
	popup__changing(){
		const popup__changing = document.getElementById('popup__changing');
		popup__changing.addEventListener('click', () => {
				const popup__status = document.getElementById('popup__status');
				const status = popup__status.value;
				const idRecord = popup__changing.dataset.change;
				dataMethods.edit(idRecord, status);
		});
	},

	// Прослушиватель на иконку Удалить в позиции Поставки _____________________
	delivery__delete(){
			const delivery__delete = document.querySelectorAll('.delivery__delete');
			delivery__delete.forEach(element => {
				element.addEventListener('click', () => {
					const idRecord = element.dataset.idRecord;
					dataMethods.remove(idRecord);
				})
			})
	},
}

export default listenersMethods;