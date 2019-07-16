 /* 1. Створити масиви і вивести їх в консоль:
	- з 20 випадкових дробових чисел від 0 до 1;
	- з 30 випадкових цілих чисел від 1 до 100;
	- з трьох строк тексту випадкової довжини від 8 до 16 символів; 
	- з 6-и чисел, що відповідають кодам символів строки "Hello!" */ 

let arrFloatNumbers = [];
for (let i = 0; i < 20; i++){
	arrFloatNumbers.push(Math.random());
} 

let arrIntNumbers = [];
for (let i = 0; i < 30; i++){
	arrIntNumbers.push(Math.floor(Math.random()*(100 - 1) + 1));
}

let arrStr = [];
for (let i=0; i < 3; i++){
	arrStr[i] = '';
	let n = Math.floor(Math.random()*8) + 8;
	for (let j=0; j < n; j++){
		arrStr[i] += String.fromCharCode(Math.floor(Math.random()*25) + 97);
	}
}

let arrSymb = [];
let str = 'Hello!';
for (let i = 0; i < str.length; i++){
	let arrSymbNum = str.charCodeAt(i);
	arrSymb.push(arrSymbNum);
}

console.groupCollapsed(`Масив з 20 випадкових дробових чисел від 0 до 1:`);
console.log(arrFloatNumbers);
console.groupEnd();
console.groupCollapsed(`Масив з 30 випадкових дробових чисел від 1 до 100:`);
console.log(arrIntNumbers);
console.groupEnd();
console.groupCollapsed(`Масив з трьох строк тексту випадкової довжини від 8 до 16 символів`);
console.log(arrStr);
console.groupEnd();
console.groupCollapsed(`Масив з 6 символів, що відповідають кодам символів: 'Hello!'`);
console.log(arrSymb);
console.groupEnd();

/* 2. Створіть циклом масив з цифр [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024].
	Спробуйте створити цей масив використовуючи тільки лічильник, без додаткових змінних. */

(function(){
	let arr = [];
	for (let i = 1; i < 1025;){
		arr.push(i);
		i *= 2;
	}
	console.groupCollapsed('Масив, створений з допомогою лічильника:');
	console.log(arr);	
	console.groupEnd();
})();

/* 3. Створити двовимірний масив 10х10 випадкових чисел від 1 до 10.
	Підрахувати: середнє значення всіх цифр, 
	мінімальне та максимальне значення сумм цифр у колонках і рядках. */

(function(){
	let allSum = 0;
	let sumRow = [];
	let sumCol = [];
	let arr = [];
	let averageSum;
	let minCol = 11, minRow = 11;
	let maxCol = 0, maxRow = 0;
	for (let i=0; i<10; i++){
		sumRow[i] = 0;
		sumCol[i] = 0;
	}

	for (let i = 0; i < 10; i++){
		arr[i] = [];	
		for(let j = 0; j < 10; j++){
			arr[i][j] = Math.floor(Math.random()*10) + 1;
			allSum += arr[i][j];
			sumRow[i] += arr[i][j];
			sumCol[j] += arr[i][j];
		}	
	}
	averageSum = allSum / 100;

	for(let i = 1; i < 10; i++){
		minCol = Math.min(sumCol[i-1], sumCol[i]);
	}

	console.groupCollapsed('Двовимірний масив 10х10 випадкових чисел від 1 до 10:');
	console.log(arr);	
	console.groupCollapsed('Середнє значення всіх цифр:');
	console.log(averageSum);
	console.groupCollapsed('Мінімальне значення сум цифр у рядках:');
	console.log(minRow);
	console.groupEnd();
	console.groupCollapsed('Максимальне значення сум цифр у колонках:');
	console.log(maxCol);
	console.groupEnd();
	console.groupEnd();
	console.groupEnd();
})();

