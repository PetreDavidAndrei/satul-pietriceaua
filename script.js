document.querySelector('.arrow-left').addEventListener('click', function() {
  const headers = document.querySelectorAll('.header-secondary');
  let activeIndex = Array.from(headers).findIndex(header => header.classList.contains('active'));
  
  if (activeIndex > 0) {
    headers[activeIndex].classList.remove('active');
    headers[activeIndex - 1].classList.add('active');
  } else {
    headers[activeIndex].classList.remove('active');
    headers[headers.length - 1].classList.add('active');
  }
});

document.querySelector('.arrow-right').addEventListener('click', function() {
  const headers = document.querySelectorAll('.header-secondary');
  let activeIndex = Array.from(headers).findIndex(header => header.classList.contains('active'));
  
  if (activeIndex < headers.length - 1) {
    headers[activeIndex].classList.remove('active');
    headers[activeIndex + 1].classList.add('active');
  } else {
    headers[activeIndex].classList.remove('active');
    headers[0].classList.add('active');
  }
});
