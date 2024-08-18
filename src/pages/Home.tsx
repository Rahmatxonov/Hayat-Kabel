import About from '../components/About';
import Contact from '../components/Contact';
import Document from '../components/Document';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import News from '../components/News';
import Products from '../components/Products';

const Home = () => {
  return (
    <div>
      <header id="home">
        <Header />
      </header>
      <main>
        <section id="about">
          <About />
        </section>
        <section id="products">
          <Products />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="documents">
          <Document />
        </section>
        <section id="news">
          <News />
        </section>
        <section id="contacts">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Home;
