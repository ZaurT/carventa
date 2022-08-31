document.addEventListener('DOMContentLoaded', () => {
    const navBtn = document.querySelectorAll('.toggle-submenu');
    const closeBtn = document.querySelectorAll('.toggle-close');
    

    const navBtnClickHandler = (e) => {
        e.target.closest('li').querySelector('.submenu-holder').classList.add('active');
    }


    navBtn.forEach(item => item.addEventListener('click', navBtnClickHandler));

    const closeBtnClickHandler = (e) => {
        e.target.closest('.submenu-holder').classList.remove('active');
    }

    closeBtn.forEach(item => item.addEventListener('click', closeBtnClickHandler));
});