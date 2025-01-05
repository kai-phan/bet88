import { Button } from '@/components/core';
import { GamesIcon, ProvidersIcon } from '@/components/icons';

import diamond from '@/assets/icons/diamond.png';
import vip from '@/assets/icons/vip.png';
import promotions from '@/assets/icons/promotions.png';
import hot_match from '@/assets/icons/match.png';
import p2p_transaction from '@/assets/icons/p2p.png';

const list = [
  {
    text: 'Diamond',
    icon: diamond,
  },
  {
    text: 'VIP',
    icon: vip,
  },
  {
    text: 'Promotions',
    icon: promotions,
  },
  {
    text: 'Hot Match',
    icon: hot_match,
  },
  {
    text: 'P2P Transaction',
    icon: p2p_transaction,
  },
];

export default function Filter() {
  return (
    <section className="container-fluid py-8 border-b border-azure-18">
      <ul className="flex gap-3 tablet:flex-wrap">
        {list.map((item) => {
          return (
            <li key={item.text} className="mobile:hidden">
              <a
                href="#"
                className="flex justify-center items-center gap-3 text-sm py-4 px-8 border border-azure-18 rounded-xl"
              >
                <img src={item.icon} alt={item.text} className="w-6 h-6" />
                <span>{item.text}</span>
              </a>
            </li>
          );
        })}
        <li className="flex-1">
          <Button className="px-8 py-4 w-full">
            <GamesIcon />
            Games
          </Button>
        </li>
        <li className="flex-1">
          <Button className="px-8 py-4 w-full">
            <ProvidersIcon />
            Providers
          </Button>
        </li>
      </ul>
    </section>
  );
}
