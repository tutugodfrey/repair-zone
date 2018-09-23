import logoutHandler from './logoutHandler';
// make api request using fetch
const fetchRequest = async (url, options) => {
  const { NODE_ENV } = process.env;
  let BASE_URL = 'https://mtrackers.herokuapp.com/api/v1';
  if (NODE_ENV === 'development') {
    BASE_URL = 'http://localhost:8080/api/v1';
  }

  const absoluteUrl = `${BASE_URL}${url}`;
  /* eslint-disable no-undef */
  const responseData  = await fetch(absoluteUrl, options);
  return responseData.json();
}

export default fetchRequest;
