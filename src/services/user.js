import api from "./api.js";

export async function getById(config) {
  return await api.get("/users/", config);
}

export function createUser(data) {
  return api
    .post("/users", data)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error.response.data);
      return { error };
    });
}

export function searchByPetType(petType, token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  return api
    .get(`/input/category/${petType}`, config)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return { error };
    });
}
