function saveAccessToken(token: string) {
  localStorage.setItem('accessToken', token);
}

function getAccessToken() {
  return localStorage.getItem('accessToken');
}

async function _fetchWithAuth(url: any, options: any = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
}
export { saveAccessToken, getAccessToken, _fetchWithAuth };
