import { Button } from '@/components/core';

import telegram from '@/assets/socials/telegram.png';
import fb from '@/assets/socials/fb.png';
import instagram from '@/assets/socials/instagram.png';
import x from '@/assets/socials/x.png';
import apple from '@/assets/socials/apple.png';
import android from '@/assets/socials/android.png';

export default function Footer() {
  return (
    <footer className="bg-azure-18 py-16 mobile:py-4">
      <div className="container-fluid mobile:hidden grid grid-cols-5">
        <div>
          <h5 className="text-2xl font-medium mb-4">Help center</h5>
          <p className="text-azure-84 text-sm font-light mb-4">
            If you have any questions?
          </p>

          <Button className="bg-blue !px-14">Get answers</Button>

          <ul className="flex gap-6 my-8">
            <li>
              <a href="#">
                <img src={telegram} alt="telegram" className="w-8 h-8" />
              </a>
            </li>

            <li>
              <a href="#">
                <img src={fb} alt="fb" className="w-8 h-8" />
              </a>
            </li>

            <li>
              <a href="#">
                <img src={instagram} alt="instagram" className="w-8 h-8" />
              </a>
            </li>

            <li>
              <a href="#">
                <img src={x} alt="x" className="w-8 h-8" />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="text-lg font-medium mb-4">Games</h6>
          <ul className="space-y-4">
            <li className="text-azure-84 text-sm font-light ">Game 1</li>
            <li className="text-azure-84 text-sm font-light ">Game 2</li>
            <li className="text-azure-84 text-sm font-light ">Game 3</li>
            <li className="text-azure-84 text-sm font-light ">Game 4</li>
          </ul>
        </div>

        <div>
          <h6 className="text-lg font-medium mb-4">About</h6>
          <ul className="space-y-4">
            <li className="text-azure-84 text-sm font-light ">About us</li>
            <li className="text-azure-84 text-sm font-light ">Promotions</li>
            <li className="text-azure-84 text-sm font-light ">VIP</li>
            <li className="text-azure-84 text-sm font-light ">Help center</li>
            <li className="text-azure-84 text-sm font-light ">
              Awards & Certificates
            </li>
            <li className="text-azure-84 text-sm font-light ">App</li>
          </ul>
        </div>

        <div>
          <h6 className="text-lg font-medium mb-4">Legal Information</h6>
          <ul className="space-y-4">
            <li className="text-azure-84 text-sm font-light ">
              General Terms & Conditions
            </li>
            <li className="text-azure-84 text-sm font-light ">
              Responsible Gaming Policy
            </li>
            <li className="text-azure-84 text-sm font-light ">
              Sports Betting Rules
            </li>
            <li className="text-azure-84 text-sm font-light ">
              Privacy and Cookies Policy
            </li>
            <li className="text-azure-84 text-sm font-light ">
              Payment Methods
            </li>
            <li className="text-azure-84 text-sm font-light ">Limits</li>
          </ul>
        </div>

        <div className="justify-items-end">
          <div className="flex max-w-[12rem] bg-nepal-3 items-center pl-4 pr-6 py-2 rounded-xl gap-2 mb-2">
            <img src={apple} alt="apples" className="w-10 h-10 shrink-0" />
            <span>Bluechip App for Mac OS</span>
          </div>

          <div className="flex w-[12rem] gap-2 justify-between">
            <div className="basis-1/2 flex flex-col  bg-nepal-3 p-2 items-center rounded-xl">
              <img src={android} alt="apples" className="w-10 h-10 shrink-0" />
              <span>Android</span>
            </div>

            <div className="basis-1/2 flex flex-col  bg-nepal-3 p-2 items-center rounded-xl">
              <img src={apple} alt="apples" className="w-10 h-10 shrink-0" />
              <span>IOS</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid desktop:hidden space-y-4">
        <details className="p-4 bg-nepal-2">
          <summary className="text-lg font-medium">Games</summary>
          <ul className="space-y-4 mt-4">
            <li className="text-azure-84 text-sm font-light ">Game 1</li>
            <li className="text-azure-84 text-sm font-light ">Game 3</li>
            <li className="text-azure-84 text-sm font-light ">Game 2</li>
            <li className="text-azure-84 text-sm font-light ">Game 4</li>
          </ul>
        </details>

        <details className="p-4 bg-nepal-2">
          <summary className="text-lg font-medium">About</summary>
          <ul className="space-y-4 mt-4">
            <li className="text-azure-84 text-sm font-light ">About us</li>
            <li className="text-azure-84 text-sm font-light ">Promotions</li>
            <li className="text-azure-84 text-sm font-light ">VIP</li>
            <li className="text-azure-84 text-sm font-light ">Help center</li>
            <li className="text-azure-84 text-sm font-light ">
              Awards & Certificates
            </li>
            <li className="text-azure-84 text-sm font-light ">App</li>
          </ul>
        </details>

        <details className="p-4 bg-nepal-2">
          <summary className="text-lg font-medium">Legal Information</summary>
          <ul className="space-y-4 mt-4">
            <li className="text-azure-84 text-sm font-light ">
              General Terms & Conditions
            </li>
            <li className="text-azure-84 text-sm font-light ">
              Responsible Gaming Policy
            </li>
            <li className="text-azure-84 text-sm font-light ">
              Sports Betting Rules
            </li>
            <li className="text-azure-84 text-sm font-light ">
              Privacy and Cookies Policy
            </li>
            <li className="text-azure-84 text-sm font-light ">
              Payment Methods
            </li>
            <li className="text-azure-84 text-sm font-light ">Limits</li>
          </ul>
        </details>

        <div className="my-8">
          <p className="text-center font-jost mb-4">Follow us</p>
          <ul className="flex w-full justify-around gap-6 mb-8">
            <li>
              <a href="#">
                <img src={telegram} alt="telegram" className="w-12 h-12" />
              </a>
            </li>

            <li>
              <a href="#">
                <img src={fb} alt="fb" className="w-12 h-12" />
              </a>
            </li>

            <li>
              <a href="#">
                <img src={instagram} alt="instagram" className="w-12 h-12" />
              </a>
            </li>

            <li>
              <a href="#">
                <img src={x} alt="x" className="w-12 h-12" />
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-nepal-3 p-4 flex justify-between items-center rounded-xl mb-2">
          <div>
            <h5 className="text-xl font-medium mb-2">Help center</h5>
            <p className="text-azure-84 text-sm font-light">
              If you have any questions?
            </p>
          </div>

          <Button className="bg-blue h-fit">Get answers</Button>
        </div>

        <div className="flex gap-2 justify-between">
          <div className="basis-1/2 flex flex-col  bg-nepal-3 p-2 items-center rounded-xl">
            <img src={android} alt="apples" className="w-10 h-10 shrink-0" />
            <span>Android</span>
          </div>

          <div className="basis-1/2 flex flex-col  bg-nepal-3 p-2 items-center rounded-xl">
            <img src={apple} alt="apples" className="w-10 h-10 shrink-0" />
            <span>IOS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
