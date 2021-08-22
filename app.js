const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];



const list = document.querySelector('.gallery')
const modal = document.querySelector('.lightbox')
const modalImg = document.querySelector('.lightbox__image')

function createItem(item) {
  item.forEach(item => {
    const newItem = document.createElement('li')
    newItem.classList.add('gallery__item')
    // console.log(newItem);
    const newAnchor = document.createElement('data')
    newAnchor.classList.add('gallery__link')
    newAnchor.setAttribute('href', item.original)
    // console.log(newAnchor);
    const newImg = document.createElement('img')
    newImg.classList.add('gallery__image')
    newImg.setAttribute('src', item.preview)
    newImg.setAttribute('data-source', item.original)
    newImg.setAttribute('alt', item.description)
    
    newAnchor.append(newImg)
    newItem.append(newAnchor)
    // console.log(newItem);
    list.append(newItem)
  })
}
createItem(galleryItems)

const anchors = document.querySelector('.gallery__link')

list.addEventListener('click', (e) => {
  console.log(e.currentTarget);
  console.log(e.target.nodeName);
  console.log(e.target)
  if (e.target.nodeName === "IMG") {
    modal.classList.add('is-open')
    modalImg.setAttribute('src', e.target.dataset.source)
    modalImg.setAttribute('alt', e.target.alt)
  }
})

modal.addEventListener('click', (e) => {
  console.log(e.currentTarget);
  console.log(e.target.nodeName);
  console.log(e.target)
if (e.target.nodeName === "BUTTON") {
    modal.classList.remove('is-open')
  }
if (e.target.classList.contains('lightbox__overlay')) {
    modal.classList.remove('is-open')
}
})


window.addEventListener('keydown', (e) => {
  console.log(e.code);
  console.log(e.key);
  if (e.code === 'Escape') {
    modal.classList.remove('is-open')
  }
  if (e.code === 'ArrowLeft' || e.code === 'ArrowRight') {
    modal.classList.remove('is-open')
  }
})





