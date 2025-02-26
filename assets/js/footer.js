const footerElement = document.getElementById('footer');

fetch('/components/footer.html')
.then(response => response.text())
.then((data)=>{
    footerElement.innerHTML = data;
})
.catch(()=>{
    console.error('Deu algum erro no footer.js')
})