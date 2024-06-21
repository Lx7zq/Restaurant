import React from "react";

const Restaurant = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 rounded-md border-gray-400 ">
      {boxData.map((box) => (
        <div
          key={box.id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <a href="#">
            <img
              className="w-full h-auto hover:scale-125 scale-100 transition-all delay-100 duration-100 hover:rounded-lg"
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
            <p className="mb-3 text-gray-700 dark:text-gray-600  font-semibold ">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
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
            <div className="flex justify-end">
              <a
                href="#"
                className="inline-flex  items-center px-4 py-2 text-sm font-semibold font-mediumtransition  dark:text-white text-gray-200 ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-xl"
              >
                Read more
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
      ))}
    </div>
  );
};

const boxData = [
  {
    name: "ก๋วยเตี๋ยวหมูแดงต้มยำน้ำ ",
    description: "หมูแดงเนื้อนุ่มหอมอร่อย ",
    image:
      "https://food-cms.grab.com/compressed_webp/items/THITE2023100514472283503/detail/menueditor_item_de0853aae9164a98a66dc95b5b9afd3d_1696517049955393837.webp",
  },
  {
    name: "ข้าวผัดน้ำมันเนื้อ + เนื้อทอด",
    description: "แนะนำความสุกแรร์ ",
    image:
      "https://food-cms.grab.com/compressed_webp/items/THITE2023080806195519213/detail/menueditor_item_1f426f9cec2944b2836ee15cb9771e2a_1691475413248048750.webp",
  },
  {
    name: "Just egg +กาแฟสดเย็น",
    description: "ไข่​ข้นแฮมผัดชีสและเนย",
    image:
      "https://food-cms.grab.com/compressed_webp/items/THITE2023052404032725828/detail/menueditor_item_8dcc201a92684c37b3f7f7493a222c3a_1684900886364864119.webp",
  },
  {
    name: "ซีฟู้ดผัดขี้เมา",
    description: "เส้นนุ่ม สดใหม่",
    image:
      "https://food-cms.grab.com/compressed_webp/items/THITE20240329080514064708/detail/menueditor_item_cd1fdb54a3254316b0d94c01b6c563db_1712728569240789025.webp",
  },
  {
    name: "น้ำดื่ม",
    description: "ทำใหม่ทุกเช้า สดชื่นทุกดื่ม",
    image:
      "https://food-cms.grab.com/compressed_webp/items/THITE2023052609370714749/detail/menueditor_item_a8dffadefa054477ab9ccc2e53ffd4e6_1685093732936575804.webp",
  },
  {
    name: "ก๋วยเตี๋ยวน้ำ ลูกชิ้นปลา",
    description: "น้ำซุปหอมหวาน ต้มกระดูกหมู ",
    image:
      "https://food-cms.grab.com/compressed_webp/items/THITE2023052609213088569/detail/menueditor_item_68897c21ecef47e8809f4ba856a51cd2_1685092660321656936.webp",
  },
];

export default Restaurant;
