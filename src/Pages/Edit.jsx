import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Edit = () => {
  // ใช้ useParams เพื่อดึงค่า id จาก URL
  const { id } = useParams();

  // สร้าง state เพื่อเก็บข้อมูลร้านอาหารที่จะแก้ไข
  const [restaurant, setRestaurant] = useState({
    name: "",
    description: "",
    image: "",
  });

  // useEffect เรียกใช้งานหลังจาก component นี้ถูก render เพื่อดึงข้อมูลร้านอาหารจากเซิร์ฟเวอร์
  useEffect(() => {
    fetch("http://localhost:3000/Restaurant/" + id)
      .then((res) => res.json())
      .then((response) => {
        setRestaurant(response); // เซ็ตข้อมูลร้านอาหารให้กับ state
      })
      .catch((err) => {
        console.log(err.message); // แสดง error ใน console หากมีข้อผิดพลาดในการ fetch
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
      const response = await fetch("http://localhost:3000/Restaurant/" + id, {
        method: "PUT", // ใช้เมธอด PUT เพื่อแก้ไขข้อมูลในเซิร์ฟเวอร์
        body: JSON.stringify(restaurant), // ส่งข้อมูลร้านอาหารเป็น JSON
      });
      if (response.ok) {
        // แสดงแจ้งเตือนเมื่อแก้ไขข้อมูลร้านอาหารสำเร็จ
        Swal.fire({
          title: "เรียบร้อย!",
          text: "คุณได้แก้ไขข้อมูลแล้ว",
          icon: "success",
          confirmButtonText: "ตกลง",
        });
        navigate("/"); // เปลี่ยนเส้นทางไปยังหน้าหลัก
        setRestaurant({
          name: "",
          description: "",
          image: "",
        }); // เคลียร์ข้อมูลในฟอร์มหลังจากแก้ไขเสร็จ
      }
    } catch (error) {
      console.log(error); // แสดง error ใน console ถ้ามีข้อผิดพลาดในการ fetch
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
      </div>
    </div>
  );
};

export default Edit;
