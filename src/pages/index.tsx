import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Article } from '@/components/Article'
import Stripe from '@/components/Stripe'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export const Home = () => {
  return (
    <main
      className={`bg-[#F2FAFE]`}
    >
      <Hero />
      <section id="sosvent" className='relative mt-5 p-10 min-h-screen'>
        <aside className="p-5 shadow-md bg-white rounded-lg h-full">
          <h1 className='text-4xl font-bossa md:text-7xl font-bold text-blue-950 text-center'>Social Event Timeline</h1>
          <div className='p-5 mt-10 overflow-x-scroll'>
            <img src="/timeline.svg" className='min-w-[700px] w-full' />
          </div>
        </aside>
      </section>
      <Stripe />
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
      <Stripe />

    </main>
  )
}

export default Home
