document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('nav a');

    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Oculta todas las secciones primero
                document.querySelectorAll('section').forEach(function (section) {
                    section.classList.remove('active');
                });

                // Muestra solo la sección correspondiente
                targetSection.classList.add('active');

                // Desplázate a la sección con animación
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

const patataElement = document.querySelector('p');
const infoBox = document.getElementById('info-box');

patataElement.addEventListener('mouseover', () => {
    infoBox.style.display = 'block';
});

patataElement.addEventListener('mouseout', () => {
    infoBox.style.display = 'none';
});