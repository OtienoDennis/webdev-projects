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

const listArray = [
  {
    logo: './assets/images/logo-devlens.svg',
    name: 'DevLens',
    description:
      'Quickly inspect page layouts and visualize element boundaries.',
    isActive: true,
  },
  {
    logo: './assets/images/logo-style-spy.svg',
    name: 'StyleSpy',
    description: 'Instantly analyze and copy CSS from any webpage element.',
    isActive: true,
  },
  {
    logo: './assets/images/logo-speed-boost.svg',
    name: 'SpeedBoost',
    description: 'Optimizes browser resource usage to accelerate page loading.',
    isActive: false,
  },
  {
    logo: './assets/images/logo-json-wizard.svg',
    name: 'JSONWizard',
    description:
      'Formats, validates, and prettifies JSON responses in-browser.',
    isActive: true,
  },
  {
    logo: './assets/images/logo-tab-master-pro.svg',
    name: 'TabMaster Pro',
    description: 'Organizes browser tabs into groups and sessions.',
    isActive: true,
  },
  {
    logo: './assets/images/logo-viewport-buddy.svg',
    name: 'ViewportBuddy',
    description:
      'Simulates various screen resolutions directly within the browser.',
    isActive: false,
  },
  {
    logo: './assets/images/logo-markup-notes.svg',
    name: 'Markup Notes',
    description:
      'Enables annotation and notes directly onto webpages for collaborative debugging.',
    isActive: true,
  },
  {
    logo: './assets/images/logo-grid-guides.svg',
    name: 'GridGuides',
    description:
      'Overlay customizable grids and alignment guides on any webpage.',
    isActive: false,
  },
  {
    logo: './assets/images/logo-palette-picker.svg',
    name: 'Palette Picker',
    description: 'Instantly extracts color palettes from any webpage.',
    isActive: true,
  },
  {
    logo: './assets/images/logo-link-checker.svg',
    name: 'LinkChecker',
    description: 'Scans and highlights broken links on any page.',
    isActive: true,
  },
  {
    logo: './assets/images/logo-dom-snapshot.svg',
    name: 'DOM Snapshot',
    description: 'Capture and export DOM structures quickly.',
    isActive: false,
  },
  {
    logo: './assets/images/logo-console-plus.svg',
    name: 'ConsolePlus',
    description:
      'Enhanced developer console with advanced filtering and logging.',
    isActive: true,
  },
];

function createContentCard(obj) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardDescription = document.createElement('div');
  cardDescription.classList.add('card-description');

  const image = document.createElement('img');
  image.src = obj.logo;
  image.alt = `${obj.name} icon`;

  const pText = document.createElement('p');
  const span = document.createElement('span');
  span.style.fontSize = 'larger';
  span.style.fontWeight = 'bolder';
  span.textContent = obj.name;

  const br = document.createElement('br');

  const text = document.createTextNode(obj.description);
  pText.appendChild(span);
  pText.appendChild(br);
  pText.appendChild(text);

  cardDescription.appendChild(image);
  cardDescription.appendChild(pText);

  card.appendChild(cardDescription);
  card.appendChild(createBtnSection(obj));
  return card;
}

function createBtnSection(obj) {
  const cardBtns = document.createElement('div');
  cardBtns.className = 'card-btns';

  const removeBtn = document.createElement('button');
  removeBtn.className = 'remove-btn';
  removeBtn.textContent = 'Remove';

  const toggleLabel = document.createElement('label');
  toggleLabel.className = 'toggle-switch';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = obj.isActive

  const slider = document.createElement('span');
  slider.className = 'slider';

  toggleLabel.appendChild(checkbox);
  toggleLabel.appendChild(slider);

  cardBtns.appendChild(removeBtn);
  cardBtns.appendChild(toggleLabel);

  return cardBtns;
}

listArray.forEach((obj) => itemsSection.appendChild(createContentCard(obj)));
