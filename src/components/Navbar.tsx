// import React, { useState } from 'react';
// import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
// import { FaGlobe } from 'react-icons/fa';
// import { Link as ScrollLink } from 'react-scroll';
// import { Link, useNavigate } from 'react-router-dom';
// import logo from '../assets/icons/logo.svg';

// const Navbar: React.FC = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
//   const [language, setLanguage] = useState('Eng');
//   const navigate = useNavigate();

//   const menuItems = [
//     { label: 'Home', link: '/', external: true },
//     { label: 'About us', link: 'about', external: false },
//     { label: 'Products', link: 'products', external: false },
//     { label: 'Catalog', link: '/catalog', external: true },
//     { label: 'Gallery', link: 'gallery', external: false },
//     { label: 'Documents', link: 'documents', external: false },
//     { label: 'News', link: 'news', external: false },
//     { label: 'Contacts', link: 'contacts', external: false },
//   ];

//   const handleLanguageChange = (newLanguage: string) => {
//     setLanguage(newLanguage);
//     setIsLanguageMenuOpen(false);
//   };

//   const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     e.preventDefault();
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     navigate('/');
//   };

//   return (
//     <nav className="fixed w-full top-0 bg-black text-white z-10 py-5">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="flex items-center" onClick={handleHomeClick}>
//           <img src={logo} alt="Logo" className="h-8 mr-3" />
//         </Link>
//         <ul className="hidden md:flex space-x-6 text-lg">
//           {menuItems.map((item) => (
//             <li
//               key={item.label}
//               className="font-light transition-colors duration-100 cursor-pointer"
//             >
//               {item.external ? (
//                 <Link to={item.link} onClick={() => setIsMobileMenuOpen(false)}>
//                   {item.label}
//                 </Link>
//               ) : (
//                 <ScrollLink
//                   to={item.link}
//                   smooth={true}
//                   duration={500}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   activeClass="font-semibold"
//                   spy={true}
//                 >
//                   {item.label}
//                 </ScrollLink>
//               )}
//             </li>
//           ))}
//         </ul>
//         <div className="flex items-center space-x-4 relative">
//           <AiOutlineSearch className="w-[24px] h-[24px] text-xl cursor-pointer hover:text-yellow-400 transition-colors duration-300" />
//           <FaGlobe
//             className="text-xl cursor-pointer hover:text-yellow-400 transition-colors duration-300"
//             onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
//           />
//           {isLanguageMenuOpen && (
//             <ul className="absolute top-8 right-0 bg-gray-800 rounded-lg text-white p-2 shadow-lg">
//               <li
//                 className="cursor-pointer hover:bg-gray-700 p-2"
//                 onClick={() => handleLanguageChange('Eng')}
//               >
//                 Eng
//               </li>
//               <li
//                 className="cursor-pointer hover:bg-gray-700 p-2"
//                 onClick={() => handleLanguageChange('Uzb')}
//               >
//                 Uzb
//               </li>
//               <li
//                 className="cursor-pointer hover:bg-gray-700 p-2"
//                 onClick={() => handleLanguageChange('Rus')}
//               >
//                 Rus
//               </li>
//             </ul>
//           )}
//           <span className="hidden md:block">{language}</span>
//           <AiOutlineMenu
//             className="text-xl md:hidden cursor-pointer"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           />
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden mt-4 bg-gray-800 p-4 rounded-lg">
//           <ul className="space-y-4 text-lg">
//             {menuItems.map((item) => (
//               <li
//                 key={item.label}
//                 className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
//               >
//                 {item.external ? (
//                   <Link
//                     to={item.link}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     {item.label}
//                   </Link>
//                 ) : (
//                   <ScrollLink
//                     to={item.link}
//                     smooth={true}
//                     duration={500}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     activeClass="font-semibold"
//                     spy={true}
//                   >
//                     {item.label}
//                   </ScrollLink>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { FaGlobe } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/icons/logo.svg';

interface NavbarProps {
  changeLanguages: (language: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ changeLanguages }) => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>('Eng');
  const navigate = useNavigate();

  const menuItems = [
    { label: t('home'), link: '/', external: true },
    { label: t('about'), link: 'about', external: false },
    { label: t('products'), link: 'products', external: false },
    { label: t('catalog'), link: '/catalog', external: true },
    { label: t('gallery'), link: 'gallery', external: false },
    { label: t('documents'), link: 'documents', external: false },
    { label: t('news'), link: 'news', external: false },
    { label: t('contacts'), link: 'contacts', external: false },
  ];

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    setIsLanguageMenuOpen(false);
    changeLanguages(newLanguage);
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/');
  };

  return (
    <nav className="fixed w-full top-0 bg-black text-white z-10 py-5">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={handleHomeClick}>
          <img src={logo} alt="Logo" className="h-8 mr-3" />
        </Link>
        <ul className="hidden md:flex space-x-6 text-lg">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className="font-light transition-colors duration-100 cursor-pointer"
            >
              {item.external ? (
                <Link to={item.link} onClick={() => setIsMobileMenuOpen(false)}>
                  {item.label}
                </Link>
              ) : (
                <ScrollLink
                  to={item.link}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsMobileMenuOpen(false)}
                  activeClass="font-semibold"
                  spy={true}
                >
                  {item.label}
                </ScrollLink>
              )}
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-4 relative">
          <AiOutlineSearch className="w-[24px] h-[24px] text-xl cursor-pointer hover:text-yellow-400 transition-colors duration-300" />
          <FaGlobe
            className="text-xl cursor-pointer hover:text-yellow-400 transition-colors duration-300"
            onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
          />
          {isLanguageMenuOpen && (
            <ul className="absolute top-8 right-0 bg-gray-800 rounded-lg text-white p-2 shadow-lg">
              <li
                className="cursor-pointer hover:bg-gray-700 p-2"
                onClick={() => handleLanguageChange('en')}
              >
                {t('English')}
              </li>
              <li
                className="cursor-pointer hover:bg-gray-700 p-2"
                onClick={() => handleLanguageChange('uz')}
              >
                {t('Uzbek')}
              </li>
              <li
                className="cursor-pointer hover:bg-gray-700 p-2"
                onClick={() => handleLanguageChange('ru')}
              >
                {t('Russian')}
              </li>
            </ul>
          )}
          <span className="hidden md:block">{language}</span>
          <AiOutlineMenu
            className="text-xl md:hidden cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-gray-800 p-4 rounded-lg">
          <ul className="space-y-4 text-lg">
            {menuItems.map((item) => (
              <li
                key={item.label}
                className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
              >
                {item.external ? (
                  <Link
                    to={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <ScrollLink
                    to={item.link}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsMobileMenuOpen(false)}
                    activeClass="font-semibold"
                    spy={true}
                  >
                    {item.label}
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
