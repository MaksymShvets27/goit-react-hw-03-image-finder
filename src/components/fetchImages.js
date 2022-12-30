import axios from 'axios';

const ApiKey = '31277754-8952e55c2ce1852b40f45b8fd';

const options = {
  responseType: 'json',
};

export default async function fetchImages(seachName, page) {
  let imgResponce = await axios.get(
    `https://pixabay.com/api/?q=${seachName}&page=${page}&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=12`,
    options
  );

  return imgResponce;
}
