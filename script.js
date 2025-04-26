let currentHeaderIndex = 0;
const headers = [
    {
        title: "Pietriceaua",
        subtitle: "Un sat pitoresc în inima comunei Brebu, perfect pentru relaxare și explorare",
        image: "banner.jpg",  // Imagine pentru primul header
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
    if (direction === 'left') {
        currentHeaderIndex = (currentHeaderIndex === 0) ? headers.length - 1 : currentHeaderIndex - 1;
    } else if (direction === 'right') {
        currentHeaderIndex = (currentHeaderIndex === headers.length - 1) ? 0 : currentHeaderIndex + 1;
    }

    const header = headers[currentHeaderIndex];
    const headerElement = document.querySelector('header.banner .header-content');
    headerElement.querySelector('h1').innerText = header.title;
    headerElement.querySelector('.subtitle').innerText = header.subtitle;
    document.querySelector('header.banner').style.backgroundImage = `url(${header.image})`;
}
