import { MenuIcon } from '@/components/icons';
// @ts-ignore
import Glide from '@glidejs/glide';

import blue_chip from '@/assets/games/blue_chip.png';
import deep_dive from '@/assets/games/deep_dive.png';
import fury_balloon from '@/assets/games/fury_balloon.png';
import jackpot from '@/assets/games/jackpot.png';
import god_bluechip from '@/assets/games/god_bluechip.png';
import launchx from '@/assets/games/launchx.png';
import match from '@/assets/games/match.png';
import night_heist from '@/assets/games/night_heist.png';
import roulette from '@/assets/games/roulette.png';
import trouble_jet from '@/assets/games/trouble_jet.png';

const games = [
  {
    name: 'Blue Chip',
    image: blue_chip,
    type: 'hot',
  },
  {
    name: 'Deep Dive',
    image: deep_dive,
    type: 'new',
  },
  {
    name: 'Fury Balloon',
    image: fury_balloon,
    type: 'hot',
  },
  {
    name: 'Jackpot',
    image: jackpot,
    type: 'new',
  },
  {
    name: 'God Bluechip',
    image: god_bluechip,
    type: 'hot',
  },
  {
    name: 'Launchx',
    image: launchx,
    type: 'new',
  },
  {
    name: 'Match',
    image: match,
    type: 'hot',
  },
  {
    name: 'Night Heist',
    image: night_heist,
    type: 'new',
  },
  {
    name: 'Roulette',
    image: roulette,
    type: 'hot',
  },
  {
    name: 'Trouble Jet',
    image: trouble_jet,
    type: 'new',
  },
];

export default function Games() {
  return (
    <section className="container-fluid py-8">
      <div className="flex justify-between items-center mb-8">
        <h4 className="text-3xl font-medium">Exclusive Games</h4>
        <a href="#" className="flex items-center gap-2">
          <span className="mobile:hidden">SEE ALL</span>
          <MenuIcon />
        </a>
      </div>

      <div
        className="glide"
        id={'games'}
        ref={(el) => {
          if (!el) return;

          const glide = new Glide(`#${el.id}`, {
            type: 'carousel',
            startAt: 0,
            perView: 8,
            peek: { before: 100, after: 50 },
            autoplay: 2000,
            animationDuration: 1000,
            breakpoints: {
              1024: {
                perView: 4,
              },
              768: {
                perView: 3,
              },
              640: {
                perView: 2,
              },
            },
          });

          glide.mount();

          return () => {
            glide.destroy();
          };
        }}
      >
        <div data-glide-el="track" className="glide__track">
          <ul className="glide__slides">
            {games.map((game) => {
              return (
                <li key={game.name} className="glide__slide">
                  <img src={game.image} alt={game.name} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
