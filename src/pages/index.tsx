import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
    <div className="w-[1080px] h-[486px] relative">
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
    </div>
    </main>
  )
}
