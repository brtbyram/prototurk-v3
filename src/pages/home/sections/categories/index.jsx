import { AiFillFile } from 'react-icons/ai'
import { BsCameraVideoFill } from 'react-icons/bs'
import Section from '../../../../components/section'
import Slider from '../../../../components/slider'
import { Link } from 'react-router-dom'
import { categories as data } from '../../../../fake-api'
import { getContrastColor } from '../../../../utils/helpers'

export default function Categories() {
    return (
        <Section
        title="Kendine değer kat!"
        description="İyi bir kariyer için, doğru bir başlangıç gerekir. Prototürk'de bir çok dil ve teknolojiye ait derslerle doğru bir başlangıç yapmaya hazırsın!"
      >
        <Slider
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            950: {
              slidesPerView: 3,
            },
            1170: {
              slidesPerView: 4,
            },
            1370: {
              slidesPerView: 5,
            },
          }}
          items={data}
          render={(item) => (
            <Link
            style={{ '--color': item.color, '--text-color': getContrastColor(item.color) }}
              to={`/${item.slug}`}
              className='border border-zinc-200 hover:border-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-600 rounded-md flex flex-col items-center justify-center px-5 py-7 group'
            >
              <div className='w-24 h-24 rounded-full border border-[color:var(--color)] flex items-center justify-center mb-2.5 relative before:absolute before:h-24 before:w-24 before:rounded-full before:bg-[color:var(--color)] before:-top-2.5 before:-right-2.5 before:opacity-10'>
                <img src={item.icon} className="max-h-[50%]" alt={item.title} />
              </div>
              <div className='h-9 px-4 text-15 font-medium rounded flex items-center justify-center text-[color:var(--text-color)] bg-[color:var(--color)]'>
                {item.title}
              </div>
              <div className='border-t border-zinc-200 dark:border-zinc-700 group-hover:border-zinc-400 dark:group-hover:border-zinc-600 grid grid-cols-2 gap-x-4 pt-4 mt-4 text-sm text-zinc-500 group-hover:text-black dark:group-hover:text-white'>
                <div className='flex flex-col gap-y-1.5 items-center text-center '>
                  <AiFillFile size={16} />
                  {item.articleCount} ders
                </div>
                <div className='flex flex-col gap-y-1.5 items-center text-center '>
                  <BsCameraVideoFill size={16} />
                  {item.articleCount} video
                </div>
              </div>
            </Link>
          )}
        />
      </Section>
    )
}