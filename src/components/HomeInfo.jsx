import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Zdravím, 👋 my jsme
        <span className='font-semibold mx-2 text-white'>Centrum</span>
        <br />
        Skupina Kreativců z 🇨🇿
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Na začátku naší cesty <br /> ale schopni mnoha věcí a dovedností
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Chci vědět víc
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Pomáháme malým firem k větším úspěchům v podnikání <br /> Chtěli byste vědět víc?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Koukněte na další projekty v našem portfoliu
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Hledatá developera pro Váš pojekt? <br/> Jsme tu jen pár kliknutí pro Vás
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Mám zájem
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
