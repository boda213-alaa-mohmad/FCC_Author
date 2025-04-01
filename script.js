//Writing script fcc authors

let request = new XMLHttpRequest();
request.open('GET', 'https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json');

request.send();

request.addEventListener('load', () => {
    if (request.readyState === 4 && request.status === 200) {
        console.log(request);
        console.log(JSON.parse(request.responseText));
    }
})