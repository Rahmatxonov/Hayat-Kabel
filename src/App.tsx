import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import Products from './components/Products';
import ProductDetail from './pages/ProductDetail';
import Navbar from './components/Navbar';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationsEn from './locale/translationsEn';
import translationsUz from './locale/translationsUz';
import translationsRu from './locale/translationsRu';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEn },
    uz: { translation: translationsUz },
    ru: { translation: translationsRu },
  },
  lng: 'en',
  fallbackLng: 'en',
});

const App: React.FC = () => {
  const changeLanguages = (value: string): void => {
    i18n.changeLanguage(value);
  };

  return (
    <div>
      <Navbar changeLanguages={changeLanguages} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
