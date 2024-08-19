let menuIcon = document.querySelector('#menu-Icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = querySelectorAll('header nav a');

window.onscroll = () => {
    sections .forEach(sec => {
        let top = window.scroll;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(Links => {
                Links.classList.remove('active');
                document.querySelector('header nav a [href "* ' + id + ']').classList.add ('active')
            })
        }
    });
     

}
    menuIcon.onClick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');

    }



