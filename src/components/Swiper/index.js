import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./style.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Button  from "../../commons/Button";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const SwiperHome = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
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
      >
        <SwiperSlide className="swiper_slider">
          <div
            className="swiper_page_bg"
            style={{
              backgroundImage: `url("https://i.pinimg.com/736x/23/19/98/231998fa0a3cba4c1d9cabc4e587f4ef.jpg")`,
            }}
          >
            <div>
              <h1>Hello to May Website</h1>
              <Button text="See More"></Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper_slider">
          <div
            className="swiper_page_bg"
            style={{
              backgroundImage: `url("https://media.istockphoto.com/photos/orange-juice-splash-picture-id537837754?k=20&m=537837754&s=612x612&w=0&h=D69GxC3Mlw--eqvtIk7kBTjC6tqG-dWdcvRl5Aoq49w=")`,
            }}
          >
            <div>
              <h1>Hello to May Website</h1>
              <Button text="See More"/>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default SwiperHome;
