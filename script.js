(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const h1 = document.querySelector('h1');
    const h2s = document.querySelectorAll('h2');
    const lines = document.querySelectorAll('hr');
    //const banner = document.querySelector('#banner');
    const sections = document.querySelectorAll('section');
    const lis = document.querySelectorAll('li');
    const allA = document.querySelectorAll('a');
    const quote = document.querySelector('blockquote');
    let mode = 'dark';

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            body.className = 'switch';
            //banner.className = 'switch';
            for (const line of lines) {
                line.className = 'switch';
            }
            button.className = 'switch';
            h1.className = 'switch';
            for (const h2 of h2s) {
                h2.className = 'switch';
            }
            document.querySelector("img").src = 'images/neon.png';
            for (const section of sections) {
                section.className = 'switch';
            }
            for (const li of lis) {
                li.className = 'switch';
            }
            for (const a of allA) {
                a.className = 'switch';
            }
            quote.className = 'switch';
            mode = 'light';
        } else {
            body.removeAttribute('class');
            //banner.removeAttribute('class');
            button.removeAttribute('class');
            for (const line of lines) {
                line.removeAttribute('class');
            }
            h1.removeAttribute('class');
            for (const h2 of h2s) {
                h2.removeAttribute('class');
            }
            document.querySelector("img").src = 'images/newspaper.png';
            for (const section of sections) {
                section.removeAttribute('class');
            }
            for (const li of lis) {
                li.removeAttribute('class');
            }
            for (const a of allA) {
                a.removeAttribute('class');
            }
            quote.removeAttribute('class');
            mode = 'dark'
        }
    })
})()