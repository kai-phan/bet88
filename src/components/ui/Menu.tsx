import { BarsIcon, SearchIcon } from '@/components/icons';
import main_logo from '@/assets/logos/main_logo.png';
import { Button } from '@/components/core';

export default function Menu() {
  return (
    <header className="py-4 flex justify-between gap-6 container-fluid">
      <div>
        <div className="flex items-center gap-2">
          <BarsIcon />
          <img src={main_logo} alt="logo" height={30} className="h-8" />
        </div>
      </div>

      <nav className="flex gap-2 items-center flex-1 mobile:hidden">
        <div className="mr-6">
          <SearchIcon />
        </div>

        <ul className="flex gap-6 items-center">
          <li className="text-sm uppercase text-azure-84">
            <a href="/">Home</a>
          </li>
          <li className="text-sm uppercase text-azure-84">
            <a href="/about">Game</a>
          </li>
          <li className="text-sm uppercase text-azure-84">
            <a href="/contact">Info</a>
          </li>
          <li className="text-sm uppercase text-azure-84">
            <a href="/contact">News</a>
          </li>
          <li className="text-sm uppercase text-azure-84">
            <a href="/contact">Promotions</a>
          </li>
          <li className="text-sm uppercase text-azure-84">
            <a href="/contact">Vip</a>
          </li>
        </ul>
      </nav>

      <div className="space-x-2">
        <Button>LOGIN</Button>
        <Button type="primary">REGISTRATION</Button>
      </div>
    </header>
  );
}
