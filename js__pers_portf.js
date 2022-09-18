
const btnsSidebar = document.querySelector('.buttons__sidebar')
const btns = document.querySelectorAll('.button__sidebar')
const sects = document.querySelectorAll('.section')

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
