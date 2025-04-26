let currentHeaderIndex = 0;
const headers = [
    {
        title: "Pietriceaua",
        subtitle: "Un sat pitoresc în inima comunei Brebu, perfect pentru relaxare și explorare",
        image: "banner.jpg",  // Placeholder, va fi schimbat când adaugi imagini
    },
    {
        title: "Despre Satul Pietriceaua",
        subtitle: "Informații suplimentare despre istoria satului, locuri de interes și atracții",
        image: "banner2.jpg",  // Placeholder, va fi schimbat când adaugi imagini
    },
    {
        title: "Găsește-ți Rădăcinile",
        subtitle: "Explorând tradițiile și cultura Pietriceaua",
        image: "banner3.jpg",  // Placeholder, va fi schimbat când adaugi imagini
    },
];

function moveHeader(direction) {
    if (direction === 'left') {
        currentHeaderIndex = (currentHeaderIndex === 0) ? headers.length - 1 : currentHeaderIndex - 1;
    } else if (direction === 'right') {
        currentHeaderIndex = (currentHeaderIndex === headers.length - 1) ? 0 : currentHeaderIndex + 1;
    }

    updateHeader();
}

function updateHeader() {
    const header = headers[currentHeaderIndex];
    const headerElement = document.querySelector('header.banner .header-content');
    headerElement.querySelector('h1').innerText = header.title;
    headerElement.querySelector('.subtitle').innerText = header.subtitle;
    document.querySelector('header.banner').style.backgroundImage = `url(${header.image})`;
}