/* 4. Перевірте, що ваша функція, яка видає випадкове число від 50 до 100, працює правильно: 
	викличте її 50 мільйонів разів та переконайтеся, що кожне число випало приблизно 1 мільйон разів.
	Особливу увагу приділіть першому та останньому числу (50 та 100).
	Строго кажучи, в даному випадку вірогідність випадання кожного числа - 980 тисяч, 
	оскільки в проміжку [50..100] є 51 число і 50 млн. / 51 = 0,98 млн. */

(function(){
	let arrRandom = [];
	for (let i = 0; i < 1000; i++){
		let randNumber = randNum();
		if (!arrRandom[randNumber]) arrRandom[randNumber] = 0;
		arrRandom[randNumber]++;
	} 

	function randNum(){
		return Math.floor(Math.random()*50) + 50;
	}
	console.groupCollapsed('Випадкова кількість випадань кожного числа:');
	console.log(arrRandom);
	console.groupEnd();
})();

/* 5. Створіть циклом масив з 5 трійок. 
		Змініть перший елемент на пустий масив, а другий - на слово "ківі".
		Додайте 7-й елемент, виведіть масив в консоль.
		Ініціалізуйте 6-й елемент підмасивом з 5 трійок найоптимальнішим способом.
		Результат виведіть в консоль. */

(function(){
	let arrThree = [];

	for (let i = 0; i < 5; i++){
		arrThree.push(3);
	}
	arrThree[0] = [];
	arrThree[1] = 'ківі';
	arrThree[6] = [3, 3, 3, 3, 3];
	arrThree.push(1); 

	console.groupCollapsed('Результуючий масив');
	console.log(arrThree);
	console.groupEnd();
})();

/* 6. Дано масив чисел:
	[5, 10, 15, 7, 9, 12, 4, 2, 1]
	Виведіть в консоль масив посортований в прямому та зворотньому порядку не застосовуючи метод .reverse().
	Створіть масив строк кольорів райдуги, посортуйте їх у прямому та зворотньому напрямку. */

(function(){
	
	let newArr = [];
	let arr = [5, 10, 15, 7, 9, 12, 4, 2, 1];

	arr.sort(function(a, b){
		return a - b;
	});
	console.groupCollapsed('Масив чисел, посортований в прямому порядку:');
	console.log(arr);
	console.groupEnd();

	arr.sort(function(a, b){
		return b - a;
	});
	console.groupCollapsed('Масив чисел, посортований в зворотньому порядку:');
	console.log(arr);
	console.groupEnd();

	let arrColor = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
	
	arrColor.sort();
	console.groupCollapsed(`Масив строк, посортований в прямому порядку:`);
	console.log(arrColor);
	console.groupEnd();

	arrColor.sort(function(a, b){
		if (b[0] > a[0]) {
			return 1;
		} else {
			return 0;
		}
	});
	console.groupCollapsed('Масив строк, посортований в зворотньому порядку:');
	console.log(arrColor);
	console.groupEnd();
})();

/* 7. Програмно створіть двовимірний масив mAs 3*3 заповнений числами - результатом множення 
	номера рядка на номер колонки (комірки). 
	В другий рядок добавте на початок 5, а в кінець - 7.
	Переберіть масив методом forEach, виведіть в консоль матрицю з цифр 0 чи 1 в залежності 
	від того - непарне чи парне число. Виведіть в консоль.
	З першого рядка вилучіть та збережіть у змінну останній елемент, а з третього рядка - другий елемент.
	З середнього рядка вилучіть другий елемент і замініть його двома новими елементами, 
	які ви вилучили перед цими.
	В консоль виведіть масив, а також добуток третього вилученого елемента з другим елементом, 
	який піднятий до степеня першого елемента. */

