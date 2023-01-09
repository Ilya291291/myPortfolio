
const btnsSidebar = document.querySelector('.buttons__sidebar')
const btns = document.querySelectorAll('.button__sidebar')
const sects = document.querySelectorAll('.section')

const bodyCl = document.querySelector('.main__content')
const toggler = document.querySelector('.button__sidebar-change')
const text = document.querySelectorAll('.sep_color')
const languageBtn = document.querySelector('.button__sidebar-change-langs')
const certificates = document.querySelectorAll('.educ-info')
const imgCert = document.querySelectorAll('.educ__cert-img')

btnsSidebar.addEventListener('click', function(e) {
    const id = e.target.dataset.id;
    if (id) {
        // remove active class from other buttons
        btns.forEach(function(btn){
            btn.classList.remove('active-btn');
            e.target.classList.add('active-btn');
        });
        // hide other sections
        sects.forEach(function(sect){
            sect.classList.remove('active');
        });
        const elem = document.getElementById(id);
        elem.classList.add('active');
    }
});
let isColorDark = true;
function setDarkColor(){
    const text = document.querySelectorAll('.sep_color-orange')
    bodyCl.classList.remove('light-mode')
    text.forEach(function(el){
        el.classList.remove('sep_color-orange')
        el.classList.add('sep_color')
    })
    document.querySelector('.header__content-left-shape').classList.remove('sep_color-orange-header')
}
function setLightColor(){
    const text = document.querySelectorAll('.sep_color')
    bodyCl.classList.add('light-mode')
    text.forEach(function(el){
        el.classList.remove('sep_color')
        el.classList.add('sep_color-orange')
    })
    document.querySelector('.header__content-left-shape').classList.add('sep_color-orange-header')
}
function handleToggle(){
    if(isColorDark){
        setLightColor()
        isColorDark = false
    }else {
        setDarkColor()
        isColorDark = true
    }
}
function refreshColors(){
    if(isColorDark){
        setDarkColor()
    }else{
        setLightColor()
    }
}
toggler.addEventListener('click', handleToggle)

certificates.forEach(function(button){ //получаем контейнет в котором хранятся кнопки и картинки
    button.addEventListener('click', function(){ //вешаем лисенер на каждуый контейнер
        const img = button.querySelector('.educ__cert-img') //при каждом клике отбираем картинку
        const btn = button.querySelector('.educ-item-certif') //саму кнопку
        btn.addEventListener('click',toggleTwoClasses(img, 'educ__cert-img--is-visible', 'educ__cert-img--is-hidden', 500)
        )//при нажатии на кнопку срабатывает функция коллбэк
    })
})
function toggleTwoClasses(elem, first, second, timeOfAnimation){
    console.log(second) //в функции 4 аргумента - класс (когда видно), класс (когда не видно), время анимации
    if(!elem.classList.contains(first)){ //проверяем есть ли класс, который открывает сертификат
        elem.classList.add(first) //если нет, то добавляем класс, чтобы открыть сертификат
        elem.classList.remove(second) // и параллельно убираем класс, который закрывает
    }else{
        elem.classList.add(second)
        window.setTimeout(function(){
            elem.classList.remove(first)
        },timeOfAnimation)
    }
}


// toggler.addEventListener('click', function(){
//     bodyCl.classList.toggle('light-mode')
//     // text.forEach(el => el.classList.toggle('sep_color-orange'))
//     text.forEach(function(el){
//         if(el.classList.value === 'sep_color'){
//             el.classList.remove('sep_color')
//             el.classList.add('sep_color-orange')
//         }else{
//             el.classList.remove('sep_color-orange')
//             el.classList.add('sep_color')
//         }
//     })
//     document.querySelector('.header__content-left-shape').classList.toggle('sep_color-orange-header')
// })
// console.log(getEventListeners(langs))
// const date = document.querySelectorAll('.date')
// date.forEach(function(d){
//     d.innerHTML = new Date().toLocaleDateString()
// })



