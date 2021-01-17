/**
 * XMLHttpRequest
 * @param {String} url
 * @param {String} type - GET or POST
 */
export default (url, type = 'GET', data = '') => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest();

  request.open(type, url);

  /** Special headers for cmtt sites */
  request.setRequestHeader('X-This-Is-CSRF', 'THIS IS SPARTA!');

  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      resolve(request.response);
    } else {
      reject(request.statusText);
    }
  };

  request.onerror = () => reject(request.statusText);

  request.send(data);
});
