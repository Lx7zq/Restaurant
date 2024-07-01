import { useState,useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
    const {id} = useParams();
  const [restaurant, setRestaurant] = useState({
    name: "",
    description: "",
    image: "",
  });
  useEffect(()=>{
     fetch("http://localhost:3000/Restaurant/"+id)
      .then((res) => res.json())
      .then((response) => {
        setRestaurant(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  const handSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/Restaurant/"+id, {
       
        method: "PUT",
        body: JSON.stringify(restaurant),
      });
      if (response.ok) {
        alert("Restaurant Edit successfully! ");
        navigate("/");
        setRestaurant({
          name: "",
          description: "",
          image: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-96  items-center ">
      <label className="input input-bordered flex items-center gap-2">
        Name
        <input
          type="text"
          name="name"
          value={restaurant.name}
          onChange={handleChange}
          className="grow"
          placeholder="Name"
          required
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Description
        <input
          type="text"
          name="description"
          value={restaurant.description}
          onChange={handleChange}
          className="grow"
          placeholder="Description"
          required
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Image
        <input
          type="text"
          name="image"
          value={restaurant.image}
          onChange={handleChange}
          className="grow"
          placeholder="Image URL"
          required
        />
      </label>
      <button className="btn btn-success" onClick={handSubmit}>
        Success
      </button>
    </div>
  );
};

export default Edit;
