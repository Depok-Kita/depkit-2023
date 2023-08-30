import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const Article = () => {
  return (
    <div className='shadow-xl rounded-2xl w-full bg-white flex px-5 py-6 gap-4 border-blue-950 border-solid border-2'>
      <div className="align-middle w-52 max-w-lg h-28 bg-zinc-300 rounded-2xl"/>
      <div className='flex flex-col gap-2'>
        <div className='text-neutral-400 text-xs font-semibold'>
          Selasa, 27 Mei 2023
        </div>
        <div className='text-blue-950 text-base font-bold leading-tight'>
          Rapat Koordinasi Lomba Posyandu dan Kader Posyandu Tingkat Provinsi Jawa Barat
        </div>
        <div className='text-neutral-400 text-xs font-semibold'>
          Dinas Kesehatan (Dinkes) Kota Depok mengadakan rapat Koordinasi Lomba Posyandu...
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className='px-20'>
      <div className='text-center text-blue-950 font-bold text-[64px]'>
        Artikel
      </div>
      <div className='gap-10 flex h-max items-center justify-center'>
        <div className='flex flex-col gap-10'>
          <Article/>
          <Article/>
        </div>
        <div className="w-3 h-96 bg-zinc-300 rounded-2xl"/>
        <div className='flex flex-col gap-10'>
          <Article/>
          <Article/>
        </div>
      </div>
    </main>
  )
}
