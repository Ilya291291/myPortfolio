let holder1 = document.querySelector('.lng-cname')
let holder2 = document.querySelector('.lng-cemail')
let holder3 = document.querySelector('.lng-csubject')
let holder4 = document.querySelector('.lng-cpholder')
const langsArr = {
    'h': {
        'ru': `Давайте познакомимся. Меня зовут <span class="sep_color">Илья</span>`,
        'en': `Hello, I'm <span class="sep_color">Ilya<span>`
    },
    'txt': {
        'ru': `Пара слов о себе. Я начинающий Frontend-разработчик. Люблю создавать красивые и функциональные сайты.`,
        'en': 'I am a self-taught frontend developper. I like creating beautiful and functional websites.'
    },
    'cv': {
        'ru': `Скачать резюме.`,
        'en': `Download CV`
    },
    'about': {
        'ru': `Обо <span class="sep_color">мне</span><span class="title-bg-text">Обо мне</span>`,
        'en': `About <span class="sep_color">me</span><span class="title-bg-text">About me</span>`
    },
    'about1': {
        'ru': `Я начинающий <span class="sep_color">Frontend-разработчик.</span>Начиная с февраля 2022 года я активно начал изучать и осваивать программирование, а именно Frontend-разработку.`,
        'en': `I am a <span class="sep_color">Frontend-developer</span>. Beginning from February 2022 I have started learning coding, including Javascript. Up intil now I have been honing my skills in the world of Frontend`
    },
    'about2': {
        'ru': ``,
        'en': ``
    },
    'myskills': {
        'ru': `Мои <span class="sep_color">навыки</span>`,
        'en': `<h4>My <span class="sep_color">skills</span></h4>`
    },
    'html': {
        'ru': `Сдандартизированный язык разметки документов в интернете`,
        'en': `is the standard markup language for documents designed to be displayed in a web browser.`
    },
    'css': {
        'ru': `Язык описания внешнего вида документа.`,
        'en': `CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.`
    },
    'js': {
        'ru': `Динамический скриптовый язык программирования высокого уровня для создания интерактивных веб-страниц и приложений.`,
        'en': `JavaScript is a dynamic programming language that allows us to create interactie web-pages and applications`
    },
    'node': {
        'ru': `Кроссплатформенная среда выполнения для JavaScript, которая работает на серверах.`,
        'en': `Node is a cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser.`
    },
    'react': {
        'ru': `JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.`,
        'en': `React is an open-source front-end JavaScript library for building user interfaces based on UI components.`
    },
    'git': {
        'ru': `Крупнейшая платформа для хранения, распространения и управления исходным кодом открытых проектов.`,
        'en': `Github is the largest platform where developers and companies build and maintain their software using the Git version control tool.`
    },
    'btrp': {
        'ru': `Фреймворк интерфейсных компонентов для создания интерактивных и адаптивных веб-приложений и веб-сайтов.`,
        'en': `Bootstrap is an open-source CSS framework directed at responsive, mobile-first front-end web development.`
    },
    'gulp': {
        'ru': `Таск-менеджер для автоматического выполнения часто используемых задач, написанный на языке программирования JavaScript.`,
        'en': `Gulp is a task manager for automatically performing frequently used tasks written in JavaScript programming language.`
    },
    'figma': {
        'ru': `Это графический онлайн-редактор для совместной работы.`,
        'en': `Figma is a graphic online-web application for interface design,`
    },
    'wbpck': {
        'ru': `Инструмент веб-разработчика, который соединяет JavaScript- и CSS-файлы в единое целое — файл.`,
        'en': `Webpack is the most popular build tool amongst web developers, which bundles your JS and CSS files together`
    },
    'vsc': {
        'ru': `Редактор кода для кроссплатформенной разработки веб- и облачных приложений.`,
        'en': `VSC is a code editor redefined and optimized for building modern, crossplatform web and cloud applications.`
    },
    'saas': {
        'ru': `Один из самых популярных CSS препроцессоров. Он представляет собой набор функций для CSS, которые позволяют кодить быстрее и эффективнее.`,
        'en': `Saas is one of the most popular preprocessors, that is interpreted or compiled into CSS to enhance its functionality.`
    },
    'educ': {
        'ru': `Образование и курсы`,
        'en': `Education and courses`
    },
    'educ': {
        'ru': `Образование и курсы`,
        'en': `Education and courses`
    },
    'date1': {
        'ru': `2022 февраль`,
        'en': `2022 February`
    },
    'link1': {
        'ru': `Знакомство с HTML и CSS на html academy`,
        'en': `Introduction to HTML&CSS at the html academy`
    },
    'date2': {
        'ru': `2022 сентябрь`,
        'en': `2022 September`
    },
    'link2': {
        'ru': `Сертификация по адаптивной <br>веб-верстке от freeCodeCamp`,
        'en': `Responsive Web Design Certification`
    },
    'date3': {
        'ru': `в процессе`,
        'en': `in the process`
    },
    'link3': {
        'ru': `Сертификация по Алгоритмам <br>JavaScript и структуре данных от freeCodeCamp`,
        'en': `Javascript Algorithms and Data Structures Certification.`
    },
    'link3': {
        'ru': `Сертификация по Алгоритмам <br>JavaScript и структуре данных от freeCodeCamp`,
        'en': `Javascript Algorithms and Data Structures Certification.`
    },
    'port': {
        'ru': `Мое <span class="sep_color">Портфолио</span><span class="title-bg-text">Мои работы</span>`,
        'en': `My <span class="sep_color">Portfolio</span><span class="title-bg-text">My works</span>.`
    },
    'projects': {
        'ru': `Здесь находятся мои проекты.`,
        'en': `Here are my projects.`
    },
    'origin': {
        'ru': `Источники проекта`,
        'en': `Project source`
    },
    'blog': {
        'ru': `Мой <span class="sep_color">блог</span><span class="title-bg-text">Мой блог</span>`,
        'en': `My <span class="sep_color">blog</span><span class="title-bg-text">My blog</span>`
    },
    'blogP': {
        'ru': `Здесь я буду выкладыать каждую неделю тот прогресс, который я достигаю.`,
        'en': `Here I am going to post my progress and steps that I take.`
    },
    'btxt1': {
        'ru': `Это первый пост. Поехали!`,
        'en': `This is the 1st post!`
    },
    'btxtp1': {
        'ru': `Здесь будет текст моего поста.`,
        'en': `Here is going to be the text of my post`
    },
    'bd1': {
        'ru': `Пятница 26.08.2022`,
        'en': `Friday 26.08.2022`
    },
    'btxt2': {
        'ru': `Этой второй пост! Медиа-запросы.`,
        'en': `This is the 2d post. Media-queries.`
    },
    'btxtp2': {
        'ru': `Пришлось поработать над медиа-запросами для корректного отображения сайта на разных устройствах!`,
        'en': `It has been a tough time working on this feature, so that the website is seen correctly on all devices.`
    },
    'bd2': {
        'ru': `Четверг 13.10.2022`,
        'en': `Thursday 13.10.2022`
    },
    'contacts': {
        'ru': `Мои <span class="sep_color">контакты</span><span class="title-bg-text">Мои контакты</span>`,
        'en': `My <span class="sep_color">contacts</span><span class="title-bg-text">My contacts</span>`
    },
    'ctxt': {
        'ru': `Связаться со мной можно любым удобным для вас способом, через социальные сети или по телефону.`,
        'en': `Feel free to contact me by phone number, email, or social networks`
    },
    'mob': {
        'ru': `Мобильный номер`,
        'en': `Mobile phone number`
    },
    'clngs': {
        'ru': `Языки`,
        'en': `Languages`
    },
    'clngstxt': {
        'ru': `Английский, немецкий`,
        'en': `English, German`
    },
    'cname': {
        'ru': `${holder1.placeholder="Ваше имя"}${holder1.value = ''}`,
        'en': `${holder1.placeholder="Your name"}${holder1.value = ''}`
    },
    'cemail': {
        'ru': `${holder2.placeholder="Ваш E-Mail"}${holder2.value = ''}`,
        'en': `${holder2.placeholder="Your E-mail"}${holder2.value = ''}`
    },
    'csubject': {
        'ru': `${holder3.placeholder="Предмет обсуждения"}${holder3.value = ''}`,
        'en': `${holder3.placeholder="Your subject"}${holder3.value = ''}`
    },
    'cpholder': {
            'ru': `${holder4.placeholder="Ваше сообщение"}${holder4.value = ''}`,
            'en': `${holder4.placeholder="Your message"}${holder4.value = ''}`
    },
    'ccv': {
        'ru': `Скачать резюме`,
        'en': `Download CV`
    },
    'homebtn': {
        'ru': `Домой`,
        'en': `Home`
    },
    'aboutbtn': {
        'ru': `Обо мне`,
        'en': `About me`
    },
    'portbtn': {
        'ru': `Портфолио`,
        'en': `Portfolio`
    },
    'blogbtn': {
        'ru': `Блог`,
        'en': `Blog`
    },
    'contactsbtn': {
        'ru': `Контакты`,
        'en': `Contacts`
    },
}

