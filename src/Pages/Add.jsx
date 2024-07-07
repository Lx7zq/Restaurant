import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Add = () => {
  // สร้าง state เพื่อเก็บข้อมูลร้านอาหาร
  const [restaurant, setRestaurant] = useState({
    name: "",
    description: "",
    image: "",
  });

  // ฟังก์ชัน handleChange สำหรับการเปลี่ยนแปลงค่าใน input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  // เรียกใช้ hook เพื่อให้สามารถเปลี่ยนเส้นทางการนำทางได้หลังจากเพิ่มร้านอาหารเสร็จ
  const navigate = useNavigate();

  // ฟังก์ชัน handleSubmit เพื่อส่งข้อมูลร้านอาหารไปยังเซิร์ฟเวอร์
  const handleSubmit = async (e) => {
    e.preventDefault(); // ป้องกันการส่งฟอร์มตามวิธีการเริ่มต้น
    try {
      const response = await fetch("http://localhost:3000/Restaurant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(restaurant),
      });
      if (response.ok) {
        // แสดงแจ้งเตือนเมื่อเพิ่มร้านอาหารสำเร็จ
        Swal.fire({
          title: "เรียบร้อย!",
          text: "คุณได้เพิ่มร้านอาหารแล้ว",
          icon: "success",
          confirmButtonText: "ตกลง",
        }).then(() => {
          navigate("/"); // เปลี่ยนเส้นทางไปยังหน้าหลัก
          setRestaurant({
            name: "",
            description: "",
            image: "",
          }); // เคลียร์ข้อมูลในฟอร์มหลังจากเพิ่มเสร็จ
        });
      } else {
        // แสดงแจ้งเตือนเมื่อมีข้อผิดพลาดในการเพิ่มร้านอาหาร
        Swal.fire({
          title: "เกิดข้อผิดพลาด!",
          text: "ไม่สามารถเพิ่มร้านอาหารได้",
          icon: "error",
        });
      }
    } catch (error) {
      console.log(error); // แสดง error ใน console ถ้ามีข้อผิดพลาดในการ fetch
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <form>
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
              name="description"
              value={restaurant.description}
              onChange={handleChange}
              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              placeholder="Description"
              required
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Image</span>
            <input
              type="text"
              name="image"
              value={restaurant.image}
              onChange={handleChange}
              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              placeholder="Image URL"
              required
            />
          </label>
          <button className="w-full btn btn-success" onClick={handSubmit}>
            Success
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
