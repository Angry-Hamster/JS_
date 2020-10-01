import css from "./css/style.css";

// ШАБЛОНИЗАЦИЯ И ВСТРАИВАНИЕ В DOM

// импортирую массив с постами
import posts from './posts.json';

// импортирую шаблон
import templatePost from './post.hbs';

// создаю элементы постов с помощью вызова шаблона
// и передачи в него массива постов
const postItem = templatePost(posts)
 

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

const input = document.querySelector('.theme-switch__toggle')

if(localStorage.getItem('changeTheme') == 'dark') {
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