const langs = document.querySelector('.button__sidebar-change-langs')
// const allLangs = ['en', 'ru'] //для проверки, чтобы хэш не был удален, или не доступен
const languageSwitch = document.querySelector('.change-holder')
langs.addEventListener('click', function(el){
    //перенаправляем на url с указания языка
    let lang = el.target.id
    location.href = window.location.pathname+'#'+lang
    languageSwitch.classList.toggle('switch')
    for(let key in langsArr){
        if(lang === 'en'){
            document.querySelector('.lng-'+key).innerHTML = langsArr[key].en
            if(key === key){//если ключ одинаковый для нескольких предметов, то на каждый из них один и тот же ключ
                document.querySelectorAll('.lng-'+key).forEach(function(el)
                {el.innerHTML = langsArr[key].en})
        }}else{
            document.querySelector('.lng-'+key).innerHTML = langsArr[key].ru
            if(key === key){//если ключ одинаковый для нескольких предметов, то на каждый из них один и тот же ключ
                document.querySelectorAll('.lng-'+key).forEach(function(el)
                {el.innerHTML = langsArr[key].ru})
            }
        }
    }
    refreshColors()
})

// console.log(langsArr.h.en.includes('sep_color'))


// location.reload()
    // if(lang === 'en' === true){
    //     document.querySelector('.lng-h').innerHTML = langsArr.h.en
    // }else {
    //     document.querySelector('.lng-h').innerHTML = langsArr.h.ru
    // }

// function changeLangs(){
//     let hash = window.location.hash //получаем хэштег страницы
//     hash = hash.slice(1)
//     if(!allLangs.includes(hash)){
//         location.href = window.location.pathname+'#en' //перебрсывать на страницу, если меняется хэш
//         location.reload()
//     }
//     // console.log(hash)
//     langs.id = hash
//     for(let key in langsArr){
//         // document.querySelector('.lng-'+key).innerHTML = langsArr[key][hash]
        
//         if(key = key){ //если ключ одинаковый для нескольких предметов, то на каждый из них один и тот же ключ
//             document.querySelectorAll('.lng-'+key).forEach(function(el){
//                 el.innerHTML = langsArr[key][hash]
//             })
//         }
//     }
// }
// changeLangs()
// console.log(holder1)