(function(){
	let arr = [];
	let first;
	let second;
	let third;

	for (let i = 0; i < 3; i++){
		arr[i] = [];
		for (let j = 0; j < 3; j++){
			arr[i][j] = i*j;
		}
	}
	console.groupCollapsed('Масив утворений у результаті множення номера рядка на номер колонки (комірки):');
	console.log(arr);
	console.groupEnd();

	arr[1].unshift(5);
	arr[1].push(7);

	console.groupCollapsed('Матриця з цифр 0 чи 1 в залежності від того парне чи непарне число');
	arr.forEach(function(item){
		console.log(item.map(function(item){
			return item % 2 ? 0 : 1;
		}));
	});
	console.groupEnd();
	
	first = arr[0].pop();
	second = arr[2].splice(1, 1);
	third = arr[1].splice(1, 1, first, second);
	console.groupCollapsed('Перший вилучений елемент');
	console.log(first);
	console.groupEnd();
	console.groupCollapsed('Другий вилучений елемент');
	console.log(second);
	console.groupEnd();
	console.groupCollapsed('Третій вилучений елемент');
	console.log(third);
	console.groupEnd();

	let result = Math.pow(third * second, first);
	console.groupCollapsed('Добуток третього вилученого елемента з другим елементом, який піднятий до степеня першого елемента');
	console.log(result);
	console.groupEnd();
})();

/* 8. Створіть масив строк з обласних центрів України. 
	Посортуйте їх в прямому порядку по другій літері, 
	в зворотньому напрямку - по останній, результати виведіть в консоль. */

(function(){
	let alph = 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюя';
	let arrCities = ['Полтава', 'Донецьк', 'Луганськ', 'Сімферополь', 'Хмельницький', 'Київ',
	 'Тернопіль', 'Вінниця', 'Дніпро', 'Луцьк', 'Львів', 'Кропивницький', 'Рівне', 'Черкаси',
	 'Ужгород', 'Запоріжжя', 'Чернігів', 'Одеса', 'Харків', 'Житомир', 'Миколаїв', 'Чернівці',
	 'Івано-Франківськ', 'Херсон', 'Суми'];
	arrCities.sort(function(a, b){
		if (alph.indexOf(a[1]) > alph.indexOf(b[1]) || 
			alph.indexOf(a[1]) === alph.indexOf(b[1]) && 
			alph.indexOf(a[2]) > alph.indexOf(b[2])){
			return 1;
		} else {
			return -1;
		}
	});
	console.groupCollapsed('Масив міст відсортований по другій літері');
	console.log(arrCities);
	console.groupEnd();
})();

/* 9. Задано масив:
	[7, 2, "35", 1, 16, 8, "html", 's', 99]
	Потрібно:
	- видалити з масива строкові дані (пошук строкових значень здійснити програмно);
	- добавити числа 5 і 40;
	- відсортувати масив за зростанням;
	- вивести результат в консоль. */

	(function(){
		let arr = [7, 2, '35', 1, 16, 8, 'html', 's', 99];
		for(let i=0; i < arr.length; i++){
			if (typeof arr[i] === 'string'){
				arr.splice(i,1);
				i--;
			}
		}
		arr.push(5, 40);
		arr.sort(function(a, b){
			return a - b;
		});
		console.groupCollapsed(`Масив без строкових даних та відсортований за зростанням:`);
		console.log(arr);
		console.groupEnd();
	})();

/* 10. Дано 2 масива з 5 елементів кожен, в яких знаходяться строкові значення кольорів 
	(виберіть довільні, але щоб не дублювалися на одних і тих же місцях в обох масивах).
	В html створіть список <ul id="list"> з п'ятьох елементів, 
	з іменами героїв вашого улюбленого телешоу,	серіалу, улюблених страв...

	Програмно добавте нумерацію рядків до списка і крапку з комою - в кінці рядка: 
	1) Minecraft;
	2) Counter Strike; 
	
	Спробуйте зробити, щоб останній пункт закінчувався крапкою.
	Доступ до елементів списку здійсніть так:
	let li = document.getElementById('list').children;
	
	Пофарбуйте колір тексту елементів списку у кольори з першого масиву, 
	а бекграунди задайте кольорами з другого масиву:
	element.style.color = "green";
	element.style.backgroundColor = "white";
	
	Добавте ще елементів у список та модифікуйте скрипт, 
	щоб він циклічно зафарбовував елементи (достатньо мінімальних змін). */

	let arrColors = ['yellow', 'grape', 'green', 'black', 'white'];
	let arrColors2 = ['purple', 'violet', 'silver', 'aqua', 'blue'];
	let list = document.getElementById('list');

	for (let i = 0; i < list.children.length; i++){
		let end = i === list.children.length - 1 ? '.' : ';';
		list.children[i].innerText = i + 1 + ') ' + list.children[i].textContent + end;
		list.children[i].style.color = arrColors[i % arrColors.length];
		list.children[i].style.backgroundColor = arrColors2[i % arrColors2.length];
	}

