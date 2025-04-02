//Writing script fcc authors
let authorContainer = document.getElementById('author-container');
let start = 0;
let end = 0;



let request = new XMLHttpRequest();
request.open('GET', 'https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json');
request.send();

request.addEventListener('load', () => {
    if (request.readyState === 4 && request.status === 200) {
        let authors = JSON.parse(request.responseText);
        authors.forEach(({ author, image, url, bio }, index) => {
        authorContainer.innerHTML += 
            `<div id="${index}" class="user-card">
                <h2 class="author-name">${author}</h2>
                <img class="user-img" src="${image}" alt="${author} avatar">
                <div class="purple-divider"></div>
                <p class="bio">${bio.length > 50 ? bio.slice(0, 50) + '...' : bio}</p>
                <a class="author-link" href="${url}" target="_blank">${author} author page</a>
            </div>`;
        });
    }
});