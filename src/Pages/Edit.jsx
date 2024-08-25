import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RestuarantService from "../services/restaurant.service";
import Swal from "sweetalert2";

const Edit = () => {
  // ใช้ useParams เพื่อดึงค่า id จาก URL
  const { id } = useParams();

  // สร้าง state เพื่อเก็บข้อมูลร้านอาหารที่จะแก้ไข
  const [restaurant, setRestaurant] = useState({
    name: "",
    type: "",
    ImageUrl: "",
  });

  // useEffect เรียกใช้งานหลังจาก component นี้ถูก render เพื่อดึงข้อมูลร้านอาหารจากเซิร์ฟเวอร์
  useEffect(() => {
    RestuarantService.getrestaurantByID(id).then((response) => {
      if (response.status === 200) {
        setRestaurant(response.data);
      }
    });
  }, [id]); // ใช้ id เป็น dependency เพื่อให้ useEffect เรียกใช้ใหม่เมื่อ id เปลี่ยน

  // เรียกใช้ hook เพื่อให้สามารถเปลี่ยนเส้นทางการนำทางได้หลังจากแก้ไขข้อมูลเสร็จ
  const navigate = useNavigate();

  // ฟังก์ชัน handleChange เมื่อมีการเปลี่ยนแปลงค่าใน input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value }); //  คือการอัปเดตข้อมูลใน state ของ component โดยการสร้าง object ใหม่
    //โดยใช้ spread operator (...restaurant) เพื่อคัดลอกค่าของ restaurant ทั้งหมด และแทนค่า attribute name ด้วย value ที่ผู้ใช้ป้อนลงไปใน input
  };

  // ฟังก์ชัน handSubmit เมื่อมีการส่งฟอร์มแก้ไขข้อมูลร้านอาหาร
  const handSubmit = async () => {
    try {
      const response = await RestuarantService.editRestaurant(id, restaurant);
      if (response.status === 200) {
        Swal.fire({
          title: "Restaurant update",
          text: response.data.message,
          icon: "success",
        });
        navigate("/");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Restaurant update",
        text: error.response?.data?.message || error.message,
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96 p-6 bg-white rounded-lg shadow-md">
        <label className="block mb-4">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            name="name"
            value={restaurant.name}
            onChange={handleChange}
            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Name"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Description</span>
          <input
            type="text"
            name="type"
            value={restaurant.type}
            onChange={handleChange}
            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="type"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Image</span>
          <input
            type="text"
            name="image"
            value={restaurant.ImageUrl}
            onChange={handleChange}
            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Image URL"
            required
          />
        </label>
        <button className="w-full btn btn-success" onClick={handSubmit}>
          Success
        </button>
      </div>
    </div>
  );
};

export default Edit;
