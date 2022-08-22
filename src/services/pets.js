import api from "./api.js";

export const getPetsByLocation = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  try {
    const pets = await api.get("/pets", config);
    return pets.data;
  } catch (error) {
    console.error(error);
    return { error };
  }
};

export const getPetById = async (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  try {
    const pet = await api.get(`/pets/${id}`, config);
    return pet.data;
  } catch (error) {
    console.error(error);
    return { error };
  }
};