/* 11. Створити 3-вимірний масив 4*4*4 елементів, записати в нього перші 64 простих чисел, 
	починаючи з 13.
	Функцію пошуку простих чисел постарайтесь оптимізувати, щоб вона не перевіряла парні числа, 
	і ті, що діляться на 3 та 5. */
	
	(function(){
		let arr = [];
		let n = 13;
		for(let i = 0; i < 4; i++){
			arr[i] = [];
			for(let j = 0; j < 4; j++){
				arr[i][j] = [];
				for(let q = 0; q < 4; q++){
					n = nextPrime(n);
					arr[i][j][q] = n++;
				}
			}
		}

		function isPrime(n){
			if (n === 1 || n === 2){
				return true;
			}
			for (let i = 3; i < n; i++){
				if (n % i === 0){
					return false;
				}
			}
			return true;
		}

		function nextPrime(n){
			do {
				if (isPrime(n)){
					return n;
				}
				n++;
			} while (1);
		}

		console.groupCollapsed('Масив з перших 64 простих чисел, починаючи з 13');
		console.log(arr);
		console.groupEnd();
		})();
	
/* Додаткові завдання.
 	1. На сайті зареєструвалися юзери в такій послідовності:
	Татарчук
	Їжачкова
	Гаврилюк
	Оберман
	SирeгНаɔkǝг
	Саксаганський
	Миловська
	Аніськов
	Єфремов
	Стробольський
	Ґрант
	Кацман
	Ступова
	Шамінська
	Вороний
	Ігнатьєва
	Сервер присилає список користувачів у вигляді масиву в порядку їх реєстрації 
	(по ідентифікатору в базі даних).
	Відображенням результату на клієнті займається функція userTable(a), що приймає в себе масив.
	Підкорегуйте масив, відсортувавши імена по алфавіту. */

	let arrUsers = ['Татарчук', 'Їжачкова', 'Гаврилюк', 'Оберман', 'SирeгНаɔkǝг', 
	'Саксаганський', 'Миловська', 'Аніськов', 'Єфремов', 'Стробольський', 'Ґрант', 'Кацман', 'Ступова',
	'Шамінська', 'Вороний', 'Ігнатьєва'];
	let vocabulary = 'abcdefghijklmnopqrstuvwxyzабвгґдеєжзиіїйклмнопрстуфхцчшщьюя';

	function userTable(a){
		a.sort(function(a, b){
			a = a.toLowerCase();
			b = b.toLowerCase();
			if (vocabulary.indexOf(a[0]) > vocabulary.indexOf(b[0])){
				return 1;
			} else {
				return -1;
			}
		});
	}

	userTable(arrUsers);

	console.groupCollapsed('Список користувачів, посортований в алфавітному порядку');
	console.log(arrUsers);
	console.groupEnd();

// 2. Переберіть всіх користувачів та виводьте в консоль кожне прізвище, в якому є м'який знак.
	
	console.groupCollapsed(`Прізвища з масиву, в яких є м'який знак`);
	arrUsers.forEach(function(item){
		if (item.indexOf('ь') !== -1){
			console.log(item);
		}
	});
	console.groupEnd();

