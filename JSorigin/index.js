// console.log('abc');

// //задачи на циклы 1
// // Место для первой задачи
// function firstTask() {
//     for (let i = 5; i <= 10; i++) {
//         console.log(i);
//     }
// }
// console.log(firstTask());

// // задача 2
// function secondTask() {
//     for (let i = 20; i >= 10; i--) {
//          if (i === 13) return;
//          console.log(i);
      
//      }
//  }
 
//  // Место для третьей задачи
//  function thirdTask() {
//      for (let i = 2; i <= 10; i++) {
//          if (i % 2 === 0) {
//              console.log(i);
//          }
//      }
//  }
 

//массивы и псевдомассивы 
 const arr = [7, 1, 5, 6, 8];
//псевдомассивы
// они без методов 



//  arr.sort(compareNum);      //  выведет в порядке возрастания

//  console.log(arr);
// function compareNum(a, b) { // сортировка 
//     return a - b;
// }


//  arr.pop();  //удаляет последний элемент массива
//  arr.push(10); // добавляет в конец элемент

//  console.log(arr);

// for(let i = 0; i < arr.length; i++) {  // перебор массива через цикл
//     console.log(arr[i]);
// }

// for (let value of arr) {        // через метод for of перебор массива
//     console.log(value)
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// }) ;          //перебор элементов через этот метод внутри массива
// // //выведет  0: 1 внутри массива 1,2,3,6,8

// const str = prompt("", "");
// const products = str.split(", ");  // сформировываем массив на основании строк
// products.sort(); // сортирует элементы по алфавиту
//                 // 
// console.log(products.join('; ')); // выведет элементы через точку с запятой




// //callback функция 
// function learnJS (lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback()
// }

// function done () {
//     console.log('Я прошёл этот урок!')
// }

// learnJS('JavaScript', done);
    
// //или 
// learnJS('JavaScript', function() {        // callback функция через анонимную функцкию
//     console.log('Я прошёл этот урок!');
// });



// // ОБьекты и деструктуризация обьектов 
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'red',
//         bg: 'black'
//     },
//     makeTest: function() {              // методы объекта 
//         console.log('test');
//     }

// };


