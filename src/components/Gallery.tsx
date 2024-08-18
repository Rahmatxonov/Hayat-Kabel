import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import image from '../assets/images/gallery-img.jpg';
import gallery from '../assets/images/GALLERY.png';
import { useTranslation } from 'react-i18next';

function Gallery() {
  const { t } = useTranslation();
  const images = [
    { src: image, alt: 'Image 1' },
    { src: image, alt: 'Image 2' },
    { src: image, alt: 'Image 3' },
    { src: image, alt: 'Image 4' },
    { src: image, alt: 'Image 5' },
    { src: image, alt: 'Image 6' },
    { src: image, alt: 'Image 7' },
    { src: image, alt: 'Image 8' },
    { src: image, alt: 'Image 9' },
    { src: image, alt: 'Image 10' },
  ];

  return (
    <>
      <div className="relative flex items-center justify-center h-auto py-10">
        <div className="relative w-full max-w-screen-lg mx-auto flex flex-col items-center">
          <img
            className="w-[90%] md:w-full h-auto max-w-[643px]"
            src={gallery}
            alt="Gallery text"
          />
          <h3 className="absolute top-6 text-white uppercase text-center font-semibold text-[24px] leading-[32px] tracking-[8px] md:text-[32px] md:leading-[39px] md:tracking-[10px]">
            {t('gallery')}
          </h3>
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 25,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              className="w-[90%] md:w-full h-auto rounded-[16px] object-cover"
              src={img.src}
              alt={img.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Gallery;
