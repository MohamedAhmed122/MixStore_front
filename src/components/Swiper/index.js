import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./style.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";


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
          <img
            className="img_swiper_page"
            src="https://food-fanatic-res.cloudinary.com/iu/s--uzDDmSC6--/c_thumb,f_auto,g_auto,h_3086,q_auto,w_3086/v1486327268/chocolate-strawberry-milkshakes-photo"
            alt="img"
          />{" "}
        </SwiperSlide>
        <SwiperSlide className="swiper_slider">
          <img
            className="img_swiper_page"
            src="https://live.staticflickr.com/65535/48962119157_79048a6f1b_b.jpg"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper_slider">
          <img
            className="img_swiper_page"
            src="https://aseasyasapplepie.com/wp-content/uploads/2017/01/avocado-strawberry-layered-smoothie-500x500.jpg"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper_slider">
          <img
            className="img_swiper_page"
            src="https://www.alphafoodie.com/wp-content/uploads/2020/11/Orange-Ginger-Juice-1-of-1.jpeg"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper_slider">
          <img
            className="img_swiper_page"
            src="https://www.yourhomebasedmom.com/wp-content/uploads/2021/08/CHOCOLATE-MILK-SHAKE-5520-500x500.jpg"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper_slider">
          <img
            className="img_swiper_page"
            src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2013%2F12%2F06%2F201305-xl-horchata-milk-shake-2000.jpg&q=85"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper_slider">
          <img
            className="img_swiper_page"
            src="https://dirtylittlesecret.co.nz/wp-content/uploads/2021/05/kinder-bueno-small-500x400.jpg"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper_slider">
          <img
            className="img_swiper_page"
            src="https://thetravelbite.com/wp-content/uploads/2021/06/Mint-Lemonade-TheTravelBite.com-16-scaled-720x720.jpg"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper_slider">
          <img
            className="img_swiper_page"
            src="https://californiaavocado.com/wp-content/uploads/2020/08/Avocado-Milkshake-3-1.jpg"
            alt="img"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default SwiperHome;
