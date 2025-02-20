function respond(answer) {
    if (answer === 'yes') {
      document.getElementById('message').classList.remove('hidden');
      createFireworks();
    } else if (answer === 'no') {
      moveButtonRandomly();
    }
  }
  
  function moveButtonRandomly() {
    const noButton = document.querySelector('.no-button');
    
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    
    const randomX = Math.floor(Math.random() * maxX); 
    const randomY = Math.floor(Math.random() * maxY); 
  
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
  }
  
  
  
  function createFireworks() {
    const fireworksContainer = document.getElementById('fireworks');
    const fireworkCount = 300;
    
    for (let i = 0; i < fireworkCount; i++) {
      const firework = document.createElement('div');
      firework.classList.add('firework');
      
      firework.style.left = `${Math.random() * window.innerWidth}px`;
      firework.style.top = `${Math.random() * window.innerHeight}px`;
      
      fireworksContainer.appendChild(firework);
      
      setTimeout(() => {
        firework.remove();
      }, 1500);
    }
  }
  