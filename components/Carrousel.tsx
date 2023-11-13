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
  title: string;
  description: string;
}

interface CarouselImagesComponentProps {
  data: CarouselItem[];
}

const CarouselComponent: React.FC<CarouselImagesComponentProps> = ({
  data,
}) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `
            <span class="${className} custom-pagination-bullet">${data[index].title}
            </span>
            `;
          },
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map((item) => (
          <SwiperSlide>
            <div
              key={item.id}
              className="flex flex-col sm:flex-row justify-center sm:gap-12 items-center w-full sm:p-28 p-6"
            >
              <img
                src={item.image}
                alt={item.title}
                width={200}
                height={200}
                className="sm:w-[600px] w-[300px] object-cover rounded-5xl"
              />
              <div className="flex flex-col items-center">
                <h3 className="lg:bold-88 mb-6 text-green-150 text-[60px] font-bold">
                  {item.title}
                </h3>
                <p className="regular-16 text-gray-10 text-center">
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CarouselComponent;
