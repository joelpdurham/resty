const fetchMyStuff = (url, route) => {
  return fetch(url, {
    method: route,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      return res;
    });
};

export default fetchMyStuff;
