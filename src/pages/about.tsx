import Stripe from "@/components/Stripe";

export default function About() {
    return (
        <section className="grid place-items-center grid-cols-1">
            <Stripe />
            <h1 className='text-4xl font-bossa md:text-7xl text-blue-950 text-center mt-10'>
                Tentang Kami
            </h1>
            <p className="mb-5 text-xs sm:text-sm font-jkt_semibold text-center md:text-basetext-center sm:w-2/3 px-5 md:w-1/2 min-w-[250px] my-5">
                Depok Kita adalah program pengabdian masyarakat berbasis Community Service di Depok.
                Departemen Sosial Masyarakat BEM UI 2023
            </p>
            <div className="w-full mx-10 md:w-2/3 hover:bg-gray-100 font-jkt shadow-lg m-3 p-5 rounded-xl hover:shadow-2xl transition-all cursor-pointer">
                <h1 className="font-bossa_black mb-1 py-2 before:absolute before:w-full before:bottom-0 before:left-0 before:h-[2px] before:bg-[#172554] relative">
                    1. Grand Opening Warga
                </h1>
                <h2 className="font-bossa text-xs text-gray-800 mb-5">
                    19 Agustus 2023
                </h2>
                <p className="p-3 md:text-base text-xs tracking-wide text-gray-800">
                    Dalam rangka memeriahkan rangkaian acara Depok Kita 2023, Social Event mengadakan pembukaan resmi bersama dengan karang taruna Cipayung Jaya. Pembukaan resmi ini diadakan dalam bentuk perlombaan HUT RI seperti makan kerupuk, joget balon, oper tepung, dan masih banyak lagi.
                </p>
                <h3 className="text-xs tracking-wide font-bossa text-gray-800 mt-2">
                    Depan Perumahan Nirwana Cipayung Blok A (Lahan samping popok bayi)
                </h3>
                <h3 className="text-xs tracking-wide font-bossa text-gray-800">
                    Lingkungan RT 003/001 Kel. Cipayung Jaya, Kec. Cipayung, Kota Depok
                </h3>
            </div>
            <div className="w-full mx-10 md:w-2/3 hover:bg-gray-100 font-jkt shadow-lg m-3 p-5 rounded-xl hover:shadow-2xl transition-all cursor-pointer">
                <h1 className="font-bossa_black mb-1 py-2 before:absolute before:w-full before:bottom-0 before:left-0 before:h-[2px] before:bg-[#172554] relative">
                    2. Creativity for Charity
                </h1>
                <h2 className="font-bossa text-xs text-gray-800 mb-5">
                    1 September 2023

                </h2>
                <p className="p-3 md:text-base text-xs tracking-wide text-gray-800">
                    Kegiatan penggalangan dana yang dibuka untuk publik dengan menghadirkan acara talkshow dengan narasumber berpengalaman & kelas seni melukis totebag. Creativity for Charity dapat dijadikan wadah untuk mengembangkan potensi dan minat mahasiswa Universitas Indonesia serta sekitarnya, sekaligus sebagai bentuk partisipasi mereka dalam penggalangan dana Depok Kita 2023.
                </p>
                <h3 className="text-xs tracking-wide font-bossa text-gray-800 mt-2">
                    Auditorium Pusgiwa, Kampus UI Depok
                </h3>
            </div>
            <div className="w-full mx-10 md:w-2/3 hover:bg-gray-100 font-jkt shadow-lg m-3 p-5 rounded-xl hover:shadow-2xl transition-all cursor-pointer">
                <h1 className="font-bossa_black mb-1 py-2 before:absolute before:w-full before:bottom-0 before:left-0 before:h-[2px] before:bg-[#172554] relative">
                    3. Bakti Sosial
                </h1>
                <h2 className="font-bossa text-xs text-gray-800 mb-5">
                    7 Oktober 2023
                </h2>
                <p className="p-3 md:text-base text-xs tracking-wide text-gray-800">
                    Salah satu rangkaian kegiatan dari Depok Kita tahun ini adalah melaksanakan bakti sosial. Bakti sosial merupakan kegiatan untuk membantu sesama demi menumbuhkan rasa kepedulian sosial mahasiswa kepada masyarakat RW 1 Kampung KB Cipayung Jaya dengan melakukan pemberian sembako. Tujuan kegiatan bakti sosial ini adalah untuk mewujudkan rasa saling menolong dan saling peduli mahasiswa kepada masyarakat RW 1 Kampung KB Cipayung Jaya. Acara ini berupa pemberian sembako kepada masyarakat RW 1 Kampung KB Cipayung Jaya yang membutuhkan.
                </p>
            </div>
            <div className="w-full mx-10 md:w-2/3 hover:bg-gray-100 mb-10 font-jkt shadow-lg m-3 p-5 rounded-xl hover:shadow-2xl transition-all cursor-pointer">
                <h1 className="font-bossa_black mb-1 py-2 before:absolute before:w-full before:bottom-0 before:left-0 before:h-[2px] before:bg-[#172554] relative">
                    4. Grand Closing
                </h1>
                <h2 className="font-bossa text-xs text-gray-800 mb-5">
                    11 November 2023
                </h2>
                <p className="p-3 md:text-base text-xs tracking-wide text-gray-800">
                    Grand Closing merupakan acara penutup dari rangkaian kegiatan Depok Kita 2023 yang bertujuan untuk mengapresiasi seluruh pihak yang telah berpartisipasi dalam pelaksanaan acara. Susunan acara Grand Closing dimulai dengan arak-arakan dari RT 1-5 menuju lapangan rumput. Acara akan dibuka dengan sambutan oleh pihak yang terlibat dan dilanjutkan pada acara inti yang merupakan penampilan IKM UI dan peserta lomba kesenian. Terdapat berbagai lomba yang diadakan untuk warga seperti lomba menyanyi, lomba menari, lomba membaca puisi, dan sebagainya. Dalam setiap rangkaian acara juga akan diselingi pengundian doorprize.
                </p>
                <h3 className="text-xs tracking-wide font-bossa text-gray-800 mt-2">
                    Lapangan Rumput Kampung KB Cipayung Jaya
                </h3>
            </div>
            <Stripe />
        </section>
    )
}