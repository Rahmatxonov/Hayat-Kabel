import { useTranslation } from 'react-i18next';
import logo from '../assets/icons/logo.svg';
import { FaTelegramPlane, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const { t } = useTranslation();
  const menuItems = [
    { label: t('home'), link: 'home' },
    { label: t('about'), link: 'about' },
    { label: t('products'), link: 'products' },
    { label: t('catalog'), link: 'catalog' },
    { label: t('gallery'), link: 'gallery' },
    { label: t('documents'), link: 'documents' },
    { label: t('news'), link: 'news' },
    { label: t('contacts'), link: 'contacts' },
  ];

  return (
    <footer className="bg-[#10131f] text-white py-6 mt-[120px]">
      <div className="container mx-auto px-4">
        <a href="/" className="flex items-center mb-6 mt-4">
          <img src={logo} alt="HayatKabel Logo" className="mr-2 w-32 h-auto" />
        </a>
        <div className="flex flex-col items-center">
          <ul className="flex flex-wrap justify-center gap-6 mb-4 text-lg">
            {menuItems.map((item) => (
              <li
                key={item.label}
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                <Link
                  to={item.link}
                  smooth={true}
                  duration={500}
                  className="font-light text-[14px] md:text-[16px]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="w-full border-gray-700 mb-4" />
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-yellow-400 text-xl">
          <a
            href="https://t.me/yourtelegram"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 flex items-center space-x-2 md:space-x-3"
          >
            <FaTelegramPlane className="text-xl md:text-2xl" />
            <p className="hidden md:inline">Telegram</p>
          </a>
          <a
            href="https://instagram.com/yourinstagram"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 flex items-center space-x-2 md:space-x-3"
          >
            <FaInstagram className="text-xl md:text-2xl" />
            <p className="hidden md:inline">Instagram</p>
          </a>
          <a
            href="https://facebook.com/yourfacebook"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 flex items-center space-x-2 md:space-x-3"
          >
            <FaFacebookF className="text-xl md:text-2xl" />
            <p className="hidden md:inline">Facebook</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
