import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Article } from '@/components/Article'
import Stripe from '@/components/Stripe'
import Hero from '@/components/Hero'
import Timeline from '@/components/Timeline'

const inter = Inter({ subsets: ['latin'] })

export const Home = () => {
  return (
    <main
      className="bg-[#F2FAFE] overflow-x-hidden"
    >
      <Hero />
      <Timeline />
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
