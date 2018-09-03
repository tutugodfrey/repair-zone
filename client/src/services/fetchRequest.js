
// make api request using fetch
function fetchRequest(url, options, callback) {
  console.log('api-url', process.env.API_URL)
  const { NODE_ENV } = process.env;
  let BASE_URL = 'https://mtrackers.herokuapp.com/api/v1';
  if (NODE_ENV === 'development') {
    BASE_URL = 'http://localhost:8080/api/v1';
  }

  const absoluteUrl = `${BASE_URL}${url}`;
  /* eslint-disable no-undef */
  fetch(absoluteUrl, options)
    .then(res => res.json())
    .then(returned => callback(returned));
}

export default fetchRequest;
