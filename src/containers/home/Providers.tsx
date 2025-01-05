import { MenuIcon } from '@/components/icons';
// @ts-ignore
import Glide from '@glidejs/glide';

import hp from '@/assets/providers/100hp.png';
import bgaming from '@/assets/providers/bgaming.png';
import evolutions from '@/assets/providers/evolutions.png';
import smartsoft from '@/assets/providers/smartsoft.png';
import stribe from '@/assets/providers/stribe.png';
import turbo from '@/assets/providers/turbo.png';
import veliplay from '@/assets/providers/veliplay.png';
import wazdan from '@/assets/providers/wazdan.png';

const providers = [
  { name: '100HP', image: hp, games: 123 },
  { name: 'BGaming', image: bgaming, games: 24 },
  { name: 'Evolutions', image: evolutions, games: 12 },
  { name: 'Smartsoft', image: smartsoft, games: 34 },
  { name: 'Stribe', image: stribe, games: 143 },
  { name: 'Turbo', image: turbo, games: 23 },
  { name: 'Veliplay', image: veliplay, games: 43 },
  { name: 'Wazdan', image: wazdan, games: 54 },
];

export default function Games() {
  return (
    <section className="container-fluid py-8">
      <div className="flex justify-between items-center mb-8">
        <h4 className="text-3xl font-medium">All Providers</h4>
        <a href="#" className="flex items-center gap-2">
          <span className="mobile:hidden">SEE ALL</span>
          <MenuIcon />
        </a>
      </div>

      <div
        className="glide"
        id={'providers'}
        ref={(el) => {
          if (!el) return;

          const glide = new Glide(`#${el.id}`, {
            type: 'carousel',
            startAt: 0,
            perView: 6,
            autoplay: 2000,
            breakpoints: {
              1024: {
                perView: 4,
              },
              768: {
                perView: 3,
              },
              640: {
                perView: 3,
              },
            },
            animationDuration: 1000,
          });

          glide.mount();

          return () => {
            glide.destroy();
          };
        }}
      >
        <div data-glide-el="track" className="glide__track">
          <ul className="glide__slides">
            {providers.map((provider) => {
              return (
                <li key={provider.name} className="glide__slide">
                  <div className="flex flex-col items-center overflow-hidden rounded-md">
                    <div className="px-4 py-6 flex justify-center items-center bg-azure-18">
                      <img
                        src={provider.image}
                        alt={provider.name}
                        className="w-2/3 shrink-0"
                      />
                    </div>
                    <div className="bg-nepal-2 w-full py-3">
                      <p className="underline text-center mb-1">
                        {provider.name}
                      </p>
                      <a className="text-nepal block text-sm text-center underline">
                        {provider.games} games
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
