import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Article } from '@/components/Article'

const inter = Inter({ subsets: ['latin'] })

export const Home = () => {
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
      <div className='text-center font-bossa mt-10 text-blue-950 font-bold text-[64px]'>
        Artikel
      </div>
      <div className='gap-10 mt-5 mb-28 flex h-max items-center justify-center mx-16'>
        <div className='flex flex-col gap-10'>
          <Article />
          <Article />
        </div>
        <div className="w-3 h-96 bg-zinc-300 rounded-2xl" />
        <div className='flex flex-col gap-10'>
          <Article />
          <Article />
        </div>
      </div>
      <img src="/stripe.svg" className='w-full' />

    </main>
  )
}

export default Home
