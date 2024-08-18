import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="hero">
      <div className="m-auto text-center md:pt-[250px] pt-[150px]">
        <h1 className="text-white md:font-semibold md:text-[66px] md:leading-[81px] font-normal text-[44px] leading-[60px]">
          The cable, You can trust!
        </h1>
        <p className="text-white pt-[25px] pb-[35px] text-[20px] max-w-[547px] w-[100%] m-auto leading-[36px] font-normal  ">
          The high quality of used materials ensure the reliability of our
          products
        </p>
        <button className="text-[#1B1A17] rounded-[16px] bg-[#F9E400] md:py-[8px] md:px-[20px] font-normal md:text-[18px] leading-[36px] text-[16px] px-[18px]">
          {t('contactUs')}
        </button>
      </div>
    </div>
  );
};

export default Header;
