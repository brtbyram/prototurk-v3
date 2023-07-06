import React from 'react'
import Section from '../../../../components/section'
import Slider from '../../../../components/slider'
import { Link } from 'react-router-dom'
import Button from '../../../../components/button'
import { timeAgo } from '../../../../utils/date'
import { users as data } from '../../../../fake-api'

function LastUsers() {
  return (
    <Section
    title="Kimleri görüyoruz!"
    description="Hoşgeldin, evet sen de aramıza hoşgeldin. Bu ailenin bir parçası olmak istediğin için teşekkürler. Şimdi hemen birilerini takip etmeye başla ki akışın biraz canlansın!"
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
        <Link className='p-6 bg-white dark:bg-zinc-900 border hover:border-zinc-300 dark:border-zinc-700 dark:hover:border-zinc-600 rounded-md text-center flex flex-col gap-y-2.5 items-center justify-center relative before:absolute before:w-[90%] before:h-full before:-bottom-1.5 before:left-1/2 before:-translate-x-1/2 before:bg-zinc-200/80 dark:before:bg-zinc-700 before:z-[-1] before:rounded-b'>
          <img src={item.avatar} className='w-16 h-16 rounded-full' alt=''/>
          <header>
            <h6 className='font-semibold text-primary line-clamp-1 dark:text-white'>{item.name}</h6>
            <time dateTime={item.date} className='text-xs text-zinc-500'>{timeAgo(item.date)}</time>
          </header>
          <Button size="small" className="w-full">Takip Et</Button>
        </Link>
      )}
    />
  </Section>
  )
}

export default LastUsers