/* 3. Знайдіть серед користувачів першу, у якої прізвище закінчується на ова, єва, ка, 
		запишіть її прізвище у змінну, щоб роздрукувати у запиті СБУ.
		Знайдіть індекс користувача з прізвищем на букву С, 
		сьогодні акція, йому на рахунок треба зачислити 5 уно-баксів. */

	let firstUser = arrUsers.find(findFirstSurname);
	
	function findFirstSurname(surname){
		if (surname.lastIndexOf('ова') !== -1 || surname.lastIndexOf('єва') !== -1 || surname.lastIndexOf('ка') !== -1){
			return surname;
		}
	}
	console.groupCollapsed('Перший користувач з масиву, прізвище якого закінчується на ова, єва, ка');
	console.log(firstUser);
	console.groupEnd();

	let userS = arrUsers.find((item) => item.indexOf('С') !== -1);
	console.groupCollapsed(`Перший користувач з прізвищем на букву "С":`);
	console.log(userS);
	console.groupEnd();

/*	4. На сайті є анкета, довкола кожної літери прізвища малюються квадратики.
	Створіть масив чисел по кількості букв кожного прізвища. */
	
	let arrSurnameNumbers = [];
	arrUsers.map(function(item){
		arrSurnameNumbers.push(item.length);
	});	
	console.groupCollapsed(`Масив з кількостей букв кожного прізвища:`);
	console.log(arrSurnameNumbers);
	console.groupEnd();

/*	5. Сервер надсилає на клієнт масив цін на продукцію 
	(придумайте довільний масив чисел чи згенеруйте функцією).
	На клієнті потрібно відобразити продукти від дорогого до дешевого, 
	зробивши 12%-у накрутку на товари.
	Якщо ціна товара починається на 2 - діє 10%-а знижка на цю одиницю товара.
	Відсортуйте масив цін по спаданню, враховуючи накрутку та знижки.
	Виведіть в <p> відсортований список цін через кому-пробіл.
	(В реальних випадках клієнт отримує масив об'єктів та знижка надається по іншим критеріям,
	 наприклад, по дню тижня). */

	let arrPrice = [];
	let arrPriceUpdate = [];
	let listHTML = document.querySelector('.cars-zapch');
	
	for(i = 0; i < 50; i++){
		arrPrice.push(Math.floor(Math.random()*100) + 1);
	}

	arrPrice.sort(function(a, b){
		return b - a;
	}).forEach(function(item){
		let pricePercent = Math.floor(item + item * 0.12);
		if (pricePercent.toString()[0] === '2'){
			pricePercent = +(pricePercent * 0.9).toFixed(2);
		}
		arrPriceUpdate.push(pricePercent);
	});

	listHTML.innerHTML = arrPriceUpdate.join(', ');

/* 6.	Створіть функцію, що емулює запит до сервера: 
	видає кількість лайків до 10 постів (рандомні значення 0..100)
	Користувач налаштував собі відображення 35 постів на екран.
	Ваша задача - посортувати пости по популярності (кількості лайків). */

	function getLikes(){
		let postLikes = [];
		for (let i = 0; i < 10; i++){
			postLikes.push(Math.floor(Math.random() * 100) + 1);
		}
		return postLikes;
	}

	let posts = [], serverLikes = [];
	while (posts.length < 35) {
		if (serverLikes.length === 0) {
			serverLikes = getLikes();
		}	
		posts.push(serverLikes.shift());
	} 

	posts.sort(function(a, b){
		return b - a;
	});

	console.groupCollapsed('Масив з постів посортований по популярності за кількістю лайків');
	console.log(posts);
	console.groupEnd();

/* 7. Сервер присилає список запчастин, що є на складі.
	На клієнті потрібно перевірити, чи є дана запчастина на складі, 
	і видати користувачу підтвердження або заперечення.
	Пошук повинен бути нечуттєвим до регістру. Регулярні вирази тут використовувати не треба. */

	let zapchList = ['амортизатор', 'Втулка', 'картер', 'Торпедо', 'Стартер', 'колінвал', 'штуцер'];
	let zapch = 'торпедо';
	let present = zapchList.find(function(item){

		return item.toLowerCase() === zapch.toLowerCase();
	});
	console.groupCollapsed('Статус запчастини на складі');
	console.log(present ? 'Дана запчастина є на складі!' : 'На жаль запчастини немає на складі!');
	console.groupEnd();

