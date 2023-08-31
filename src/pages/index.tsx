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
      <section id="sosvent" className='relative mt-5 p-10'>
        <aside className="p-5 shadow-md bg-white rounded-lg h-full">
          <h1 className='text-4xl font-bossa md:text-7xl font-bold text-blue-950 text-center'>Social Event Timeline</h1>
          <div className='p-5 my-10 overflow-x-auto'>
            <img src="/timeline.svg" className='min-w-[700px] w-full' />
          </div>
        </aside>
      </section>
      <Stripe />
      <section className='p-5'>
        <div className='text-center font-bossa mt-10 text-blue-950 font-bold text-[64px]'>
          Artikel
        </div>
        <div className='gap-4 sm:gap-6 md:gap-10 my-5 grid grid-cols-1 sm:grid-cols-2 h-max items-center justify-center md:mx-10'>
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
        <Stripe />
      </section>
    </main>
  )
}

export default Home
