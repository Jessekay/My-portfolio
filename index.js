const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu');
const body = document.querySelector('body');
function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  body.classList.toggle('scroll-lock');
}
hamburger.addEventListener('click', mobileMenu);

const navLink = document.querySelectorAll('.nav-link');

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  body.classList.remove('scroll-lock');
}
navLink.forEach((n) => n.addEventListener('click', closeMenu));

function limitWords(paragraph, limit) {
  const words = paragraph.split(' ');
  if (words.length <= limit) return paragraph;

  const limitedWords = words.slice(0, limit);

  let limitedParagraph = limitedWords.join(' ');

  limitedParagraph += '...';

  return limitedParagraph;
}

const projects = [
  {
    id: 1,
    title: 'African Movie Fest',
    company: 'AMF',
    post: 'Front End Dev',
    year: '2020',
    image: './images/Movie fest.png',
    technologies: ['html', 'css', 'javascript'],
    description:
      'Engage with speakers and producers on one on one basis.',
    details:
      'Africa movies was established in 2020 to bring on-board the African youth to the Movie industry. We welcome you for our third screening event',
    liveVersion: 'https://jessekay.github.io/AMS/',
    githubLink: 'https://github.com/Jessekay/AMS',
  },
  {
    id: 2,
    title: 'ProBall',
    company: 'Jesse & sons',
    post: 'Full Stack Dev',
    year: '2025',
    image: './images/Proball.png',
    technologies: ['html', 'css', 'PHP', 'javascript'],
    description:
      'The best sports market for ballers around the world selling the best quality balls to help them shine.',
    details:
      'Top-quality sportd balls for every game. Fast shipping, epic deals, just pure play power. Gear up now and dominate the field.',
    liveVersion: 'https://jessekay.github.io/ProBall/',
    githubLink: 'https://github.com/Jessekay/ProBall',
  },
  {
    id: 3,
    title: 'Awesome Books',
    company: 'AB',
    post: 'Front End Dev',
    year: '2023',
    image: './images/awesome books.png',
    technologies: ['html', 'css', 'javascript'],
    description:
      "Awesome Books is a website that stores the books with their title and authors respectively. A user is able to add a new book and delete that book",
    details:
      'The best platform where to store and manage the best books to read in your free time.',
    liveVersion: 'https://jessekay.github.io/AwesomeBookES6/',
    githubLink: 'https://github.com/Jessekay/AwesomeBookES6',
  },
  {
    id: 4,
    title: 'Library App',
    company: 'BookStore',
    post: 'Front End Dev',
    year: '2023',
    image: './images/Library-App.png',
    technologies: ['html', 'css', 'javascript'],
    description:
      'A smart assistant library to make reading more easy, efficient, and fun by unlocking your most expensive computer: your book.',
    details:
      'Library app helps you track the books you have to read and be able to add or remove them after reading.',
    liveVersion: 'https://jessekay.github.io/Library-App/',
    githubLink: 'https://github.com/Jessekay/Library-App',
  },
   {
    id: 5,
    title: 'DriveSmart',
    company: 'BookStore',
    post: 'UI/UX Designer',
    year: '2023',
    image: './images/drivesmart.png',
    technologies: ['html', 'css', 'javascript'],
    description:
      'Track your lessons, view your schedule, and stay ahead of your driving goals with DriveSmart.',
    details: 'Track your driving lessons, view your schedule, and stay on top of your goals with DriveSmart — your personal driving companion. Manage bookings, monitor progress, and get reminders to never miss a lesson. Whether you are a beginner or improving your skills, DriveSmart helps you learn efficiently and achieve driving success confidently.',
    liveVersion: 'https://www.figma.com/proto/ZuT6gpjQ96o1BGFl01Zyma/Untitled?node-id=4-41&starting-point-node-id=4%3A41',
    githubLink: 'https://github.com/Jessekay/Library-App',
  },
];

const container = document.getElementById('works-container');

