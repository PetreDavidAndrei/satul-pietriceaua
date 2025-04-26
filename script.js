let currentHeaderIndex = 0;
const headers = [
    {
        title: "Pietriceaua",
        subtitle: "Un sat pitoresc în inima comunei Brebu, perfect pentru relaxare și explorare",
        image: "banner1.jpg",
    },
    {
        title: "Despre Satul Pietriceaua",
        subtitle: "Informații suplimentare despre istoria satului, locuri de interes și atracții",
        image: "banner2.jpg",
    },
    {
        title: "Găsește-ți Rădăcinile",
        subtitle: "Explorând tradițiile și cultura Pietriceaua",
        image: "banner3.jpg",
    },
];

function moveHeader(direction) {
    const headerElement = document.querySelector('header.banner');
    const headerContent = headerElement.querySelector('.header-content');

    // Animatie de iesire
    headerContent.style.opacity = '0';
    headerContent.style.transform = (direction === 'left') ? 'translateX(-100px)' : 'translateX(100px)';

    setTimeout(() => {
        // Update index
        if (direction === 'left') {
            currentHeaderIndex = (currentHeaderIndex === 0) ? headers.length - 1 : currentHeaderIndex - 1;
        } else if (direction === 'right') {
            currentHeaderIndex = (currentHeaderIndex === headers.length - 1) ? 0 : currentHeaderIndex + 1;
        }

        const header = headers[currentHeaderIndex];
        
        headerContent.querySelector('h1').innerText = header.title;
        headerContent.querySelector('.subtitle').innerText = header.subtitle;
        headerElement.style.backgroundImage = `url(${header.image})`;

        // Reset animatie pentru intrare
        headerContent.style.transition = 'none';
        headerContent.style.transform = (direction === 'left') ? 'translateX(100px)' : 'translateX(-100px)';

        // Trigger reflow ca sa aplice resetarea
        void headerContent.offsetWidth;

        headerContent.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
        headerContent.style.transform = 'translateX(0)';
        headerContent.style.opacity = '1';
    }, 400);
}

document.addEventListener("DOMContentLoaded", () => {
    const headerElement = document.querySelector('header.banner');
    headerElement.classList.add('initial');
});
