"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface CarouselItem {
  id: number;
  image: string;
}

interface CarouselImagesComponentProps {
  data: CarouselItem[];
}

const CarouselProducts: React.FC<CarouselImagesComponentProps> = ({ data }) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
      >
        {data.map((item) => (
          <div className="px-10">
            <SwiperSlide>
              <div
                key={item.id}
                className="flex flex-col sm:flex-row justify-center items-center w-full sm:px-12 p-6"
              >
                <img
                  src={item.image}
                  alt={item.image}
                  width={200}
                  height={200}
                  className="sm:w-[600px] w-[300px] object-cover rounded"
                />
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselProducts;
