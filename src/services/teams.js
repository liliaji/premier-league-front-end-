import api from "./apiConfig.js";

export const getTeams = async () => {
  try {
    const response = await api.get("/teams");
    return response.data;
  } catch (error) {
    console.error("Error Getting all Teams: ", error);
  }
};

export const getTeam = async (id) => {
  try {
    const response = await api.get(`/teams/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error Getting all Team: ", error);
  }
};

export const createTeam = async (teamData) => {
  try {
    const response = await api.post("/teams", teamData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const editTeam = async (id, teamData) => {
  try {
    const response = await api.put(`/teams/${id}`, teamData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteCat = async (id) => {
  try {
    const response = await api.delete(`/teams/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};