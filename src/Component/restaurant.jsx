import React from "react";
import Swal from "sweetalert2";

const Restaurant = ({ restaurants }) => {
  // ฟังก์ชัน handleDelete สำหรับการลบร้านอาหาร
  const handleDelete = async (id) => {
    // แสดงหน้าต่างยืนยันการลบโดยใช้ SweetAlert2
    const result = await Swal.fire({
      title: "คุณแน่ใจหรือไม่?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ใช่, ลบเลย",
      cancelButtonText: "ยกเลิก",
    });

    // ถ้าผู้ใช้กดปุ่มยืนยัน
    if (result.isConfirmed) {
      try {
        // ส่ง request ไปยังเซิร์ฟเวอร์เพื่อลบร้านอาหาร
        const response = await fetch("http://localhost:3000/Restaurant/" + id, {
          method: "DELETE",
        });

        // หากลบสำเร็จ
        if (response.ok) {
          // แสดงข้อความแจ้งเตือนว่าลบสำเร็จ
          Swal.fire({
            title: "ลบแล้ว!",
            text: "ร้านนี้ถูกลบแล้ว",
            icon: "success",
          }).then(() => {
            window.location.reload(); // รีเฟรชหน้าเพื่อแสดงข้อมูลใหม่
          });
        } else {
          // หากไม่สำเร็จ
          Swal.fire({
            title: "เกิดข้อผิดพลาด!",
            text: "ไม่สามารถลบร้านได้",
            icon: "error",
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 rounded-md border-gray-400">
      {restaurants.map(
        (
          box //วนลูปข้อมูลในrestaurantมาใส่ใน box
        ) => (
          <div
            key={box.id}
            className="bg-white shadow-xl rounded-lg overflow-hidden"
          >
            <a href="#">
              <img
                className="w-full h-64 object-cover hover:scale-125 transition-transform duration-300"
                src={box.image}
                alt={box.name}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-900">
                  {box.name}
                </h5>
              </a>
              <p className="mb-3 text-gray-700 dark:text-gray-600 font-semibold">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  {box.description}
                </div>
              </p>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => handleDelete(box.id)}
                  className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-red-500 hover:bg-red-600 transition-transform duration-300 rounded-xl"
                >
                  Delete
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
                <a
                  href={`/Edit/${box.id}`} // ลิงก์ไปยังหน้าแก้ไขร้านอาหารที่มี ID ของร้านอาหาร
                  className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 transition-transform duration-300 rounded-xl"
                >
                  Edit
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Restaurant;
