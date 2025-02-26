function createContent(content1, content2, content3, content4, content5) {
    content2.appendChild(content1);
    content3.appendChild(content2);
    content4.appendChild(content3);
    content5.appendChild(content4);
}

const sectionContent = document.querySelector('.content')

let posts = []

fetch('/data/index.json')
.then(response => response.json())
.then((json)=>{
    posts = json;

    posts.map((item)=>{
        let sectionDescription = document.createElement('section');
        let h1Element = document.createElement('h1');
        let aElementAssignment = document.createElement('a');
        let timeElement = document.createElement('time');
        let spanElement1 = document.createElement('span');
        let spanElement2 = document.createElement('span');
        let imgElement = document.createElement('img');
        let svgElement1 = document.createElement('i');
        let svgElement2 = document.createElement('i');
        let svgElement3 = document.createElement('i');
        let aElement = document.createElement('a');
        aElement.href = item.caminho_do_post;

        sectionDescription.classList.add('description', 'svgElement');
        svgElement1.classList.add('bi-calendar3', 'svgElement');
        svgElement2.classList.add('bi-pencil-square', 'svgElement');
        svgElement3.classList.add('bi-folder2-open', 'svgElement');
        aElementAssignment.classList.add('assignment', 'svgElement');

        imgElement.src = item.imagem;
        aElement.appendChild(imgElement);
        sectionContent.appendChild(aElement);

        aElementAssignment.href = 'http://www.freepik.com/';
        aElementAssignment.innerHTML = 'Designed by Freepik';
        aElement.appendChild(aElementAssignment);
        sectionContent.appendChild(aElement);

        let titleContet = document.createTextNode(item.titulo);
        h1Element.appendChild(titleContet);
        aElement.appendChild(h1Element);
        sectionContent.appendChild(aElement);

        createContent(svgElement1, timeElement, sectionDescription, aElement, sectionContent);

        let timeContent = document.createTextNode(item.data);
        createContent(timeContent, timeElement, sectionDescription, aElement, sectionContent);

        createContent(svgElement2, spanElement1, sectionDescription, aElement, sectionContent);

        let redaction = document.createTextNode(item.redacao);
        createContent(redaction, spanElement1, sectionDescription, aElement, sectionContent);

        createContent(svgElement3, spanElement2, sectionDescription, aElement, sectionContent);

        let category = document.createTextNode(item.categoria);
        createContent(category, spanElement2, sectionDescription, aElement, sectionContent);
    })
})
.catch(()=>{
    console.error('Deu algo errado no index.js!')
})