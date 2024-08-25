import api from "./api";
const RESTO_API = import.meta.env.VITE_RESTO_API;
console.log(RESTO_API);
//get all restaurants
const getAllrestaurant = async () => {
  return await api.get(RESTO_API);
};

//get restaurant by id
const getrestaurantById = async (id) => {
  return await api.get(RESTO_API+`/${id}`);
};

const insertRestaurant = async (restaurant) => {
  return await api.post(RESTO_API, restaurant);
};

//update a restaurant data
const editRestaurant = async (id,restaurant)=>{
  return await api.put(RESTO_API + `/${id}`,restaurant);
} 
//delete  restaurant data
const deleteRestaurant = async (id) => {
  return await api.delete(RESTO_API + `/${id}`);
};


const RestuarantService = {
  getAllrestaurant,
  getrestaurantById,
  editRestaurant,
  deleteRestaurant,
  insertRestaurant
};
export default RestuarantService;