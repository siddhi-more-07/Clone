// show play btn when hover on card
const cards = document.querySelectorAll('.row-cards .card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    const playBtn = card.querySelector('.play-btn');
    if (playBtn) {
      playBtn.style.display = 'flex';
      playBtn.style.transform = 'translateY(20px)';
      playBtn.style.opacity = '1';
    }
  });

  card.addEventListener('mouseleave', () => {
    const playBtn = card.querySelector('.play-btn');
    if (playBtn) {
        playBtn.style.transform = 'translateY(0px)';

      playBtn.style.opacity = '0';
      setTimeout(() => {
        playBtn.style.display = 'none';
      }, 500); 
    }
  });
});


// Preventing the default context menu from appearing on right-click
window.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});


// view on desktop
window.onload = function() {
  if (window.innerWidth < 1200) {
      document.getElementById('desktopView').style.display = 'none';
      document.getElementById('mobileMessage').style.display = 'block';
  } else {
      document.getElementById('desktopView').style.display = 'block';
      document.getElementById('mobileMessage').style.display = 'none';
  }
};

window.onresize = function() {
  if (window.innerWidth < 1200) {
      document.getElementById('desktopView').style.display = 'none';
      document.getElementById('mobileMessage').style.display = 'block';
  } else {
      document.getElementById('desktopView').style.display = 'block';
      document.getElementById('mobileMessage').style.display = 'none';
  }
};
