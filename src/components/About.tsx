import './About.css';
import aboutBg from '../assets/images/ABOUT-US.png';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about relative flex items-center justify-center min-h-screen px-4 md:px-8 lg:px-12">
      <div className="absolute w-[90%] md:w-full flex justify-center top-16 md:top-20">
        <img
          className="relative w-full max-w-[704px] h-auto"
          src={aboutBg}
          alt="about text"
        />
        <h3
          className="absolute top-4 md:top-6 text-white uppercase text-center font-semibold text-[24px] md:text-[32px]
        leading-[30px] md:leading-[39px] tracking-[5px] md:tracking-[10px]"
        >
          {t('about')}
        </h3>
      </div>
      <div className="absolute top-[150px] md:top-[200px] p-[20px] md:p-[40px] border border-[#393838dc] rounded-lg w-full max-w-[90%] md:max-w-[814px] mx-auto bg-[#0B206f]/40 backdrop-blur-sm">
        <p className="text-white font-normal text-[14px] md:text-[16px] leading-[24px] md:leading-[30px] tracking-[1px] md:tracking-[2px] text-start w-full">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. Contrary to popular belief, Lorem
          Ipsum is not simply random text. It has roots in a piece of classical
          Latin literature from 45 BC, making it over 2000 years old.
        </p>
      </div>
    </div>
  );
};

export default About;
