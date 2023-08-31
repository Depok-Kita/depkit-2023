export default function Timeline() {
    return (
        <section id="sosvent" className='relative mt-5 p-10 min-h-screen'>
            <aside className="p-5 shadow-md bg-white rounded-lg h-full">
                <h1 className='text-4xl font-bossa md:text-7xl font-bold text-blue-950 text-center'>Social Event Timeline</h1>
                <div className='p-5 mt-10 overflow-x-scroll'>
                    <img src="/timeline.svg" className='min-w-[700px] w-full' />
                </div>
            </aside>
        </section>
    )
}