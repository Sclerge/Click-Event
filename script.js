const fooButton = document.getElementById('fooButton');
const barButton = document.getElementById('barButton');
const foobarButton = document.getElementById('foobarButton');


const main = document.querySelector('main');

fooButton.addEventListener('click', function() {
    const h3 = document.createElement('h3');
    h3.textContent = 'Foo';
    main.appendChild(h3);
});

barButton.addEventListener('click', function() {
    const h3 = document.createElement('h3');
    h3.textContent = 'Bar';
    main.appendChild(h3);
});

foobarButton.addEventListener('click', function() {
    const h2 = document.createElement('h2');
    h2.textContent = 'FooBar';
    main.appendChild(h2);
});
