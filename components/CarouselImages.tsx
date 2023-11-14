"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from 'swiper';


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";

interface CarouselItem {
  id: number;
  title: string;
  image: string;
}

interface CarouselImagesComponentProps {
  data: CarouselItem[];
  onSlideChange: (index: number) => void;
}

const CarouselImagesComponent: React.FC<CarouselImagesComponentProps> = ({
  data,
  onSlideChange,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper: SwiperClass) => {
    const newIndex = swiper.activeIndex;
    setActiveSlide(newIndex);
    onSlideChange(newIndex); 
  };
  return (
    <div className="sm:px-4 h-full w-full">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={handleSlideChange} 
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
                  className="h-[600px] w-[380px] object-cover rounded-3xl border-8 border-green-120 border-opacity-30"
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
