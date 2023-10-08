import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Article } from '@/components/Article'
import Stripe from '@/components/Stripe'
import Hero from '@/components/Hero'
import Timeline from '@/components/Timeline'
import { useEffect, useState } from 'react'
import { ArticleType } from '@/typings/app'

const inter = Inter({ subsets: ['latin'] })

export const Home = () => {


  const [articles, setArticles] = useState<ArticleType[]>([]);

  const getArticles = async () => {
    const res = await fetch('https://api-ap-southeast-2.hygraph.com/v2/clmat1i740n0901t3c4vn3r75/master', {
      method: 'POST',
      body: JSON.stringify({
        query: `
        query {
          articles {
            title
            content {
              text
            }
            slug
            updatedAt
            thumbnail {
              url
            }
          }
        }              
            `
      }),
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    setArticles(data?.data?.articles);
  }
  useEffect(() => {
    getArticles();
  }, [])

  return (
    <main
      className="bg-[#F2FAFE] overflow-x-hidden"
    >
      <Hero />
      <Timeline />
      <Stripe />
      <section id='artikel' className='p-5 min-h-screen flex-col flex'>
        <h1 className='text-4xl font-bossa md:text-7xl font-bold text-blue-950 text-center'>
          Artikel
        </h1>
        <aside className="flex-1">

          {
            articles?.length > 0 ?
              <ul className='gap-4 sm:gap-6 md:gap-10 my-5 grid grid-cols-1 sm:grid-cols-2 items-stretch h-full justify-center md:mx-10'>
                {articles.slice(0, 4).map((article, index) => (
                  <Article key={index} {...article} />
                ))}
              </ul>
              :
              <div className='flex justify-center items-center'>
                <h1>Tak ada artikel</h1>
              </div>
          }
        </aside>
        <Stripe />
      </section>
      <section>
        <h1 className='text-4xl font-bossa md:text-7xl font-bold text-blue-950 text-center'>
          Proposal Eksternal
        </h1>
        <div style={{ position: "relative", paddingBottom: "56.25%", paddingTop: "35px", height: 0, overflow: "hidden" }}>
          <iframe allowFullScreen={true} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", }} src="https://heyzine.com/flip-book/19e67703b1.html">
          </iframe>
        </div>
      </section>
      <Stripe />

    </main>
  )
}

export default Home