/*	8. Користувачу потрібно дати посилання на сторінку замовлення запчастини виду:
	http://zapchasti.abc/z###
	створіть таку строку URL, в якій замість ### буде індекс запчастини. */

	let indexZapch = zapchList.findIndex(function(item){
		return item.toLowerCase() === zapch.toLowerCase();
	});

	let url = 'http://zapchasti.abc/z' + indexZapch;	
	console.groupCollapsed('Посилання на сторінку замовлення запчастини:');
	console.log(url);
	console.groupEnd();

/*	9. Сервер присилає список, сортований від дешевих до дорогих ноутбуків різних марок, 
	модель та ціну (доповніть список самі):

		Nocia, RG-17, 3600
		Samgun, KX-a56, 4500
		Nocia, RG-19, 4800
		Arec, Slim-T, 5330
		Nocia, RG-20, 5650
		Arec, Ultra-T, 6200

	Користувач шукає ноутбук фірми Nocia, потрібно відобразити рекламу найдорожчого ноутбука цієї марки.
	Передайте характеристики цього ноутбука в умовну функцію showAd(nout). */

	let arrNout = [
		['Nocia', 'RG-17', 3600], 
		['Samgun', 'KX-a56', 4500], 
		['Nocia', 'RG-19', 4800], 
		['Arec', 'Slim-T', 5330],
		['Nocia', 'RG-20', 5650],
		['Arec', 'Ultra-T', 6200]
	];

	arrNout.sort(function(a, b){
		if (a[0] === 'Nocia' && b[0] === 'Nocia'){
			return b[2] - a[2];
		} else if (a[0] === 'Nocia' && b[0] !== 'Nocia') {
			return -1;
		} else if (a[0] !== 'Nocia' && b[0] === 'Nocia'){
			return 1;
		}
	});

	console.groupCollapsed('Найдорожчий ноутбук марки Nocia');
	console.log(arrNout[0]);
	console.groupEnd();

/* 10. Створіть масив з 26 літер 'a' (англійська).
	Циклом замініть елементи з 2 по 26-й, щоб утворився масив з алфавітом.
	Спробуйте зробити те саме зі строками. */

	let arrFromALetters = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a',
	 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];

	let aCode = arrFromALetters[0].charCodeAt(0);
 	let arrEngAlphabet = arrFromALetters.map(function(item, i){
 		return String.fromCharCode(item.charCodeAt(0) + i);
 	});

 console.groupCollapsed('Масив з англійським алфавітом');
 console.log(arrEngAlphabet);
 console.groupEnd();

/* 11. Сервер прислав дані про ціни 50 товарів.
	Користувач проглядає третю сторінку, де відображено 10 товарів.
	Потрібно створити масив цін товарів для цієї сторінки і передати в функцію showTovars(a); */	

	(function(){
		let arrPrice = [];
		let arrThirdPrice = [];
		let list = document.querySelector('.goods-list');
		function getRandomPrice(){
			for (let i = 0; i < 50; i++){
				arrPrice.push(Math.floor(Math.random()*100 + 1));
			}
			return arrPrice;
		}
		getRandomPrice();
		arrThirdPrice = arrPrice.slice(20, 30);
		console.groupCollapsed('Масив, який складається з цін товарів для третьої сторінки')
		console.log(arrThirdPrice);
		console.groupEnd();
		
		function showTovars(a){
			a.map(function(item){
				list.innerHTML += `<li>${item}</li>`;
			});
		}

		showTovars(arrThirdPrice);
	})();

