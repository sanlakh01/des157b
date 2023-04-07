(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const h1 = document.querySelector('h1');
    const h2s = document.querySelectorAll('h2');
    const lines = document.querySelectorAll('hr');
    const image = document.querySelector('img');
    const sections = document.querySelectorAll('section');
    const lis = document.querySelectorAll('li');
    const allA = document.querySelectorAll('a');
    const quote = document.querySelector('blockquote');
    let mode = 'dark';

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            body.className = 'switch';
            image.className = 'switch';
            for (const line of lines) {
                line.className = 'switch';
            }
            button.className = 'switch';
            h1.className = 'switch';
            for (const h2 of h2s) {
                h2.className = 'switch';
            }
            image.src = 'images/neon.png';
            image.alt = 'layered neon signs';
            for (const section of sections) {
                section.className = 'switch';
            }
            for (const li of lis) {
                li.className = 'switch';
            }
            for (const a of allA) {
                a.className = 'switch';
            }
            document.querySelector("footer").innerHTML = '<blockquote class="switch">&ldquo;To shine your brightest light is to be who you truly are.&rdquo; &ndash; Roy T. Bennet</blockquote>';
            mode = 'light';
        } else {
            body.removeAttribute('class');
            image.removeAttribute('class');
            button.removeAttribute('class');
            for (const line of lines) {
                line.removeAttribute('class');
            }
            h1.removeAttribute('class');
            for (const h2 of h2s) {
                h2.removeAttribute('class');
            }
            image.src = 'images/newspaper.png';
            image.alt = 'layered image of newspaper sheets';
            for (const section of sections) {
                section.removeAttribute('class');
            }
            for (const li of lis) {
                li.removeAttribute('class');
            }
            for (const a of allA) {
                a.removeAttribute('class');
            }
            document.querySelector("footer").innerHTML = "<blockquote>&ldquo;You can never get a book long enough to suit me.&rdquo; &ndash; C.S. Lewis</blockquote>";
            mode = 'dark';
        }
    })
})()