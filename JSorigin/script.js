/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


// 1)
const promotion = document.querySelectorAll('.promo__adv img');
     promotion.forEach(item => {
        item.remove();
     });
//2,3)
const poster = document.querySelector('.promo__bg');
const genre = document.querySelector('.promo__genre');
// const genre = poster.querySelector('.promo__genre'); // можно и так прописать 
genre.textContent = 'драма';  // когда нужно изменить текст 
poster.style.backgroundImage = 'url("img/bg.jpg")'; // чтобы изменить картинку просто указываем путь к картинке
//4
const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = ''; // Это позволяет все удалить когда пишешь пустую строку 
movieDB.movies.sort(); // если там (тип) строки то он сортирует по алфавиту сам

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>

    `;
});

//  a = a + 1;
//  a += 1;


// const str = prompt("", "");
// const products = str.split(", ");  // сформировываем массив на основании строк
// products.sort(); // сортирует элементы по алфавиту
//                 // 


