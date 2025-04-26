let currentHeaderIndex = 0;
const headers = [
    {
        title: "Pietriceaua",
        subtitle: "Un sat pitoresc în inima comunei Brebu, perfect pentru relaxare și explorare",
        image: "banner1.jpg",  // Imagine pentru primul header
    },
    {
        title: "Despre Satul Pietriceaua",
        subtitle: "Informații suplimentare despre istoria satului, locuri de interes și atracții",
        image: "banner2.jpg",  // Imagine pentru al doilea header
    },
    {
        title: "Găsește-ți Rădăcinile",
        subtitle: "Explorând tradițiile și cultura Pietriceaua",
        image: "banner3.jpg",  // Imagine pentru al treilea header
    },
];

function moveHeader(direction) {
    const headerElement = document.querySelector('header.banner');
    
    if (direction === 'left') {
        currentHeaderIndex = (currentHeaderIndex === 0) ? headers.length - 1 : currentHeaderIndex - 1;
    } else if (direction === 'right') {
        currentHeaderIndex = (currentHeaderIndex === headers.length - 1) ? 0 : currentHeaderIndex + 1;
    }

    const header = headers[currentHeaderIndex];
    const headerContent = headerElement.querySelector('.header-content');
    headerContent.querySelector('h1').innerText = header.title;
    headerContent.querySelector('.subtitle').innerText = header.subtitle;
    
    // Schimbarea imaginii și adăugarea animației de glisare
    headerElement.style.backgroundImage = `url(${header.image})`;
    headerElement.style.transform = 'translateX(-100%)'; // Glisare la stânga
    
    setTimeout(() => {
        headerElement.style.transition = 'transform 1s ease';  // Tranziție pentru glisare
        headerElement.style.transform = 'translateX(0%)'; // Revine la poziția inițială
    }, 100);
}