/* 12. Є у нас картярська гра, на столі ряд карт:
	4ч
	7х
	8б
	Вх
	Дп
	10х
	Тп
	2ч
	шукаємо через indexOf  потім splice і вставляємо на її місце карту
	Користувач забрав 7 хрестову і поклав на її місце 10 бубну та 6 пікову.
	Користувач забрав 10 хрестову та туз піковий.
	Користувач перед валетом поклав 2 і 3 червові.
	Виведіть в консоль остаточний результат. */

	(function(){
		let cards = ['4ч', '7х', '8б', 'Вх', 'Дп', '10х', 'Тп', '2ч'];

		if (cards.indexOf('7х') !== -1){
			cards.splice(cards.indexOf('7х'), 1, '10б', '6п');
		}

		if (cards.indexOf('10х') !== -1){
			cards.splice(cards.indexOf('10х'), 1);	
		}

		if (cards.indexOf('Тп') !== -1){
			cards.splice(cards.indexOf('Тп'), 1);	
		}

		if (cards.indexOf('Вх') !== -1){
			cards.splice(cards.indexOf('Вх'), 0, '2ч', '3ч');
		}

		console.groupCollapsed('Остаточний результат масиву з карт:');
		console.log(cards);
		console.groupEnd();
	})();

/*	13. Створіть функцію, що повертає діаметр заготовки (болванки) в межах 49,5..51,5 мм.
	На складі є 52 заготовки.
	Поступило 4 заготовки.
	7 заготовок відправилися на обробку (станку потрібно знати їх діаметр).
	Прийшов підприємець Василь, приніс 6 заготовок і два по півлітра, 
	попросив обробити якнайшвидше, але не світити перед начальством, поставити десь їх в глибині склада.
	На склад привезли 3 заготовки з паладія і наказ - їх обробити в першу чергу!
	Прийшов токар Вася з візком на 6 деталей, йому кладовщик Грыша розказав про наказ і про півлітри.
	Вася за півлітри погодився поточити деталі, але спершу все ж таки взяв паладієві заготовки і ті, 
	що лежали поруч.
	Через пару годин Вася знову зайшов за заготовками, отримавши у нагороду півлітри.
	Що залишилося на складі? 
	Добавте в задачу функцію, що відбраковує заготовки: 
	ті, що менше 50 мм. - потрібно перевезти на інший склад. */

	(function(){

		// функція, яка видає випадковий діаметер заготовки
		function getRandomWorkpiece(){
			let d = (Math.random() * 2 + 49.5).toFixed(2);
			return d;
		}

		// заповнюємо масив 52 заготовками
		let arrWorkpiece = [];
		let i = 0;
		while (i < 52){
			arrWorkpiece.push(getRandomWorkpiece());
			i++;
		}
		console.groupCollapsed('Початковий масив з наявними 52 заготовками:');
		console.log(arrWorkpiece);
		console.groupEnd();
		
		// на склад поступило 4 заготовки
		for (let i = 0; i < 4; i++){
			arrWorkpiece.push(getRandomWorkpiece());	
		}
		console.groupCollapsed('Масив із заготовками після надходження на склад 4 заготовок:');
		console.log(arrWorkpiece);
		console.groupEnd();

		// 7 заготовок відправилося в обробку з черги з початку
		let arrProcessingFirst = [];
		while (arrProcessingFirst.length < 7){
			arrProcessingFirst.push(arrWorkpiece.shift());
		}
		console.groupCollapsed('Масив із 7 заготовок, які пішли першочергово в роботу:');
		console.log(arrProcessingFirst);
		console.groupEnd();

		// принесли 6 заготовок, попросили не світити перед начальством і поставити їх всередині складу
		for (let i = 0; i < 6; i++){
			arrWorkpiece.splice(26, 0, getRandomWorkpiece());
		}

		// привезли 3 заготовки і наказали обробити їх у першу чергу
		for (let i = 0; i < 3; i++){
			arrWorkpiece.unshift(getRandomWorkpiece());
		}

		let arrProcessingHighPriority = arrWorkpiece.splice(0, 6);
		console.groupCollapsed('Масив з заготовками, який складається з 3 паладієвих, які наказали зробити в першу чергу та з 3 наступних:');
		console.log(arrProcessingHighPriority);
		console.groupEnd();
		
		let arrWorkpieceAlco = arrWorkpiece.splice(26, 6);
		console.groupCollapsed('Масив із 6 заготовками, які попросили зробити за півлітра:');
		console.log(arrWorkpieceAlco);
		console.groupEnd();

		console.groupCollapsed('Масив із заготовками, що залишилися на складі:');
		console.log(arrWorkpiece);
		console.groupEnd();

		// функція, що відбирає заготовки для транспортування на інший склад
		function filterWorkpiece(arr){
			let n = [];
			for (let i = 0; i < arr.length; i++){
				if (arr[i] < 50){
					n.push(arr.splice(i, 1));
					i--;
				}
			}
			return n;
		}

		let arrTransferToStoreHouse = filterWorkpiece(arrWorkpiece);
		console.groupCollapsed('Масив із бракованих заготовок, які менше 50 мм для транспортування на інший склад:');
		console.log(arrTransferToStoreHouse);
		console.groupEnd();

		console.groupCollapsed('Масив із заготовками, які більше 50 мм та які залишились на поточному складі:');
		console.log(arrWorkpiece);
		console.groupEnd();

	})();

