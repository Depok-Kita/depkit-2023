import { ArticleType } from "@/typings/app"
import Image from "next/image"
import Link from "next/link"

export const Article = ({
    title,
    content,
    slug,
    updatedAt,
    thumbnail
}: ArticleType) => {


    return (
        <Link href={`/article/${slug}`}>
            <div className="grid place-items-center max-w-xl w-full mx-auto">
                <div className='shadow-xl font-jkt rounded-2xl w-full bg-white flex px-5 py-6 gap-4 border-blue-950 border-solid border-2'>
                    <div className="align-middle w-full sm:w-1/3 h-28 bg-zinc-300 rounded-2xl relative border-gray-300 border-2">
                        <Image src={thumbnail.url} alt="" fill className="object-cover" />
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                        <div className='text-neutral-400 text-xs font-semibold'>
                            {Intl.DateTimeFormat('id-ID', { weekday: "long", day: "numeric", month: "short", year: "numeric" }).format(new Date(updatedAt))}
                        </div>
                        <h3 className='text-blue-950 text-base font-bold leading-tight'>
                            {title}
                        </h3>
                        <p className='text-neutral-400 text-xs font-semibold whitespace-pre-wrap'>
                            {content.text.slice(0, 100)}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}