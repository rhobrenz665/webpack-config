import Recipes from './Recipes';
import '../styles/index.scss';
import sword from '../images/swc-sword.png';
import swordSvg from '../images/sword.svg';

const App = () => {
  return (
    <>
      <section className='hero'></section>
      <main>
        <section>
          <Recipes />
        </section>
        <img src={sword} alt='sword' width='250' />
        <img src={swordSvg} alt='sword' width='250' />
      </main>
    </>
  );
};

export default App;
