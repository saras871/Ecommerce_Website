import Image from "next/image";
export default function Home() {
  return (
    <main>
      <div className="body">
        <div className="flex justify-center gap-6 py-2 text-xs top-bar">
          <p>Free shipping on orders over $50</p>
          <p>Easy return within 30 days</p>
        </div>
        <div className="px-6 ">
          <nav className="flex items-center justify-between py-6 mx-auto max-w-7xl">
            <h1 className="text-2xl font-medium tracking-wide ">NOVA</h1>
            <div className="flex gap-8 text-sm hidden md:flex ">
              <a href="#" className="transition hover:opacity-60">Shop</a>
              <a href="#" className="transition hover:opacity-60">Categories</a>
              <a href="#" className="transition hover:opacity-60">New In</a>
              <a href="#" className="transition hover:opacity-60">Deals</a>
            </div>
            <div className="hidden md:flex items-center rounded-full border bg-white px-4 py-2">
              <input className="w-64 outline-none"
                type="text"
                placeholder="Search products..." />

              <span className="ml-2">⌕</span>
            </div>
            <div className="flex gap-4 text-lg items-center">
              <button className="transition hover:opacity-60">♡</button>
              <button className="transition hover:opacity-60">🛒</button>
            </div>
          </nav>

          <section>
            <div className="grid overflow-hidden rounded-[24px] secondary md:grid-cols-[45%_55%]">
              <div className="flex flex-col justify-center p-10 md:p-16">
                <p className="mb-4 text-sm tracking-wide text-gray-600">
                  SUMMER COLLECTION
                </p>


                <h2 className="max-w-lg text-5xl leading-[1.1] font-medium md:text-6xl">
                  Elevate your everyday
                </h2>

                <p className="mt-6 max-w-sm text-gray-600">
                  Fresh finds, modern design and something new for every room.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button className="rounded-[14px] button px-6 py-3 text-sm text-white transition hover:opacity-80">
                    Shop now
                  </button>

                  <button className="rounded-[14px] border px-6 py-3 text-sm transition hover:bg-white">
                    Explore inspiration
                  </button>
                </div>
              </div>

              <div className="relative min-h-[500px] ">
                <Image
                  src="/images/living_room.jpg"
                  alt="Modern living room"
                  fill className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

            </div>
          </section>


          <section className="mt-14">
            <div className="mt-10 grid gap-6 md:grid-cols-7">
              <div className=" group overflow-hidden ">
         
                  <div className="relative h-[160px] rounded-[20px] overflow-hidden transition duration-500 group-hover:scale-105">
                <Image
                  src="/images/c_living_room.jpg"
                  alt="Modern living room"
                  fill className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
                <div className="p-6 text-center">
                  <h4 className="text-lg font-medium">
                    Living Room
                  </h4>

                </div>
              </div>
              <div className="group overflow-hidden ">
                <div className="relative h-[160px] rounded-[20px] overflow-hidden transition duration-500 group-hover:scale-105">
                <Image
                  src="/images/c_bedroom.jpg"
                  alt="Modern bedroom"
                  fill className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
                <div className="p-6 text-center">
                  <h4 className="text-lg font-medium">
                    Bedroom
                  </h4>
                </div>
              </div>
              <div className="group overflow-hidden ">
              <div className="relative h-[160px] rounded-[20px] overflow-hidden transition duration-500 group-hover:scale-105">
                <Image
                  src="/images/c_kitchen.jpg"
                  alt="Modern kitchen"
                  fill className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
                <div className="p-6 text-center">
                  <h4 className="text-lg font-medium">
                    Kitchen
                  </h4>
                </div>
              </div>
              <div className="group overflow-hidden ">
                <div className="relative h-[160px] rounded-[20px] overflow-hidden transition duration-500 group-hover:scale-105">
                <Image
                  src="/images/c_baby_room.jpg"
                  alt="Baby toy"
                  fill className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
                <div className="p-6 text-center">
                  <h4 className="text-lg font-medium">
                    Baby Room
                  </h4>
                </div>
              </div>
              <div className="group overflow-hidden ">
                <div className="relative h-[160px] rounded-[20px] overflow-hidden transition duration-500 group-hover:scale-105">
                <Image
                  src="/images/c_outdoor.jpg"
                  alt="Outdoor interior"
                  fill className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
                <div className="p-6 text-center">
                  <h4 className="text-lg font-medium">
                    Outdoor
                  </h4>
                </div>
              </div>
              <div className="group overflow-hidden ">
               <div className="relative h-[160px] rounded-[20px] overflow-hidden transition duration-500 group-hover:scale-105">
                <Image
                  src="/images/c_office.jpg"
                  alt="Modern home office"
                  fill className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
                <div className="p-6 text-center">
                  <h4 className="text-lg font-medium">
                    Office
                  </h4>
                </div>
              </div>
              <div className="group overflow-hidden">
                <div className="flex flex-col items-center justify-center h-[160px] secondary rounded-[20px]">
                  <h4 className="text-lg font-medium">
                    View all
                  </h4>
                  <h4 className="text-lg font-medium">
                    →
                  </h4>

                </div>

              </div>
            </div>
          </section>

          <section className="mt-24">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-medium">
                Featured products
              </h3>

              <button className="text-sm transition hover:opacity-60">
                View all
              </button>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

              <div className="group">
                 <div className="relative h-[240px] rounded-[20px] overflow-hidden transition duration-500 group-hover:scale-105">
                <Image
                  src="/images/p_vas.png"
                  alt="Beige vase"
                  fill className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

                <div className="mt-5">
                  <h4 className="text-lg font-medium">
                    Ceramic Vase
                  </h4>

                  <p className="mt-3 text-sm font-medium">
                    $48
                  </p>
                </div>
              </div>

              <div className="group">
                  <div className="relative h-[240px] rounded-[20px] overflow-hidden transition duration-500 group-hover:scale-105">
                <Image
                  src="/images/p_bricka.png"
                  alt="Wood tray"
                  fill className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

                <div className="mt-5">
                  <h4 className="text-lg font-medium">
                    Tray
                  </h4>

                  <p className="mt-3 text-sm font-medium">
                    $42
                  </p>
                </div>
              </div>
              <div className="group">
                  <div className="relative h-[240px] rounded-[20px] overflow-hidden transition duration-500 group-hover:scale-105">
                <Image
                  src="/images/p_vas_rund.png"
                  alt="Green vase"
                  fill className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

                <div className="mt-5">
                  <h4 className="text-lg font-medium">
                    Vase
                  </h4>

                  <p className="mt-3 text-sm font-medium">
                    $38
                  </p>
                </div>
              </div>
              <div className="group">
                  <div className="relative h-[240px] rounded-[20px] overflow-hidden transition duration-500 group-hover:scale-105">
                <Image
                  src="/images/p_filt.png"
                  alt="Beige blanket"
                  fill className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

                <div className="mt-5">
                  <h4 className="text-lg font-medium">
                    Blanket
                  </h4>

                  <p className="mt-3 text-sm font-medium">
                    $50
                  </p>
                </div>
              </div>
              <div className="group">
                <div className="relative h-[240px] rounded-[20px] overflow-hidden transition duration-500 group-hover:scale-105">
                <Image
                  src="/images/p_doftpinnar.png"
                  alt="Silver fragrance sticks"
                  fill className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

                <div className="mt-5">
                  <h4 className="text-lg font-medium">
                    Fragrance sticks
                  </h4>

                  <p className="mt-3 text-sm font-medium">
                    $28
                  </p>
                </div>
              </div>

            </div>
          </section>
          <section className="mt-24">
            <div className="grid overflow-hidden rounded-[20px] md:grid-cols-[40%_20%_20%_20%]">
              <div className="group overflow-hidden">
                <div className="p-6 flex flex-col gap-2 justify-start h-[160px] top-bar rounded-[8px]">
                  <h4 className="text-lg font-medium">
                    Join NOVA Club
                  </h4>
                  <p className="text-sm max-w-xs">Get exclusive offers, early access and inspiration - just for members</p>
                  <button className="rounded-[8px] border px-6 py-2 text-sm font-medium max-w-[120px] max-h-[40px] transition hover:bg-white">
                    Join now
                  </button>
                </div>
              </div>
              <div className="-ml-2 group overflow-hidden">
                <div className="p-10 pt-12 flex gap-6 items-center justify-start h-[160px] primary rounded-[8px] text-white">
                  <p className="text-lg font-medium ">↓</p>
                  <h4 className="text-lg max-w-[120px] leading-snug">
                    Free shipping over $50
                  </h4>
                </div>
              </div>
              <div className="-ml-2 group overflow-hidden">
                <div className="p-10 pt-12 flex gap-6 items-center justify-start h-[160px] accent rounded-[8px] text-white">
                  <p className="text-lg font-medium ">↓</p>
                  <h4 className="text-lg max-w-[120px] leading-snug">
                    30-day returns hassle free
                  </h4>
                </div>
              </div>
              <div className="-ml-2 group overflow-hidden">
                <div className="p-10 pt-12 flex gap-6 items-center justify-start h-[160px] button rounded-[8px] text-white">
                  <p className="text-lg font-medium">↓</p>
                  <h4 className="text-lg max-w-[140px] leading-snug">
                    Secure payments 100% safe
                  </h4>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-24">
            <h3 className="text-3xl font-medium">
              Inspiration for every space
            </h3>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              <div className="group">
                  <div className="relative h-[300px] rounded-[20px] overflow-hidden transition duration-500 group-hover:scale-105">
                <Image
                  src="/images/i_table_setting.jpg"
                  alt="Table setting"
                  fill className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>


                <div className="mt-6">
                  <h4 className="text-lg font-medium text-center">
                    Table setting
                  </h4>
                </div>
              </div>
            <div className="group">
              <div className="relative h-[300px] rounded-[20px] overflow-hidden transition duration-500 group-hover:scale-105">
                <Image
                  src="/images/i_bedroom.jpg"
                  alt="Duvet cover"
                  fill className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-medium text-center">
                  Bedroom
                </h4>
              </div>
            </div>
            <div className="group">
              <div className="relative h-[300px] rounded-[20px] overflow-hidden transition duration-500 group-hover:scale-105">
                <Image
                  src="/images/i_living_room.jpg"
                  alt="Living room"
                  fill className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-medium text-center">
                  Living room
                </h4>
              </div>
            </div>
            <div className="group">
              <div className="relative h-[300px] rounded-[20px] overflow-hidden transition duration-500 group-hover:scale-105">
                <Image
                  src="/images/i_baby_room.jpg"
                  alt="Baby room"
                  fill className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-medium text-center">
                  Baby room
                </h4>
              </div>
            </div>
            </div>
          </section>
        </div>

      </div>
    </main>

  );
}