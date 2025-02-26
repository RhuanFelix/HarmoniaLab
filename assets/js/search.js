let searchElement = document.querySelector('.search');

fetch('/components/search.html')
.then(response => response.text())
.then((data)=>{
    searchElement.innerHTML = data;
})

.catch(()=>{
    console.error('Algo não deu certo no search.js');
})