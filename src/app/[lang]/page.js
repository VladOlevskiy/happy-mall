import { getDictionary } from '../../../getDictionary';
import { Hero } from './(components)/Home/Hero/Hero';
import { About } from './(components)/Home/About/About';
import { New } from './(components)/Home/New/New';
import Slider from './(components)/Home/Slider/Slider';

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <main>
      <Hero lang={lang} dict={dict} />
      <About lang={lang} dict={dict} />
      <New lang={lang} dict={dict} />
      <Slider dict={dict} />
    </main>
  );
}
