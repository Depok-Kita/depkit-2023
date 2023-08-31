import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const Article = () => {
  return (
    <main
      className={`bg-[#F2FAFE]`}
    >
      <section className="w-full h-[calc(100vh-72px)] relative flex justify-center">
        <Image src="/hero.png" alt="Hero" layout="fill" objectFit="cover" className='brightness-[.6]' />
        <aside className="ml-20 z-10 flex-1 flex items-center justify-center">
          <div className="relative z-0 flex flex-col gap-5">
            <Image src="/someshit.svg" alt="Logo" width={200} height={200} className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/3 z-0' />
            <h1 className='text-4xl font-bossa md:text-7xl text-[#F4F1EA] shadow-[#3862AE] text-shadow-lg font-outline-8 font-bold z-10 relative'>
              Grand Launching
              <br />
              Depok Kita UI
              <br />
              2023
            </h1>
            <div className="py-4 px-5 bg-[#3862AE] text-white rounded-lg">
              <p className='mb-3 text-xl'>
                Pembukaan kegiatan pengabdian masyarakat
                <br />
                Departemen Sosial Masyarakat BEM UI 2022
              </p>
              <button className='text-[#3862AE] bg-white font-bold text-lg px-5 py-2 rounded-full shadow-lg hover:bg-[#2E4A7E] transition-colors duration-300'>
                Daftar Sekarang
              </button>
            </div>
          </div>
        </aside>
        <aside className='flex-1'></aside>
      </section>
      <section id="sosvent" className='relative mt-5 p-10 min-h-screen'>
        <aside className="p-5 shadow-md bg-white rounded-lg h-full">
          <h1 className='text-4xl font-bossa md:text-7xl font-bold text-blue-950 text-center'>Social Event Timeline</h1>
          <div className='p-5 mt-10 overflow-x-scroll'>
            <img src="/timeline.svg" className='min-w-[700px] w-full' />
          </div>
        </aside>
      </section>
      <img src="/stripe.svg" className='w-full' />
      {/* <div className="w-[1080px] h-[486px] relative">
        <div className="left-[403px] top-0 absolute text-center text-blue-950 text-[64px] font-bold">Artikel</div>
        <div className="w-1 h-[372px] left-[538px] top-[114px] absolute bg-zinc-300 rounded-[20px]"></div>
        <div className="w-[494px] h-[165px] left-0 top-[114px] absolute">
          <div className="w-[494px] h-[165px] left-0 top-0 absolute bg-white rounded-[20px] shadow"></div>
          <div className="w-[150px] h-[115.30px] left-[20px] top-[24.85px] absolute bg-zinc-300 rounded-[20px]"></div>
          <div className="h-[114.31px] left-[186px] top-[24.85px] absolute">
            <div className="w-72 h-[56.66px] left-0 top-[21.87px] absolute text-blue-950 text-base font-bold leading-tight">Rapat Koordinasi Lomba Posyandu dan Kader Posyandu Tingkat Provinsi Jawa Barat</div>
            <div className="w-72 h-[27.83px] left-0 top-[86.48px] absolute text-neutral-400 text-xs font-semibold leading-[14.40px]">Dinas Kesehatan (Dinkes) Kota Depok mengadakan rapat Koordinasi Lomba Posyandu...</div>
            <div className="w-[114px] h-[13.92px] left-0 top-0 absolute text-neutral-400 text-xs font-semibold leading-[14.40px]">Selasa, 27 Mei 2023</div>
          </div>
        </div>
        <div className="w-[494px] h-[165px] left-0 top-[321px] absolute">
          <div className="w-[494px] h-[165px] left-0 top-0 absolute bg-white rounded-[20px] shadow"></div>
          <div className="w-[150px] h-[115.30px] left-[20px] top-[24.85px] absolute bg-zinc-300 rounded-[20px]"></div>
          <div className="h-[114.31px] left-[186px] top-[24.85px] absolute">
            <div className="w-72 h-[56.66px] left-0 top-[21.87px] absolute text-blue-950 text-base font-bold leading-tight">Rapat Koordinasi Lomba Posyandu dan Kader Posyandu Tingkat Provinsi Jawa Barat</div>
            <div className="w-72 h-[27.83px] left-0 top-[86.48px] absolute text-neutral-400 text-xs font-semibold leading-[14.40px]">Dinas Kesehatan (Dinkes) Kota Depok mengadakan rapat Koordinasi Lomba Posyandu...</div>
            <div className="w-[114px] h-[13.92px] left-0 top-0 absolute text-neutral-400 text-xs font-semibold leading-[14.40px]">Selasa, 27 Mei 2023</div>
          </div>
        </div>
        <div className="w-[494px] h-[165px] left-[586px] top-[114px] absolute">
          <div className="w-[494px] h-[165px] left-0 top-0 absolute bg-white rounded-[20px] shadow"></div>
          <div className="w-[150px] h-[115.30px] left-[20px] top-[24.85px] absolute bg-zinc-300 rounded-[20px]"></div>
          <div className="h-[114.31px] left-[186px] top-[24.85px] absolute">
            <div className="w-72 h-[56.66px] left-0 top-[21.87px] absolute text-blue-950 text-base font-bold leading-tight">Rapat Koordinasi Lomba Posyandu dan Kader Posyandu Tingkat Provinsi Jawa Barat</div>
            <div className="w-72 h-[27.83px] left-0 top-[86.48px] absolute text-neutral-400 text-xs font-semibold leading-[14.40px]">Dinas Kesehatan (Dinkes) Kota Depok mengadakan rapat Koordinasi Lomba Posyandu...</div>
            <div className="w-[114px] h-[13.92px] left-0 top-0 absolute text-neutral-400 text-xs font-semibold leading-[14.40px]">Selasa, 27 Mei 2023</div>
          </div>
        </div>
        <div className="w-[494px] h-[165px] left-[586px] top-[321px] absolute">
          <div className="w-[494px] h-[165px] left-0 top-0 absolute bg-white rounded-[20px] shadow"></div>
          <div className="w-[150px] h-[115.30px] left-[20px] top-[24.85px] absolute bg-zinc-300 rounded-[20px]"></div>
          <div className="h-[114.31px] left-[186px] top-[24.85px] absolute">
            <div className="w-72 h-[56.66px] left-0 top-[21.87px] absolute text-blue-950 text-base font-bold leading-tight">Rapat Koordinasi Lomba Posyandu dan Kader Posyandu Tingkat Provinsi Jawa Barat</div>
            <div className="w-72 h-[27.83px] left-0 top-[86.48px] absolute text-neutral-400 text-xs font-semibold leading-[14.40px]">Dinas Kesehatan (Dinkes) Kota Depok mengadakan rapat Koordinasi Lomba Posyandu...</div>
            <div className="w-[114px] h-[13.92px] left-0 top-0 absolute text-neutral-400 text-xs font-semibold leading-[14.40px]">Selasa, 27 Mei 2023</div>
          </div>
        </div>
      </div> */}
    </main>
  )
}
