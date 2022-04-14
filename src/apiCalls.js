export const fetchData = (section) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_NYT_KEY}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return response.status
      }
    })
    .catch(error => {
      console.log(error)
      return error
    })
};