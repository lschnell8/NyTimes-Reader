export const fetchData = (section) => {
  const options = {
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  };
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${ section }.json?api-key=ZBS8HsBHmKgKHq7zG91kZQnQksJwxNmg`, options)
};