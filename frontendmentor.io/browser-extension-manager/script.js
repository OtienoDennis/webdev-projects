const itemsSection = document.querySelector('.items-section');

const themeIcon = document.querySelector('.theme-icon');
themeIcon.children[0].src = localStorage.getItem('themeIcon');
themeIcon.style.backgroundColor = localStorage.getItem('themeIconBgColor');

themeIcon.addEventListener('click', () => {
  const theme =
    document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('theme', theme);

  if (theme === 'dark') {
    localStorage.setItem('themeIconBgColor', '#2d3d5f');
  }

  if (theme === 'light') {
    localStorage.setItem('themeIconBgColor', '#C7C7C7');
  }
  themeIcon.style.backgroundColor = localStorage.getItem('themeIconBgColor');
});

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.dataset.theme = 'dark';
}

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      document.documentElement.dataset.theme = e.matches ? 'dark' : 'light';
    }
  });

// ARRAY

const listArray = {
  image: './assets/images/logo-devlens.svg',
  title: 'DevLens',
  text: 'Quickly inspect page layouts and visualize element boundaries.',
};
function createContentCard(obj) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardDescription = document.createElement('div');
  cardDescription.classList.add('card-description');

  const image = document.createElement('img');
  image.src = obj.image;
  image.alt = `${obj.title} icon`;

  const pText = document.createElement('p');
  const span = document.createElement('span');
  span.style.fontSize = 'larger';
  span.style.fontWeight = 'bolder';
  span.textContent = obj.title;

  const br = document.createElement('br');

  const text = document.createTextNode(obj.text);
  pText.appendChild(span);
  pText.appendChild(br);
  pText.appendChild(text);

  cardDescription.appendChild(image);
  cardDescription.appendChild(pText);

  card.appendChild(cardDescription);
  return card;
}



itemsSection.appendChild(createContentCard(listArray));
