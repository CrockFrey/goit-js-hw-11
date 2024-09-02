export const createGalleryCardTemplate = imgInfo => {
  return `
  <li class="gallery-item">
      <a class="gallery-link" href="${imgInfo.largeImageURL}">
      <img class="gallery-img" src="${imgInfo.webformatURL}" alt="${imgInfo.tags}" />
      </a>
      <ul class="img-info-list">
        <li class="img-info-item">
          <p class="img-info-text">Likes</p>
          <p class="img-info-value">${imgInfo.likes}</p>
        </li>
        <li class="img-info-item">
          <p class="img-info-text">Views</p>
          <p class="img-info-value">${imgInfo.views}</p>
        </li>
        <li class="img-info-item">
           <p class="img-info-text">Comments</p>
          <p class="img-info-value">${imgInfo.comments}</p>
        </li>
        <li class="img-info-item">
          <p class="img-info-text">Downloads</p>
          <p class="img-info-value">${imgInfo.downloads}</p>
        </li>
      </ul>
  </li>
  `;
};