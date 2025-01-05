import tournament from '@/assets/home/slides/tournament.png';

// @ts-ignore
import Glide from '@glidejs/glide';

export default function Hero() {
  return (
    <section className="my-4">
      <div
        className="mobile:hidden"
        id={'hero'}
        ref={(el) => {
          if (!el) return;

          const glide = new Glide(`#${el.id}`, {
            type: 'carousel',
            // startAt: 0,
            perView: 1,
            focusAt: 'center',
            autoplay: 3000,
            animationDuration: 1000,
            peek: { before: 300, after: 300 },
          });

          glide.mount({
            // @ts-ignore
            Test: function (Glide, Components, Events) {
              Events.on('move', function () {
                const slides = Components.Html.slides;
                const clones = Components.Clones.items;

                clones.forEach((c: any) => {
                  c.style.transition = 'all 1s';
                  c.style.transform = 'scale(0.8)';
                  c.style.opacity = '0.3';
                });

                slides.forEach((s: any, i: never) => {
                  if (i !== Glide.index) {
                    s.style.transition = 'all 1s';
                    s.style.transform = 'scale(0.8)';
                    s.style.opacity = '0.3';
                    // s.classList.add('slide--active3d');
                  } else {
                    s.style.transition = 'all 1s';
                    s.style.transform = 'scale(1)';
                    s.style.opacity = '1';
                    // s.classList.remove('slide--active3d');
                  }
                });
              });

              return {
                destroy() {
                  Events.off('move');
                },
              };
            },
          });

          return () => {
            glide.destroy();
          };
        }}
      >
        <div data-glide-el="track" className="glide__track">
          <div className="py-8 h-[420px] glide__slides">
            <div className=" mx-auto h-full rounded-3xl bg-gradient-to-r from-[#147261] to-[#082C25]">
              <div className="flex h-full justify-between items-center">
                <div className="flex flex-col basis-1/2 items-center gap-2">
                  <span className="font-bold bg-green-primary/10 px-4 py-2 rounded-full">
                    Exclusive Tournament 0
                  </span>
                  <h1 className="text-4xl text-white font-bold text-center leading-[3rem] font-jost">
                    Piggy Christmas Tap: <br /> €35,000 For Your <br /> Wins
                  </h1>
                  <button className="mt-4 bg-red-2 text-white px-16 py-2 rounded-lg font-medium tracking-wide">
                    JOIN AND WIN
                  </button>
                </div>
                <div className="basis-1/2 shrink-0 justify-items-center">
                  <img src={tournament} alt="tournament" className="w-96" />
                </div>
              </div>
            </div>

            <div className=" mx-auto h-full rounded-3xl bg-gradient-to-r from-[#147261] to-[#082C25]">
              <div className="flex h-full justify-between items-center">
                <div className="flex flex-col basis-1/2 items-center gap-2">
                  <span className="font-bold bg-green-primary/10 px-4 py-2 rounded-full">
                    Exclusive Tournament 1
                  </span>
                  <h1 className="text-4xl text-white font-bold text-center leading-[3rem] font-jost">
                    Piggy Christmas Tap: <br /> €35,000 For Your <br /> Wins
                  </h1>
                  <button className="mt-4 bg-red-2 text-white px-16 py-2 rounded-lg font-medium tracking-wide">
                    JOIN AND WIN
                  </button>
                </div>
                <div className="basis-1/2 shrink-0 justify-items-center">
                  <img src={tournament} alt="tournament" className="w-96" />
                </div>
              </div>
            </div>

            <div className=" mx-auto h-full rounded-3xl bg-gradient-to-r from-[#147261] to-[#082C25]">
              <div className="flex h-full justify-between items-center">
                <div className="flex flex-col basis-1/2 items-center gap-2">
                  <span className="font-bold bg-green-primary/10 px-4 py-2 rounded-full">
                    Exclusive Tournament 2
                  </span>
                  <h1 className="text-4xl text-white font-bold text-center leading-[3rem] font-jost">
                    Piggy Christmas Tap: <br /> €35,000 For Your <br /> Wins
                  </h1>
                  <button className="mt-4 bg-red-2 text-white px-16 py-2 rounded-lg font-medium tracking-wide">
                    JOIN AND WIN
                  </button>
                </div>
                <div className="basis-1/2 shrink-0 justify-items-center">
                  <img src={tournament} alt="tournament" className="w-96" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="desktop:hidden tablet:hidden p-4"
        id={'hero-mobile'}
        ref={(el) => {
          if (!el) return;

          const glide = new Glide(`#${el.id}`, {
            type: 'carousel',
            startAt: 0,
            perView: 1,
            focusAt: 'center',
            autoplay: 3000,
            animationDuration: 1000,
          });

          glide.mount();

          return () => {
            glide.destroy();
          };
        }}
      >
        <div data-glide-el="track" className="glide__track">
          <div className="py-8 h-[520px] glide__slides">
            <div className=" mx-auto h-full rounded-3xl bg-gradient-to-r from-[#147261] to-[#082C25]">
              <div className="flex h-full justify-between items-center relative">
                <div className="flex w-full flex-col items-center">
                  <span className="font-bold bg-green-primary/10 px-4 py-2 rounded-full">
                    Exclusive Tournament
                  </span>
                  <h1 className="text-4xl text-white font-bold text-center leading-[3rem] font-jost">
                    Piggy Christmas Tap: <br /> €35,000 For Your <br /> Wins
                  </h1>
                  <button className="mt-4 bg-red-2 text-white px-16 py-2 rounded-lg font-medium tracking-wide">
                    JOIN AND WIN
                  </button>
                </div>
                <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                  <img src={tournament} alt="tournament" className="w-48 " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
