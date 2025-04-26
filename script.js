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
    
    if (direction === 'left') {
        currentHeaderIndex = (currentHeaderIndex === 0) ? headers.length - 1 : currentHeaderIndex - 1;
    } else if (direction === 'right') {
        currentHeaderIndex = (currentHeaderIndex === headers.length - 1) ? 0 : currentHeaderIndex + 1;
    }

    const header = headers[currentHeaderIndex];
    
    headerContent.querySelector('h1').innerText = header.title;
    headerContent.querySelector('.subtitle').innerText = header.subtitle;

    // Animația de glisare a headerului
    headerElement.style.transition = 'transform 1s ease'; // Animație pentru glisare
    headerElement.style.transform = 'translateX(-100%)'; // Glisează în afacere

    setTimeout(() => {
        // După terminarea animației, schimbăm imaginea și poziția
        headerElement.style.backgroundImage = `url(${header.image})`;
        headerElement.style.transform = 'translateX(100%)'; // Glisăm la dreapta pentru a face schimbarea
    }, 100);

    // Revenim la poziția inițială după o scurtă întârziere pentru o tranziție lină
    setTimeout(() => {
        headerElement.style.transition = 'transform 1s ease';
        headerElement.style.transform = 'translateX(0%)'; // Reveniți la poziția originală
    }, 1100);
}

// Asigură-te că imaginea se încarcă imediat la început
document.addEventListener("DOMContentLoaded", () => {
    const headerElement = document.querySelector('header.banner');
    headerElement.classList.add('initial');
});
