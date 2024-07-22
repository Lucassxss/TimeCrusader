document.querySelectorAll('ul li a').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();

        const href = event.currentTarget.getAttribute('href').substring(1);

        document.querySelectorAll('.console-details').forEach(section => {
            section.classList.remove('active');
        });

        document.getElementById(href).classList.add('active');
        document.getElementById(href).scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});