/*	14. Поштове відділення. Дано шафу з полицями: 5 полиць в ряд і 8 рядів. 
	Потрібно отримати масив про наявність вільних місць на полицях, 
	якщо на одну полицю поміщається 50 конвертів. 50 - 1 1 вільне місце
	Чи є хоч одна полиця порожня? some
	Чи на всіх полицях не менше двох листів? every */

	(function(){
		let arr = [];
		for (let i = 0; i < 5; i++){
			arr[i] = [];
			for (let j =0; j < 8; j++){
				arr[i][j] = Math.floor(Math.random() * 51);
			}
		}
		let arrFreePlaces = arr.map(function(row){
			return row.map(function(item){
				return 50 - parseInt(item);
			});
		});
		
		console.groupCollapsed('Масив про наявність конвертів на полицях');
		console.log(arr);
		console.groupEnd();
		console.groupCollapsed('Масив про наявність вільних місць полицях');
		console.log(arrFreePlaces);
		console.groupEnd();

		let arrEmptyPlaces = arr.some(function(row){
			return row.some(function(item){
				return parseInt(item) === 0;
			});
		});

		console.groupCollapsed('Чи є хоч одна полиця порожня?');
		console.log(arrEmptyPlaces ? 'Так' : 'Ні');
		console.groupEnd();

		let arrMoreThanTwoLetters = arr.every(function(row){
			return row.every(function(item){
				return parseInt(item) > 2;
			});
		});

		console.groupCollapsed('Чи на всіх полицях не менше двох листів?');
		console.log(arrMoreThanTwoLetters ? 'Так' : 'Ні');
		console.groupEnd();
	})();

(function (){

 let alph = 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюя';

 let arr = ["Вінниця","Дніпро","Донецьк","Житомир","Запоріжжя",
 "Івано-Франківськ","Київ","Кропивницький","Луганськ","Луцьк",
 "Львів","Миколаїв","Одеса","Полтава","Рівне","Суми","Тернопіль",
 "Ужгород","Харків","Херсон","Хмельницький","Черкаси","Чернівці","Чернігів"];

 arr.sort(function(a,b){
  a = a.toLowerCase().split("").reverse().join();
  b = b.toLowerCase().split("").reverse().join();
  let n = Math.max(a.length, b.length);
  for (let i = 0; i < n; i++){
   let x = a[i];
   let y = b[i];
   if (!x) return -1;
   if (!y) return 1;
   x = alph.indexOf(x);
   y = alph.indexOf(y);
   if (x > y) return 1;
   if (x < y) return -1;
  }
 });

 console.log(arr);
 
})();