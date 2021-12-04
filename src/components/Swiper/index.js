import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./style.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Button from "../../commons/Button";
import { swiperItems } from "../../assets/SwiperImage";
import { styleSwiper } from "./styleSwiperImg";

SwiperCore.use([Autoplay, Pagination, Navigation]);
// TODO: CheckSwiper 

const SwiperHome = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
        style={styleSwiper}
      >
        {swiperItems.map((swiper) => (
          <SwiperSlide
          key={swiper.id}
            style={{ opacity: 0.75, backgroundImage: `url(${swiper.image})` }}
            className="swiper_slider swiper_page_bg"
          >
            <div className="btn_text_swiper">
              <h1>Hello to May Website</h1>
              <Button text="See More" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default SwiperHome;


// export const SwiperDetail = () =>{
//   return()
// }