let recentPosts = document.querySelector('.recent-posts');

let titlePosts = []

fetch('/components/recent-posts.html')
.then(response => response.text())
.then((data)=>{
    recentPosts.innerHTML = data;
})
.catch(()=>{
    console.error('Deu algo errado no recent-posts.js')
})

fetch('/data/index.json')
.then(response => response.json())
.then((json)=>{
    titlePosts = json;
    let ulElement = document.createElement('ul');

    titlePosts.map((item)=>{
        let aElement = document.createElement('a');
        let liElement = document.createElement('li');
        let text = item.titulo;
        aElement.innerHTML = text;
        aElement.href = item.caminho_do_post;
        liElement.appendChild(aElement);
        ulElement.appendChild(liElement);
        recentPosts.appendChild(ulElement);
    })
})
.catch(()=>{
    console.error('Deu algo errado na segunda parte de recent-posts.js');
    
})
