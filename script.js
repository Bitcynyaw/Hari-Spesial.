// Buka halaman kedua
document.querySelector('.open-btn').addEventListener('click', () => {
    document.querySelector('.page-1').style.display = 'none';
    document.querySelector('.page-2').style.display = 'block';
    document.getElementById('background-music').play();
  });
  
  // Countdown
  const eventDate = new Date("2024-12-14T00:00:00").getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;
  
    if (distance >= 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById('Hari').querySelector('span').textContent = days;
      document.getElementById('Jam').querySelector('span').textContent = hours;
      document.getElementById('Menit').querySelector('span').textContent = minutes;
      document.getElementById('Detik').querySelector('span').textContent = seconds;
    }
  }, 1000);
  
  // Galeri Foto
  let currentIndex = 0;
  const galleryImages = document.querySelectorAll('.gallery img');
  
  function showNextImage() {
    galleryImages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % galleryImages.length;
    galleryImages[currentIndex].classList.add('active');
  }
  
  setInterval(showNextImage, 5000);
  