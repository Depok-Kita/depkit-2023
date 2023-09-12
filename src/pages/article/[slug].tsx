import { ArticleType } from '@/typings/app';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'

const ArticleBySlug = () => {

    const router = useRouter();

    // console.log(router.query)

    const [article, setArticle] = useState<ArticleType>({
        content: {
            html: `
                <p className="whitespace-pre-line">
                We're no strangers to love <br />
                You know the rules and so do I (do I) <br />
                A full commitment's what I'm thinking of <br />
                You wouldn't get this from any other guy <br />
                I just wanna tell you how I'm feeling <br />
                Gotta make you understand <br />
                Never gonna give you up <br />
                Never gonna let you down <br />
                Never gonna run around and desert you <br />
                Never gonna make you cry <br />
                Never gonna say goodbye <br />
                Never gonna tell a lie and hurt you <br />
                We've known each other for so long <br />
                Your heart's been aching, but you're too shy to say it (say it) <br />
                Inside, we both know what's been going on (going on) <br />
                We know the game and we're gonna play it <br />
                And if you ask me how I'm feeling <br />
                Don't tell me you're too blind to see <br />
                Never gonna give you up <br />
                Never gonna let you down <br />
                Never gonna run around and desert you <br />
                Never gonna make you cry <br />
                Never gonna say goodbye <br />
                Never gonna tell a lie and hurt you <br />
                Never gonna give you up <br />
                Never gonna let you down <br />
                Never gonna run around and desert you <br />
                Never gonna make you cry <br />
                Never gonna say goodbye <br />
                Never gonna tell a lie and hurt you <br />
                We've known each other for so long <br />
                Your heart's been aching, but you're too shy to say it (to say it) <br />
                Inside, we both know what's been going on (going on) <br />
                We know the game and we're gonna play it <br />
                I just wanna tell you how I'm feeling <br />
                Gotta make you understand <br />
                Never gonna give you up <br />
                Never gonna let you down <br />
                Never gonna run around and desert you <br />
                Never gonna make you cry <br />
                Never gonna say goodbye <br />
                Never gonna tell a lie and hurt you <br />
                Never gonna give you up <br />
                Never gonna let you down <br />
                Never gonna run around and desert you <br />
                Never gonna make you cry <br />
                Never gonna say goodbye <br />
                Never gonna tell a lie and hurt you <br />
                Never gonna give you up <br />
                Never gonna let you down <br />
                Never gonna run around and desert you <br />
                Never gonna make you cry <br />
                Never gonna say goodbye <br />
                Never gonna tell a lie and hurt you <br />
                </p> 
            `,
            text: ''
        },
        slug: router.query.slug as string,
        title: 'Never Gonna Give You Up',
        updatedAt: new Date().toISOString(),
        thumbnail: {
            url: ''
        }
    });

    const getArticle = async () => {
        const res = await fetch('https://api-ap-southeast-2.hygraph.com/v2/clmat1i740n0901t3c4vn3r75/master', {
            method: 'POST',
            body: JSON.stringify({
                query: `
                query getArticleBySlug($slug: String!) {
                    article(where: {slug: $slug}) {
                      title
                      content {
                        html
                      }
                      slug
                      updatedAt
                      thumbnail {
                        url
                      }
                    }
                  }                          
            `,
                variables: {
                    slug: router.query.slug as string ?? ''
                }
            }),
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        setArticle(data.data.article);
    }
    useEffect(() => {
        router.isReady && getArticle();
    }, [router.isReady])

    return (
        <main>
            <section className="flex items-center justify-between p-5 sm:px-10">
                <Link href="/" className='px-4 py-2 text-blue-500 font-medium'>
                    &lt; Kembali
                </Link>
                <p className='font-medium'>
                    {Intl.DateTimeFormat('id-ID', { weekday: "long", day: "numeric", month: "short", year: "numeric" }).format(article?.updatedAt ? new Date(article?.updatedAt) : new Date())}
                </p>
            </section>
            <section className="flex items-center justify-center relative aspect-video w-full sm:w-3/5 mx-auto rounded-2xl overflow-hidden border-2 bg-gray-100 border-gray-300 ">
                {article.thumbnail.url ? <Image src={article.thumbnail.url ?? ""} alt="" fill className='object-cover' /> : null}
            </section>
            <section className="p-5 sm:px-10">
                <h1 className='text-4xl font-bossa md:text-7xl font-bold text-blue-950 text-center'>{article?.title}</h1>
            </section>
            <div className='p-5 sm:px-10 overflow-x-auto w-max mx-auto'>
                <div dangerouslySetInnerHTML={{ __html: article?.content.html }} className='prose' />
            </div>
        </main>
    )
}

export default ArticleBySlug