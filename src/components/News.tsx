import news from '../assets/images/NEWS.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import newsImage from '../assets/images/news_img.jpg';
import { TbPointFilled } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';

const newsData = [
  {
    image: newsImage,
    title: 'Suspendisse sed',
    description:
      'Sit vestibulum purus diam id consequat turpis convallis semper. Vitae montes nunc nulla faucibus a tincidunt elit volutpat.',
    badges: ['Badge', 'Badge'],
    time: '2 mins read',
  },
  {
    image: newsImage,
    title: 'Suspendisse sed',
    description:
      'Sit vestibulum purus diam id consequat turpis convallis semper. Vitae montes nunc nulla faucibus a tincidunt elit volutpat.',
    badges: ['Badge', 'Badge'],
    time: '2 mins read',
  },
  {
    image: newsImage,
    title: 'Suspendisse sed',
    description:
      'Sit vestibulum purus diam id consequat turpis convallis semper. Vitae montes nunc nulla faucibus a tincidunt elit volutpat.',
    badges: ['Badge', 'Badge'],
    time: '2 mins read',
  },
  {
    image: newsImage,
    title: 'Suspendisse sed',
    description:
      'Sit vestibulum purus diam id consequat turpis convallis semper. Vitae montes nunc nulla faucibus a tincidunt elit volutpat.',
    badges: ['Badge', 'Badge'],
    time: '2 mins read',
  },
  {
    image: newsImage,
    title: 'Suspendisse sed',
    description:
      'Sit vestibulum purus diam id consequat turpis convallis semper. Vitae montes nunc nulla faucibus a tincidunt elit volutpat.',
    badges: ['Badge', 'Badge'],
    time: '2 mins read',
  },
  {
    image: newsImage,
    title: 'Suspendisse sed',
    description:
      'Sit vestibulum purus diam id consequat turpis convallis semper. Vitae montes nunc nulla faucibus a tincidunt elit volutpat.',
    badges: ['Badge', 'Badge'],
    time: '2 mins read',
  },
  {
    image: newsImage,
    title: 'Suspendisse sed',
    description:
      'Sit vestibulum purus diam id consequat turpis convallis semper. Vitae montes nunc nulla faucibus a tincidunt elit volutpat.',
    badges: ['Badge', 'Badge'],
    time: '2 mins read',
  },
  {
    image: newsImage,
    title: 'Suspendisse sed',
    description:
      'Sit vestibulum purus diam id consequat turpis convallis semper. Vitae montes nunc nulla faucibus a tincidunt elit volutpat.',
    badges: ['Badge', 'Badge'],
    time: '2 mins read',
  },
  {
    image: newsImage,
    title: 'Suspendisse sed',
    description:
      'Sit vestibulum purus diam id consequat turpis convallis semper. Vitae montes nunc nulla faucibus a tincidunt elit volutpat.',
    badges: ['Badge', 'Badge'],
    time: '2 mins read',
  },
  {
    image: newsImage,
    title: 'Suspendisse sed',
    description:
      'Sit vestibulum purus diam id consequat turpis convallis semper. Vitae montes nunc nulla faucibus a tincidunt elit volutpat.',
    badges: ['Badge', 'Badge'],
    time: '2 mins read',
  },
];

const News = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="relative flex flex-col items-center py-10">
        <div className="relative w-[90%] md:w-full flex justify-center">
          <img
            className="relative w-[417px] h-auto max-w-full"
            src={news}
            alt="News text"
          />
          <h3 className="absolute top-5 text-white uppercase text-center font-semibold text-[24px] md:text-[32px] leading-[32px] md:leading-[39px] tracking-[6px] md:tracking-[10px]">
            {t('news')}
          </h3>
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 25 },
        }}
        modules={[Autoplay]}
        className="mySwiper md:w-full w-[90%]"
      >
        {newsData.map((item, index) => (
          <SwiperSlide
            key={index}
            className="bg-[#10131f] rounded-[20px] p-4 flex flex-col"
          >
            <img
              className="w-full h-auto md:max-w-[340px] rounded-[25px] mb-4"
              src={item.image}
              alt={item.title}
            />
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {item.badges.map((badge, badgeIndex) => (
                <span
                  key={badgeIndex}
                  className={`text-[10px] md:text-[12px] leading-[16px] font-semibold px-2 h-[20px] rounded-[6px] flex items-center justify-center space-x-1 ${
                    badgeIndex === 0
                      ? 'text-[#2563EB] bg-[#EFF6FF]'
                      : 'text-[#16A34A] bg-[#EFF6FF]'
                  }`}
                >
                  <TbPointFilled /> {badge}
                </span>
              ))}
            </div>
            <h4 className="text-white font-semibold text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] mb-2">
              {item.title}
            </h4>
            <p className="text-[#DDDDDD] font-light text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] mb-2">
              {item.description}
            </p>
            <p className="text-[#71717A] text-end text-[12px] md:text-[14px]">
              {item.time}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default News;
