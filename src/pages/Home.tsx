import Hero from '@/containers/home/Hero';
import { Footer, Menu } from '@/components/ui';
import Filter from '@/containers/home/Filter.tsx';
import Games from '@/containers/home/Games.tsx';
import Providers from '@/containers/home/Providers.tsx';

export default function Home() {
  return (
    <main className="">
      <Menu />
      <Hero />
      <Filter />
      <Games />
      <Providers />
      <Footer />
    </main>
  );
}
