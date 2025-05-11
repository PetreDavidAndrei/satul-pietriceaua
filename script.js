<script>
  let currentHeaderIndex = 0;
  const headers = [
    {
      title: "Pietriceaua",
      subtitle: "Un sat pitoresc în inima comunei Brebu, perfect pentru relaxare și explorare",
      image: "banner1.jpg",
    },
    {
      title: "Descoperă Natura",
      subtitle: "Peisaje spectaculoase și aer curat în Pietriceaua",
      image: "banner2.jpg",
    },
    {
      title: "Tradiții și Istorie",
      subtitle: "Cunoaște cultura și obiceiurile satului Pietriceaua",
      image: "banner3.jpg",
    },
  ];

  function moveHeader(direction) {
    const headerElement = document.querySelector('header.banner');
    const headerContent = headerElement.querySelector('.header-content');

    headerContent.style.opacity = '0';
    headerContent.style.transform = direction === 'left' ? 'translateX(-100px)' : 'translateX(100px)';

    setTimeout(() => {
      if (direction === 'left') {
        currentHeaderIndex = (currentHeaderIndex === 0) ? headers.length - 1 : currentHeaderIndex - 1;
      } else {
        currentHeaderIndex = (currentHeaderIndex === headers.length - 1) ? 0 : currentHeaderIndex + 1;
      }

      const header = headers[currentHeaderIndex];
      headerContent.querySelector('h1').innerText = header.title;
      headerContent.querySelector('.subtitle').innerText = header.subtitle;
      headerElement.style.backgroundImage = `url('${header.image}')`;

      headerContent.style.transition = 'none';
      headerContent.style.transform = direction === 'left' ? 'translateX(100px)' : 'translateX(-100px)';

      requestAnimationFrame(() => {
        headerContent.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
        headerContent.style.transform = 'translateX(0)';
        headerContent.style.opacity = '1';
      });
    }, 300);
  }
</script>
