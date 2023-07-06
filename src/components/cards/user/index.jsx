import { Link } from "react-router-dom";
import { timeAgo } from "../../../utils/date";
import Button from '../../../components/button'
import PropTypes from 'prop-types'

export default function UserCard({ item }) {
  return (
    <Link
      to={`/uye/${item.name}`}
      className='p-6 bg-white dark:bg-zinc-900 border hover:border-zinc-300 dark:border-zinc-700 dark:hover:border-zinc-600 rounded-md text-center flex flex-col gap-y-2.5 items-center justify-center relative before:absolute before:w-[90%] before:h-full before:-bottom-1.5 before:left-1/2 before:-translate-x-1/2 before:bg-zinc-200/80 dark:before:bg-zinc-700 before:z-[-1] before:rounded-b'>
      <img src={item.avatar} className='w-16 h-16 rounded-full' alt='' />
      <header>
        <h6 className='font-semibold text-primary line-clamp-1 dark:text-white'>@{item.name}</h6>
        <time dateTime={item.date} className='text-xs text-zinc-500'>{timeAgo(item.date)}</time>
      </header>
      <Button size="small" className="w-full">Takip Et</Button>
    </Link>
  )
}

UserCard.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })
}