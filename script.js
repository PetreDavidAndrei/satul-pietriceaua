const headers = [
    {
        title: "Pietriceaua",
        subtitle: "Un colț liniștit de natură și tradiție",
        background: "images/banner.jpg"
    },
    {
        title: "Tradiții Păstrate",
        subtitle: "Obiceiuri autentice și povești locale",
        background: "images/banner.jpg"
    },
    {
        title: "Peisaje de Poveste",
        subtitle: "Dealuri, păduri și aer curat",
        background: "images/banner.jpg"
    }
];

let currentHeader = 0;

function updateHeader() {
    const headerContent = document.getElementById('header-content');
    headerContent.innerHTML = `
        <h1>${headers[currentHeader].title}</h1>
        <p class="subtitle">${headers[currentHeader].subtitle}</p>
    `;
    document.querySelector('header').style.background = `url('${headers[currentHeader].background}') center/cover no-repeat`;
}

function nextHeader() {
    currentHeader = (currentHeader + 1) % headers.length;
    updateHeader();
}

function previousHeader() {
    currentHeader = (currentHeader - 1 + headers.length) % headers.length;
    updateHeader();
}

