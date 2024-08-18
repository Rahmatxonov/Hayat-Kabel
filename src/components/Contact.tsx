import contact from '../assets/images/CONTACT.png';
import { FaPhone } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import { HiLocationMarker } from 'react-icons/hi';
import { FaArrowUpLong } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative mt-[100px] md:mt-[200px] flex flex-col md:flex-row items-center m-auto w-[90%] md:w-full">
      <div className="container bg-[#10131f] flex flex-col md:flex-row items-center justify-between rounded-[16px] p-4 md:p-[30px]">
        <div className="relative text-white w-full md:w-1/2 flex flex-col items-center md:items-start pt-10 md:pt-0">
          <img
            className="w-full md:w-[499px] h-auto"
            src={contact}
            alt="Contact Us"
          />
          <h3 className="absolute top-12 md:top-1 left-1/2 transform -translate-x-1/2 text-white uppercase font-semibold text-[24px] md:text-[32px] mb-4 tracking-wide leading-[28px] md:leading-[39px] whitespace-nowrap">
            {t('contactUs')}
          </h3>
          <div className="mt-8 md:mt-12 w-full">
            <span
              className="flex items-center space-x-2 md:space-x-4 mb-4"
              role="img"
              aria-label="phone"
            >
              <FaPhone className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
              <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[20px] tracking-[1px]">
                +9989 (99) 123-45-67
              </p>
            </span>
            <span
              className="flex items-center space-x-2 md:space-x-4 mb-4"
              role="img"
              aria-label="email"
            >
              <IoMail className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]" />
              <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[20px] tracking-[1px]">
                hayat@gmail.com
              </p>
            </span>
            <span
              className="flex items-center space-x-2 md:space-x-4 mb-4"
              role="img"
              aria-label="location"
            >
              <HiLocationMarker className="w-[24px] h-[24px] md:w-[28px] md:h-[28px]" />
              <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[20px] tracking-[1px]">
                Uzbekistan, Tashkent, Small ring road 32/1 Block
              </p>
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7192.336806138769!2d69.20506710808597!3d41.351646051565304!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDIxJzA3LjciTiA2OcKwMTInMTMuOCJF!5e0!3m2!1sru!2s!4v1723798318089!5m2!1sru!2s"
            width="100%"
            height="320"
            style={{
              border: '0',
              borderRadius: '10px',
              backgroundColor: 'black',
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
      <li
        onClick={scrollToTop}
        className="w-[48px] h-[48px] bg-[#F9E400] flex items-center justify-center rounded-full absolute bottom-[-30px] right-4 z-10 cursor-pointer shadow-lg"
      >
        <FaArrowUpLong className="w-[24px] h-[24px]" />
      </li>
    </div>
  );
};

export default Contact;