// #2
//перебор внутри с помощью условий и выводим вложенный обьект 
// console.log(options['colors']);   // вызывает отдельный ключ colors и показывает значения 
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {     //внутри этого обьекта запускаем перебор внутри 
//         for (let i in options[key] ) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]} `);  // перебор в ключе colors во вложенном обьекте 
//         }
//     }else {
//         console.log(`Свойство ${key} имеет значение ${options[key]} `);
//     }
// }   


// options.makeTest();
// //#деструктуризации обьекта 
// const {border, bg} = options.colors;   //указываем переменные которые хотим вытащить  
// console.log(border);   // выведет red 


// #1
//перебор всех свойств объекта через for in
//выводим значения в качестве строк 
// for (let key in options) {
//     console.log(`Свойство ${key} имеет значение ${options[key]} `);  // options[key] указывает путь на значения ключа 
// }       


// #2
//перебор внутри с помощью условий и выводим вложенный обьект 
// console.log(options['colors']);   // вызывает отдельный ключ colors и показывает значения 
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {     //внутри этого обьекта запускаем перебор внутри 
//         for (let i in options[key] ) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]} `);  // перебор в ключе colors во вложенном обьекте 
//         }
//     }else {
//         console.log(`Свойство ${key} имеет значение ${options[key]} `);
//     }
// }   


//# 3 
//Свойства и методы объекта 
// console.log(Object.keys(options).length);  // метод берет обьект и на ее основании создает массив ключей
// length выводит сколько элементов внутри в объектах 


// function chet (par) {                   // четное или нечетное возвращает true или false
//     return par % 2 === 0 ;
// }
// console.log(chet(23));


//передача по ссылке и по значению , оператор spread

// let a = 5,
//     b = a;

// b = b + 5;    

// console.log(b);
// console.log(a);


// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // Ссылка и модифицирует изначальный объект
// copy.a = 10;

// console.log(copy);
// console.log(obj);


// КОПИИ ОБЬЕКТОВ И МАССИВОВ + SPREAD 
// При помощи цикла создадим новый обьект for in
// function copy (mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy [key] = mainObj [key];
//     }
//     return objCopy;
// }
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };
// const newNumbers = copy(numbers);
// newNumbers.a = 9;


// // console.log(newNumbers);
// // console.log(numbers);




// // ДЕЛАЕМ КОПИЮ ОБЬЕКТА
// const add = {
//     d: 17,
//     e: 20
// };
// // console.log(Object.assign(numbers, add)); // поверхностная копия 

// const clone = Object.assign({}, add); // сделали копию из обьекта add
// clone.d = 20;
// console.log(add);
// console.log(clone);

// //ДЕЛАЕМ КОПИЮ МАССИВА

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice(); // метод копирования массива
// newArray[1] = 'Anthony';
// console.log(newArray);
// console.log(oldArray);


// // ОПЕРАТОР РАЗВОРОТА SPREAD
// const video = ['youtube', 'vim', 'rutube'],
//       blogs = ['wordpress', 'lifejournal', 'blogger'],   // тепперь добавляем из video and blogs в internet (и добавили еще свои)
//       internet = [...video, ...blogs, 'vk', 'facebook'];  

// console.log(internet);

// ////////////////////////////
// function log(a, b, c, y) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(y);
// }
// const num = [2, 5, 7, 8]; // массив данных 
// log(...num);
// ///////////////////////////// 

// // ЕЩЕ ПРИМЕР СO SPREAD 

// const array = ['a', 'b'];
// const newArr = [...array];

// // ОБЬЕКТЫ
// const q = {
//     one: 1,
//     two: 2,
//     three: 3
// };

// const newObj = {...q};
// console.log(q);
// console.log(newObj);


// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', ''),
//                   b = prompt('На сколько оцените его?', '');
        
//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log("Вы классический зритель");
//         } else if (personalMovieDB.count >= 30) {
//             console.log("Вы киноман");
//         } else {
//             console.log("Произошла ошибка");
//         }
//     },
//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function() {
//         for (let i = 1; i < 2; i++) {
//             let genre = prompt(`Ваш любимый жанр под номером ${i}`);

//             if (genre === '' || genre == null) {
//                 console.log('Вы ввели некорректные данные или не ввели их вовсе');
//                 i--;
//             } else {
//                 personalMovieDB.genres[i - 1] = genre;
//             } 
            
//             // Альтернативный вариант из урока
            
//             let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

//             if (genres === '' || genres == null) {
//                 console.log('Вы ввели некорректные данные или не ввели их вовсе');
//                 i--;
//             } else {
//                 personalMovieDB.genres = genres.split(', ');
//                 personalMovieDB.genres.sort();
//             } 
//         }

//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     }
// };





// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };
// function showProgrammingLangs() {
//        for (let key in personalPlanPeter) {
//         if(typeof(personalPlanPeter[key][i]) === 'object') {
//             for(let i in personalPlanPeter[key]) {
//                 return `Язык ${i} изучен на ${personalPlanPeter[key][i]}`;
//             }
//         } else {
//             return `Язык ${key} изучен на ${personalPlanPeter[key]}`;
//         }

//        }
// }          
// console.log(showProgrammingLangs());







// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'red',
//         bg: 'black'
//     },
// };



// console.log(options['colors']);   // вызывает отдельный ключ colors и показывает значения 
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {     //внутри этого обьекта запускаем перебор внутри 
//         for (let i in options[key] ) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]} `);  // перебор в ключе colors во вложенном обьекте 
//         }
//     }else {
//         console.log(`Свойство ${key} имеет значение ${options[key]} `);
//     }
// }   





// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }

// showExperience(personalPlanPeter);
// console.log(showExperience());


// ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ 

// to string  ПРЕВРАЩАЕМ В СТРОКУ ПРИМЕРЫ
// //1)
// console.log(typeof(String(null)));

// //2 Конкатенация 
// console.log(typeof(5 + ''));

// //3
// const num = 5;
// console.log('https://vk.com/catalog/' + num);

// const fontSize = 26 + 'px';
// console.log(fontSize);

// // ПРЕВРАЩАЕМ В ЧИСЛО
// //1)
// console.log(typeof(Number('4')));

// //2) Унарный плюс 
// console.log(typeof(+'5'));

// //3
// console.log(typeof(parseInt('15px', 10)));

// let answer = +prompt('hello', '');

// // Boolean преобразование 
// // всегда false
// // ----->
// // 0, '', null, undefined, NaN;

// //1)
// let switcher = null;

// switcher = 1;

// if (switcher) {
//     console.log('Working...');
// }

// //2)
// console.log(typeof(Boolean('4')));

// //3)
// console.log(typeof(!!'44444'));





// let age = +prompt('Сколько лет', '');
// console.log(age);


// function createCounter () {
//     let counter = 0;
//     const myFunction = function() {
//         counter = counter + 1;
//         return counter;
//     }
//     return myFunction;
// }

// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// console.log(c1, c2, c3);


// 1: let a = 3
// 2: function addTwo(x) {
// 3:   let ret = x + 2
// 4:   return ret
// 5: }
// 6: let b = addTwo(a)
// 7: console.log(b)


// 1: let val1 = 2
// 2: function multiplyThis(n) {
// 3:   let ret = n * val1
// 4:   return ret
// 5: }
// 6: let multiplied = multiplyThis(6)
// 7: console.log('example of scope:', multiplied)




// 1: let val = 7
//  2: function createAdder() {
//  3:   function addNumbers(a, b) {
//  4:     let ret = a + b
//  5:     return ret
//  6:   }
//  7:   return addNumbers
//  8: }
//  9: let adder = createAdder()
// 10: let sum = adder(val, 8)
// 11: console.log('example of function returning a function: ', sum)




// 1: function createCounter() {
//     2:   let counter = 0
//     3:   const myFunction = function() {
//     4:     counter = counter + 1
//     5:     return counter
//     6:   }
//     7:   return myFunction
//     8: }
//     9: const increment = createCounter()
//    10: const c1 = increment()
//    11: const c2 = increment()
//    12: const c3 = increment()
//    13: console.log('example increment', c1, c2, c3)


// function foo(a,b) {
//     const [first] = a;
//     const {eng} = b;
 
//     return `${first} ${eng}`;
// }
 
// const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});
// console.log(result);


// function made (lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done () {
//     console.log('Я выучил этот урок!');
// }
// made('JavaScript', done);

// Обьектно ориентированное программирование 
// const soldier = {
//     health: 400,
//     armor: 100
// };

// // const john = {
// //     health: 100,
// //     sayHello: function() {
// //         console.log('Hello');
// //     }
// // };

// // Обьект будет прототипно наследоваться от soldier 
// const john = Object.create(soldier);


// // Object.setPrototypeOf(soldier, john);



// john.sayHello();

// let x = 5; alert(x++);
// console.log(x);

// [] + false - null + true
// console.log([] + false - null + true);  // NaN

// let y = 1;
// let x = y =2;   // справа налево y = 2 выведет 2
// alert(x);


// // [] + 1 + 2    // конкатенация массив превращает цифры в строку и склеивает их
// console.log([] + 1 + 2);  // 12

// alert ('2'[0]); // выведет 1 


// 2 && 1 && null && 0 && undefined

// console.log(2 && 1 && null && 0 && undefined); // остановится на первом ложном элементе и выведет его в консоль
// И запинается на лжи 
// ИЛИ запинает на правде 

// console.log(!!(1 && 2) === (1 && 2));
// !! - превращает в булевые значения и поэтому тип данных не сходится

// console.log(null || 2 && 3 || 4);  // выведет 3 

// const a = [1, 2, 3];     // false
// const b = [1, 2, 3];     // два разных хранилища информации

// console.log(a == b);

// alert (+'infinity'); // выведет infinity 
// но и превращает в тип данных Number так как стоит унарный + 
// перед строкой 

// console.log('Ёжик' > 'Яблоко');

// console.log(0 || '' || 2 || undefined || true || false);
// выведет 2 так как ИЛИ останавливается на ПРАВДЕ 

// function TASK 

// let a = 3  // глобальная область выполнения 
// function addTwo(x) {
//     let ret = x + 2
//     return ret
// }
// let b = addTwo(a)
// console.log(b)
// // 2
// let val1 = 2   //Это глобальная область                //1
// function multiplyThis(n) {     //2
//  let ret = n * val1
//   return ret
// }
// let multiplied = multiplyThis(6) // ЭТО ГЛОБАЛЬНАЯ ОБЛАСТЬ ВЫП
// console.log('example of scope:', multiplied);
// //3 
// let val = 7
//  function createAdder() {
//     function addNumbers(a, b) {
//       let ret = a + b
//      return ret
//     }
//     return addNumbers
//   }
//   let adder = createAdder()
//  let sum = adder(val, 8)
//  console.log('example of function returning a function: ', sum)

// // замыкание 
// function createCounter() {   //1
//      let counter = 0   //2
//       const myFunction = function() { //3
//         counter = counter + 1 //4
//         return counter //5
//       } //6
//       return myFunction //7
//      } //8
//     const increment = createCounter() //9
//     const c1 = increment() //10
//     const c2 = increment() // 11
//     const c3 = increment() //12
//     console.log('example increment', c1, c2, c3); //13


// ЛЕКЦИЯ 42 ОСНОВЫ JavaScript 
// получение элементов со страницы 

// обращаемся к id -ку 
// const box = document.getElementById('box');
// console.log(box);
// обращение к тегаМ
// получаем отдельную кнопку по тегам  обращаемся к тегам 
// const btns = document.getElementsByTagName('button')[1]; // [1] получаем вторую кнопку с помощью [1] как в массивах 
// // console.log(btns);  // [1] тоже возможно в консоль вывести отдельно  
// // получаем отдельную кнопку 

// // Обращаемся к классам  // обращение к отдельным элементам [1], [2]
// const circle = document.getElementsByClassName('circle');
// // console.log(circle);

// // метод querySelectorAll
// // CSS - селектор вмещаем, уникальный id, класс, псевдоклассы,
// // атрибуты 
// // если ищем id тут то ставим вначале #
// // const name = document.querySelectorAll('.box');
// // name.forEach(item => {   //item это каждый элемент который 
// //     // console.log(item);      // находится в псевдомассиве name
// // });

// //получает первый элемент под селектор 
// const oneName = document.querySelector('button'); // позволяет вызвать только первый элемент
// // console.log(oneName);





// // Лекция 43 ОСНОВЫ JS
// // действия с элементами на странице
// // обращаемся к классам и меняем значение CSS свойства
// const box = document.getElementById('box');
// //  const btn = document.getElementsByTagName('button');
// const btn = document.querySelectorAll('button');


//  box.style.backgroundColor = 'red'; // цвет 
//  box.style.width = '300px'; // ширина 
// // обращаемся к кнопке определенной [1] номер как в массиве 
//  btn[1].style.width = '100px';
//  // в нормальном css коде можно записать еще 
//  box.style.cssText = 'background-color: blue; width: 350px;'
//  // обращаемся ко всем элементам по тегу, можно и по классу 
//  // с помощью цикла 
// //  for (let i = 0; i < btn.length; i++) {
// //     btn[i].style.backgroundColor = 'red';
// //  }

// ИЛИ МЕТОДОМ ПЕРЕБОРА FOR EACH ОБРАЩАЕМСЯ К ЭЛЕМЕНТАМ 
// ПОЗВОЛЯЕТ РАБОТАТЬ СО ВСЕМИ ЭЛЕМЕНТАМИ
// btn.forEach(item => {
//     item.style.backgroundColor = 'red';
// });


// создание элемента , сохраняет только в JS файле 
// в скобках название тега который хотим создать 
// const div = document.createElement('div');
// // создание текста 
// // const text = document.createTextNode('ТУТ БЫЛ Я !');

// // действия с КЛАССОМ 
// // add - добавить класс в тег div который создали 
// div.classList.add('black');

// // БЕРЕМ ТЕГ BODY и помещаем в него тег DIV
// document.body.append(div);

// div.style.backgroundColor = 'red';
// div.style.width = '150px';

// // Добавляем НОВЫЙ БЛОК ПО КЛАССУ В КОНЕЦ 
// document.querySelector('.decl').append(div);


// decl.append(div);
 

// // создание элемента и перемещение нового 
// // const declair = querySelector('.decl');
// const div = document.createElement('div'); // создаем элемент div
// div.classList.add('red'); // добавляем класс black тегу созданному div
// // document.querySelector('.decl').append(div); // добавляем элемент div с классом red в конец родителя блока с классом .decl
// // document.querySelector('.decl').append(div);

// // прописали стили к этому элементу созданному в JS 
// div.style.backgroundColor = 'red';
// div.style.width = '100px';
// div.style.height = '150px';
// document.querySelectorAll('.decl').append(div);
// вставляем в начало родителя созданный элемент 
// document.querySelector('.decl').prepend(div);

// вставляем перед каким или после какого элемента
// btn[0] переменная с тегами button обращение к 1 элементу
// before - перед элементом button вставляем созданный тег div с классом red 
// btn[0].before(div);
// after - в конце определнному элемента 
// btn[1].after(div);
// btn[0].remove(); // удаление определенного элемента 

// замена одного элемента другим 
// btn[0].replaceWith(circle[0]); // берем 1-ый элемент в btn переменной и заменяем первый circle

// создали новый тег добавили ему класс footer__new
// и закинули в конец его в родитель блока decl 
// const declair = querySelectorAll('.decl');
// const footer = document.createElement('footer')
// footer.classList.add('footer__new')
// // declair.append(footer);
// document.querySelector('.decl').append(footer);

// // добавляем текст с помощью js на страницу
// const classRoom = document.createElement('div'); // создаем элемент с тегом 
// classRoom.classList.add('navigation');
// classRoom.innerHTML = 'hello world'
// document.querySelector('.decl').append(classRoom);

// // вставляем кусочек HTML кода 
// // вставляем перед тегом div с классом navigation заголовок 
// // который создали ранее 
// classRoom.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');




// function isOpen(prop) {   debugger
//     let answer = ''; debugger
//     prop ? answer = 'Закрыто' : answer = 'Открыто'; debugger

//     return anwser; 
// }

// console.log(isOpen(openNow))

// обработчики событий и события
//click - при клике
//mouseenter - при наведении мышки на элемент 
// будет выполнять что-то 
//    addEventListener добавлять обработчик событий 
 //   removeEventListener

// const btn = document.querySelector('button');
// const overlay = document.querySelector('.overlay');
// const link = document.querySelector('.link-host');

// const deleteElem = (e) => {
//     // console.log(e.currentTarget);
//     // console.log(e.type);
//     // i++;
//     // if (i == 1) {
//     //     btn.removeEventListener('click', deleteElem);
//     // };
// };

// btn.addEventListener('click', deleteElem);
// overlay.addEventListener('click', deleteElem);

// link.addEventListener('click', function(event) {
//     event.preventDefault();  // отменяет переход к ссылке
//     console.log('Hello'); // и выводит сообщение 
// });


// // добавляем событие сразу нескольким кнопкам
// btn.forEach(item => {
//     item.addEventListener('click', deleteElem, {once: true});
// });

// опция 
// {once: true} делает один только клик на кнопку 

// 46)
// НАВИГАЦИЯ ПО DOM - элементам 
