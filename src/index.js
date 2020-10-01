import css from "./css/style.css";

// ШАБЛОНИЗАЦИЯ И ВСТРАИВАНИЕ В DOM

// испортирую массив с постами
import posts from './posts.json';
// console.log(posts)

// испортирую шаблон
import templatePost from './post.hbs';
// console.log(templatePost)

// создаю элементы постов с помощью вызова шаблона
// и передачи в него массива постов
const postItem = templatePost(posts)
// console.log(postItem)

// получаю доступ в элементу html, куда буду
// встраивать сгенерированные шаблонизатором посты
const postsList = document.querySelector('.posts')

// встраиваю посты в html
postsList.insertAdjacentHTML('afterbegin', postItem)


// replace theme
function changeTheme (theme) {
  let body = document.querySelector('body'), alt;
  theme == 'dark' ? alt = 'light' : alt = 'dark'
  body.classList.add(theme+'-theme');
  body.classList.remove(alt+'-theme');
}

let theme = localStorage.getItem('changeTheme'); 
const input = document.querySelector('.theme-switch__toggle')

console.log(theme);
if(theme == 'dark') {
  input.checked = true;
  changeTheme('dark')
} else{
  changeTheme('light')
}

input.addEventListener('click', (e) => {
  console.log(e.target.checked)
  if (e.target.checked) {
    changeTheme('dark')
    localStorage.setItem('changeTheme', "dark")
  } else {
    changeTheme('light')
    localStorage.setItem('changeTheme', "light")
  }
})