document.getElementById('readExcerpt').addEventListener('click', function() {
  document.getElementById('excerpt').style.display = 'block';
});

// Seleciona o elemento do player do YouTube
const youtubePlayer = document.getElementById('youtube-player');
    
// Adiciona um ouvinte para o evento 'timeupdate' do player
youtubePlayer.addEventListener('timeupdate', function() {
  // Define o tempo em segundos após o qual o botão de compra será exibido
  const showBuyButtonAt = 60; // Exemplo: aparece após 60 segundos

  // Verifica se o tempo atual do vídeo atingiu o ponto desejado
  if (youtubePlayer.currentTime >= showBuyButtonAt) {
    // Exibe o botão de compra
    document.getElementById('buy-button').style.display = 'block';
  }
});
