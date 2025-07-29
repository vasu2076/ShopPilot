import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from 'react';

const ProductZoom = (props) => {
  const zoomSlider = useRef(null);
  const zoomSliderBig = useRef(null);

  const goto = (index) => {
    if (zoomSlider.current && zoomSlider.current.swiper) {
      zoomSlider.current.swiper.slideTo(index);
    }
    if (zoomSliderBig.current && zoomSliderBig.current.swiper) {
      zoomSliderBig.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="productzoom">
      <div className="productZoom position-relative">
         <div className='badge badge-primary'>{props?.discount}%</div>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          navigation={false}
          modules={[Navigation]}
          className="zoomSliderBig"
          ref={zoomSliderBig}
        >
          {props?.images?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="item">
                <InnerImageZoom
                  zoomType="hover"
                  zoomScale={1}
                  src={item}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        navigation={true}
        slidesPerGroup={1}
        modules={[Navigation]}
        className="zoomSlider"
        ref={zoomSlider}
      >
        {props?.images?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="item">
              <img
                src={item}
                alt="img"
                className="w-100"
                onClick={() => goto(index)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductZoom;
