import Hero from '../components/Hero';
import NotFound from '../components/NotFound';
import ErrorImg from '../assets/1.jpg';

function Error404() {
  return (
    <>
      <Hero
        cName="hero-mid-error"
        heroImg={ErrorImg}

      />
      <NotFound />

    </>
  );
}
export default Error404;