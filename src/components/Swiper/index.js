import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./style.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Button from "../../commons/Button";
import { styleSwiper } from "./style";

SwiperCore.use([Autoplay, Pagination, Navigation]);

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
        <SwiperSlide
          style={{
            backgroundImage: `url("https://food-fanatic-res.cloudinary.com/iu/s--uzDDmSC6--/c_thumb,f_auto,g_auto,h_3086,q_auto,w_3086/v1486327268/chocolate-strawberry-milkshakes-photo")`,
            opacity: 0.75,
          }}
          className="swiper_slider swiper_page_bg"
        >
          <div className="btn_text_swiper">
            <h1>Hello to May Website</h1>
            <Button text="See More"/>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="swiper_slider"
          style={{
            backgroundImage: `url("https://live.staticflickr.com/65535/48962119157_79048a6f1b_b.jpg")`,
            opacity: 0.75,
          }}
        >
          <div className="btn_text_swiper ">
            <h1>Hello to May Website</h1>
            <Button text="See More"></Button>
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage: `url("https://aseasyasapplepie.com/wp-content/uploads/2017/01/avocado-strawberry-layered-smoothie-500x500.jpg")`,
            opacity: 0.75,
          }}
          className="swiper_slider swiper_page_bg"
        >
          <div className="btn_text_swiper">
            <h1>Hello to May Website</h1>
            <Button text="See More"></Button>
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage: `url('https://www.alphafoodie.com/wp-content/uploads/2020/11/Orange-Ginger-Juice-1-of-1.jpeg")`,
            opacity: 0.75,
          }}
          className="swiper_slider swiper_page_bg"
        >
          <div className="btn_text_swiper">
            <h1>Hello to May Website</h1>
            <Button text="See More"></Button>
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage: `url("https://nitrocdn.com/wGQBfjwJxisdWFaHfyrEIdkKcKRLgtJH/assets/static/optimized/rev-73da4cb/wp-content/uploads/2018/01/orange-hot-chocolate-3.jpg")`,
            opacity: 0.75,
          }}
          className="swiper_slider swiper_page_bg"
        >
          <div className="btn_text_swiper">
            <h1>Hello to May Website</h1>
            <Button text="See More"></Button>
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage: `url("https://static6.depositphotos.com/1144352/636/i/600/depositphotos_6362581-stock-photo-chocolate-and-strawberry-milkshake.jpg")`,
            opacity: 0.75,
          }}
          className="swiper_slider swiper_page_bg"
        >
          <div className="btn_text_swiper">
            <h1>Hello to May Website</h1>
            <Button text="See More"></Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default SwiperHome;
