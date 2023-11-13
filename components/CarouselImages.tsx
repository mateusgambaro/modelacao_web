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

const CarouselImagesComponent: React.FC<CarouselImagesComponentProps> = ({
  data,
}) => {
  return (
    <div className="sm:px-16 h-full w-full">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
       
        navigation
      >
        {data.map((item) => (
          <div className="px-12">
            <SwiperSlide>
              <div
                key={item.id}
                className="flex flex-col sm:flex-row justify-center items-center h-full w-full "
              >
                <img
                  src={item.image}
                  alt={item.image}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover rounded-3xl border-8 border-green-120 border-opacity-30"
                />
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselImagesComponent;
