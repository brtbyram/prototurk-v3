import React from 'react'
import Section from '../../components/section'
import { categories } from '../../fake-api/categories'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { AiFillFile } from 'react-icons/ai'
import { BsCameraVideoFill } from 'react-icons/bs'
function Home() {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <Section
        title="Kendine değer kat!"
        description="İyi bir kariyer için, doğru bir başlangıç gerekir. Prototürk'de bir çok dil ve teknolojiye ait derslerle doğru bir başlangıç yapmaya hazırsın!"
      >
        <Swiper
          className='pb-12'
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={5}
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {categories.map((category, key) => (
            <SwiperSlide key={key}>
              <Link
                style={{ '--color': category.color }}
                to="/"
                className='border border-zinc-200 hover:border-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-600 rounded-md flex flex-col items-center justify-center p-5 group'
              >
                <div className='w-24 h-24 rounded-full border border-[color:var(--color)] flex items-center justify-center mb-2.5 relative before:absolute before:h-24 before:w-24 before:rounded-full before:bg-[color:var(--color)] before:-top-2.5 before:-right-2.5 before:opacity-10'>
                  <img src={category.icon} className="max-h-[50%]" alt={category.title} />
                </div>
                <div className='h-9 px-4 text-15 font-medium rounded flex items-center justify-center text-white bg-[color:var(--color)]'>
                  {category.title}
                </div>
                <div className='border-t border-zinc-200 dark:border-zinc-700 group-hover:border-zinc-400 dark:group-hover:border-zinc-600 grid grid-cols-2 gap-x-4 pt-4 mt-4 text-sm text-zinc-500 group-hover:text-black dark:group-hover:text-white'>
                  <div className='flex flex-col gap-y-1.5 items-center text-center '>
                    <AiFillFile size={16} />
                    {category.articleCount} ders
                  </div>
                  <div className='flex flex-col gap-y-1.5 items-center text-center '>
                    <BsCameraVideoFill size={16} />
                    {category.articleCount} video
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>
      <Section
        title="Birlikte daha güçlüyüz!"
        description="Kodlama yaparken takıldığında ya da bazen kafanı dağıtmaya ihtiyacın olduğunda soru & cevap bölümü seni bekliyor. Merak ettiklerini sor, bildiklerini cevapla!"
      />

      <Section
        title="Yenilikleri birlikte takip edelim!"
        description="Her gün yeni bir şeyler çıkıyor ve gelişim durmadan devam ediyor. Kalemine değil koduna güveniyorsan gel birlikte anlatalım tüm bu yenilikleri."
      />

      <Section
        title="Kimleri görüyoruz!"
        description="Hoşgeldin, evet sen de aramıza hoşgeldin. Bu ailenin bir parçası olmak istediğin için teşekkürler. Şimdi hemen birilerini takip etmeye başla ki akışın biraz canlansın!"
      />

    </div>
  )
}

export default Home