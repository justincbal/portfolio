import './styles/main.scss';
import './img/html-5.png';
const navItem = document.querySelectorAll('.nav-item');

navItem.forEach(item => {
    item.addEventListener('click', () => {
        console.log(item);

        for(let i = 0; i < 4; i++) {
            if(navItem[i].classList.contains('nav-active')) 
                navItem[i].classList.remove('nav-active');
        }

        item.classList.add('nav-active');

    })
})

