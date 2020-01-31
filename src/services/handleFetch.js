const handleFetch = (url, route) => {
  return fetch(url, {
    method: route,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
    .then(res => res.json());
};
 
export default handleFetch;
