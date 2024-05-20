document.getElementById('botao-cafe').addEventListener('click', botaoCafe);

function botaoCafe() {
  fetch('https://coffee.alexflipnote.dev/random.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao carregar café :(');
      }
      return response.url;
    })
    .then(imageUrl => {
      const imagemCafe = document.getElementById('imagem-cafe');
      const image = new Image();
      image.src = imageUrl;
      image.alt = 'Coffe Api';
      imagemCafe.innerHTML = '';
      imagemCafe.appendChild(image);
    })
    .catch(error => {
      console.error('Erro a obter café :(', error);
    });
}