let headerElement = document.getElementById('header');

fetch('/components/header.html')
.then(response => response.text())
.then((data)=>{
    headerElement.innerHTML = data;
    const menu = document.querySelector('#menu');
    const dropdownItems = document.querySelector('.menu');
    menu.addEventListener('click', ()=>{
        dropdownItems.classList.toggle('clicked');
    });
    const exitMenu = document.querySelector('.exit-menu');
    exitMenu.addEventListener('click', ()=>{
        dropdownItems.classList.toggle('clicked');
    });
    const search = document.getElementById('search');
    const exitSearch = document.getElementById('exit-search');
    const dropdownItemsSearch = document.querySelector('.dropdown-items-search');
    search.addEventListener('click', ()=>{
        dropdownItemsSearch.classList.toggle('clicked')
    });
    exitSearch.addEventListener('click', ()=>{
        dropdownItemsSearch.classList.toggle('clicked');
    });
})
.catch(()=>{
    console.error('Algo deu errado no header.js!');
})