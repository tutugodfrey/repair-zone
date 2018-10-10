const requestDetail = {
  id: 1,
  category: 'category',
  description: 'description of request',
  address: 'address',
  urgent: 'true',
  adminId: '4',
  status: 'awaiting confirmation',
}
const user = {
  id: 1,
  token: 'tokenvalue',
  isAdmin: false,
}
const admin = {
  id: 2,
  token: 'tokenvalue',
  isAdmin: true,
}
const adminRequest = {
  user: user,
  request: requestDetail,
};
const adminRequest2 = [{
  user: user,
  request: requestDetail,
}];
const userRequest = {
  user: admin,
  request: requestDetail,
};
const userRequest2 = [{
  user: admin,
  request: requestDetail,
}];

// make api request using fetch
const fetchRequest = async (url, options) => {
  const BASE_URL = 'http://localhost:/api/v1';
  localStorage.setItem('apiUrl', BASE_URL);
  const { method, body, headers } = options;
  let rawData;
  if (body) {
    try {
      rawData = JSON.parse(body);
    } catch(error) {
      // do nothing
    }

  }
  const cases = `${method} ${url}`;
  switch(cases) {
    case 'post /auth/signup': {
      return admin;
    }
    case 'post /auth/signin': {
      if (rawData.username === 'adminuser') {
        return admin;
      };
      if (rawData.username === 'regularuser') {
        return user;
      }
      if (rawData.username === 'non-exist') {
        return {
          message: 'authentication fail! check your username or password'
        };
      }
    }
    case 'post /users/requests': {
      if (rawData.adminId === '5') {
        return {
          message: 'The service provider does not exist',
        }
      }
      return userRequest;
    }
    case 'get /requests': {
      if (headers.token === 'invalid token') {
        return {
          message: 'authentication fail! invalid token',
        }
      }
      return adminRequest2
    }
    case 'get /users/requests': {
      if (headers.token === 'invalid token') {
        return {
          message: 'authentication fail! invalid token',
        }
      }
      return userRequest2;
    }
    case 'put /requests/1/approve': {
      requestDetail.status = 'pending';
      return adminRequest;
    };
    case 'put /requests/1/resolve': {
      requestDetail.status = 'resolved';
      return adminRequest;
    };
    case 'put /requests/1/disapprove': {
      requestDetail.status = 'rejected';
      return adminRequest;
    };
    case 'put /users/requests/1': {
      requestDetail.category =  'new category';
      requestDetail.description = 'new description of request';
      return userRequest;
    }
    case 'put /users/requests/2': { 
      return {
        message: 'request not found'
      };
    }
    case 'delete /users/requests/1': { 
      return {
        message: 'request has been deleted'
      };
    }
    default:
    return null
  }
}

export default fetchRequest;
