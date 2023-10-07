import Image from "next/image";
import Stripe from "./Stripe";

export default function Hero() {
    return (
        <section className="w-full relative h-[calc(100vh-72px)] flex justify-center">
            <Image src="/hero.png" alt="Hero" layout="fill" objectFit="cover" className='brightness-[.6]' />
            <aside className="z-10 mt-10 w-full flex items-center justify-center overflow-hidden">
                <div className=" w-full z-0 items-center h-1/2 flex flex-col gap-5 px-3">
                    <div className="relative">
                        <Image src="/someshit.svg" alt="Logo" width={200} height={200} className='absolute w-[100px] lg:w-[200px] top-0 right-0 translate-x-1/2 -translate-y-1/3 z-0' />
                        <h1 className='text-3xl bottom-20 w-full font-bossa_black md:text-7xl text-[#F4F1EA] shadow-[#3862AE] text-shadow-lg font-outline-6 sm:font-outline-8 font-black z-10 relative'>
                            Grand Launching
                            <br />
                            Depok Kita UI
                            <br />
                            2023
                        </h1>
                    </div>
                    <div id="donasi" className="py-2 sm:py-4 absolute bottom-0 px-5 w-full font-jkt bg-[#3862AE] text-white rounded-t-3xl">
                        <Stripe />
                        <div className="flex flex-col items-center justify-center mb-5">
                            <p className='mb-5 text-lg md:text-2xl text-center my-5 font-bold'>
                                10 Ribu Untuk Kampung KB Cipayung Jaya
                            </p>
                            <a href="https://kitabisa.com/campaign/sepuluhribuuntukkampungcipayung" target="_blank" className='text-[#3862AE] bg-white font-bold text-lg px-5 py-2 rounded-full shadow-lg hover:bg-[#2E4A7E] transition-colors duration-300'>
                                Yuk Gabung!
                            </a>
                        </div>
                    </div>
                </div>
            </aside>
            <aside className='flex-1'></aside>
        </section>)
}