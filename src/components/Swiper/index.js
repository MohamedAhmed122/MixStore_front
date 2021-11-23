import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

// Import Swiper styles
// import 'swiper/css';

const HomeSwiper = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide style={{ width: 1000, height: 500 }}>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </SwiperSlide>
      <SwiperSlide style={{ width: 1000, height: 500 }}>
        <img
          src="https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </SwiperSlide>
      <SwiperSlide style={{ width: 1000, height: 500 }}>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </SwiperSlide>
      <SwiperSlide style={{ width: 1000, height: 500 }}>
        <img
          src="https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </SwiperSlide>
    </Swiper>
  );
};
export default HomeSwiper;
