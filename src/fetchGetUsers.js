const url = "https://itchy-plum-caridea.cyclic.app/api/tutorials";

const fetchGetUsers = () => {
  return fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
};



export default fetchGetUsers;