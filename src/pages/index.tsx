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
      {/* <div className='text-center font-bossa mt-10 text-blue-950 font-bold text-[64px]'>
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
      </div> */}
      <Stripe />

    </main>
  )
}

export default Home
