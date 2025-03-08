import React from "react";

function Marketing() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* First row */}
      <div className="flex flex-col md:flex-row items-center gap-8 mt-12 dark:text-white">
        {/* Text column */}
        <div className="md:w-1/2 space-y-4">
          {/* Eye-catching gradient heading */}
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 dark:from-blue-400 dark:to-green-300">
            Bộ sưu tập Nike mới nhất
          </h2>

          {/* Marketing paragraph */}
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Bộ sưu tập Nike là lựa chọn lý tưởng cho thời trang đường phố.
            Các sản phẩm được thiết kế với chất liệu cao cấp, vừa thoải mái
            lại vừa thể hiện được cá tính riêng. Đừng bỏ lỡ cơ hội nâng tầm
            phong cách của bạn!
          </p>

          {/* Call-to-action button */}
          <button
            type="button"
            className="px-5 py-3 rounded-md font-medium bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 dark:focus:ring-offset-neutral-900 transition"
          >
            Khám phá ngay
          </button>
        </div>

        {/* Image column */}
        <div className="md:w-1/2">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Nike Collection"
            className="w-full h-auto object-cover rounded-md shadow-sm"
          />
        </div>
      </div>

      <div className="divider mt-20 mb-20"></div>

      {/* Second row */}
      <div className="flex flex-col md:flex-row items-center gap-8 mt-12 dark:text-white">
        {/* Image column */}
        <div className="md:w-1/2">
          <img
            src="src/assets/images/logo.png"
            alt="Nike Collection"
            className="w-full h-auto object-cover rounded-md shadow-sm"
          />
        </div>

        {/* Text column */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 dark:from-yellow-400 dark:to-green-400">
            Cảm hứng thể thao đỉnh cao
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Trải nghiệm công nghệ đột phá cùng thiết kế thời thượng.
            Dù bạn đang dạo phố hay tham gia các hoạt động thể thao,
            Nike luôn đồng hành cùng bạn với sự tự tin và phong cách.
          </p>
          <button
            type="button"
            className="px-5 py-3 rounded-md font-medium bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:focus:ring-offset-neutral-900 transition"
          >
            Mua ngay
          </button>
        </div>
      </div>
    </section>
  );
}

export default Marketing;
