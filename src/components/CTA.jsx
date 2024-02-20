import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Máte nápad na projekt? <br className='sm:block hidden' />
        Pojďme něco udělat společně!
      </p>
      <Link to='/contact' className='btn'>
        Kontakt
      </Link>
    </section>
  );
};

export default CTA;