for (let i = 0; i < projects.length; i +=1) {
  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.classList.add('card-img');
  image.src = projects[i].image;
  image.alt = `work-${i + 1}`;
  card.appendChild(image);

  const details = document.createElement('div');
  details.classList.add('card-details');
  card.appendChild(details);

  const item = document.createElement('div');
  item.classList.add('card-item-mg');
  details.appendChild(item);

  const title = document.createElement('h3');
  title.classList.add('card-title');
  title.textContent = projects[i].title;
  item.appendChild(title);

  const info = document.createElement('div');
  info.classList.add('card-info');
  item.appendChild(info);

  const company = document.createElement('span');
  company.classList.add('info-active');
  company.textContent = projects[i].company;
  info.appendChild(company);

  const dot1 = document.createElement('img');
  dot1.src = './images/dot.svg';
  dot1.alt = 'dot';
  info.appendChild(dot1);

  const role = document.createElement('span');
  role.textContent = projects[i].post;
  info.appendChild(role);

  const dot2 = document.createElement('img');
  dot2.src = './images/dot.svg';
  dot2.alt = 'dot';
  info.appendChild(dot2);

  const year = document.createElement('span');
  year.textContent = projects[i].year;
  info.appendChild(year);

  const description = document.createElement('p');
  description.classList.add('card-descrip', 'card-item-mg');
  const parag = projects[i].description;
  description.textContent = limitWords(parag, 18);
  details.appendChild(description);

  const tags = document.createElement('ul');
  tags.classList.add('card-tags', 'card-item-mg');
  details.appendChild(tags);

  for (let j = 0; j < projects[i].technologies.length; j +=1) {
    const tag = document.createElement('li');
    tag.classList.add('card-tag');
    tag.textContent = projects[i].technologies[j];
    tags.appendChild(tag);
  }

  const action = document.createElement('div');
  action.classList.add('card-action');
  details.appendChild(action);

  const button = document.createElement('button');
  button.classList.add('card-btn');
  button.id = `card-${projects[i].id}`;
  button.textContent = 'See Project';
  action.appendChild(button);

  container.appendChild(card);
}

const ProjectPopup = (
  id,
  title,
  company,
  post,
  year,
  image,
  technologies,
  details,
  liveVersion,
  githubLink,
) => {
  let technologyList = '';
  for (let i = 0; i < technologies.length; i += 1) {
    technologyList += `<li class="card-tag">${technologies[i]}</li>`;
  }

  return `<div class="pop-head">
  <div class="pop-head-container">
    <h3 class="card-title">${title}</h3>
    <div class="card-info">
      <span class="info-active">${company}</span>
      <img src="./images/dot.svg" alt="dot" />
      <span>${post}</span>
      <img src="./images/dot.svg" alt="dot" />
      <span>${year}</span>
    </div>
  </div>
  <button id="pop-btn">&times;</button>
</div>
<div class="pop-img">
  <img class="card-img" src="${image}" />
</div>
<div class="pop-content">
  <p class="card-descrip card-item-mg">
    ${details}
  </p>
  <div class="pop-footer">
    <ul class="card-tags card-item-mg">
      ${technologyList}
    </ul>
    <span class="span"></span>
    <div class="pop-actions">
      <button class="pop-button" onclick="window.open('${liveVersion}', '_blank')">
        <span>See live</span>
        <img src="images/live-pop.svg" />
      </button>
      <button class="pop-button" onclick="window.open('${githubLink}', '_blank')">
        <span>See source</span>
        <img src="images/github2.svg" />
      </button>
    </div>
  </div>
</div>`;
};

projects.forEach((aProject) => {
  const btnShowProject = document.getElementById(`card-${aProject.id}`);
  btnShowProject.addEventListener('click', () => {
    const thePopupCardShows = document.getElementById('popupCard');
    const htmlToInsert = ProjectPopup(
      aProject.id,
      aProject.title,
      aProject.company,
      aProject.post,
      aProject.year,
      aProject.image,
      aProject.technologies,
      aProject.details,
      aProject.githubLink,
      aProject.liveVersion,
    );
    thePopupCardShows.innerHTML = htmlToInsert;

    const overly = document.getElementById('overly');
    overly.classList.toggle('hidden');
    thePopupCardShows.classList.toggle('popup-hidden');

    const closePopBtn = document.getElementById('pop-btn');

    closePopBtn.addEventListener('click', () => {
      const thePopupCardShows = document.getElementById('popupCard');
      thePopupCardShows.innerHTML = '';
      overly.classList.toggle('hidden');
      thePopupCardShows.classList.toggle('popup-hidden');
    });
  });
});
// form validation

const form = document.getElementById('form');
const email = document.getElementById('email_address');
const error = document.getElementById('error-msg');

error.style.display = 'none';

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    error.style.display = 'block';
    error.innerHTML = 'invalid email!';
  }
});

document.querySelector('.resume').addEventListener('click', () => {
  const fileUrl = '/files/Jesse.pdf';
  const fileName = 'Jesse.pdf';

  const a = document.createElement('a');
  a.href = fileUrl;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
});