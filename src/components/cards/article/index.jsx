import { Link } from "react-router-dom";
import { getContrastColor } from "../../../utils/helpers";
import { timeAgo } from "../../../utils/date";
import PropTypes from 'prop-types'

export default function ArticleCard({item}) {
    return (
        <Link
        to={`/makaleler/${item.slug}`}
        className='p-5 border hover:border-zinc-300 dark:hover:border-zinc-600 rounded-md flex flex-col bg-white dark:bg-zinc-900 dark:border-zinc-700 relative before:absolute before:w-[90%] before:h-full before:-bottom-1.5 before:left-1/2 before:-translate-x-1/2 before:bg-zinc-200/80 dark:before:bg-zinc-700  before:z-[-1] before:rounded-b '>
        <div
          style={{ '--color': item.category.color, '--text-color': getContrastColor(item.category.color) }}
          className='h-8 px-4 rounded text-sm font-medium text-[color:var(--text-color)] bg-[color:var(--color)] self-start flex items-center'
        >
          {item.category.name}
        </div>
        <h6 className='text-xl font-medium my-2 dark:text-white line-clamp-1'>{item.title}</h6>
        <time dateTime={item.date} className='text-xs text-zinc-500'>{timeAgo(item.date)}</time>
        <div className='flex mt-4 items-center gap-x-2.5 text-sm text-zinc-600 dark:text-zinc-400 font-medium'>
          <img src={item.user.avatar} alt='' className='w-8 h-8 rounded-full object-cover' />
          {item.user.name}
        </div>
      </Link>
    )
}

ArticleCard.propTypes = {
    item: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        category: PropTypes.shape({
            name: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired
        }),
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        user: PropTypes.shape({
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired
        })
    })
}