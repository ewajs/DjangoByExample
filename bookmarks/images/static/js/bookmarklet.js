const siteUrl = '//127.0.0.1:8000/';
const styleUrl = siteUrl + 'static/css/bookmarklet.css';
const minWidth = 250;
const minHeight = 250;

// Load CSS
const head = document.getElementsByTagName('head')[0];
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = styleUrl + '?r=' + Math.floor(Math.random()*9999999999999999);
head.appendChild(link);

// load HTML
const body = document.getElementsByTagName('body')[0];
const boxHtml = `
<div id="bookmarklet">
    <a href="#" id="close">&times;</a>
    <h1>Select an image to bookmark:</h1>
    <div class="images"></div>
</div>`;
body.innerHTML += boxHtml;


function bookmarkletLaunch() {
    const bookmarklet = document.getElementById('bookmarklet');
    const imagesFound = bookmarklet.querySelector('.images');
    // clear images found
    imagesFound.innerHTML = '';
    // display bookmarklet
    bookmarklet.style.display = 'block';
    // close event
    bookmarklet.querySelector('#close').addEventListener('click', () => bookmarklet.style.display = 'none');
    // find images in the DOM with the minimum dimensions
    const images = document.querySelectorAll('img[src$=".jpg"], img[src$=".jpeg"],img[src$=".png"]');
    images.forEach(image => {
        if(image.naturalWidth >= minWidth && image.naturalHeight >= minHeight) {
            const imageFound = document.createElement('img');
            imageFound.src = image.src;
            imagesFound.append(imageFound);
        }
    });
}

// launch the bookmkarklet
bookmarkletLaunch();