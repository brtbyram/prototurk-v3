import { Link } from "react-router-dom";
import { timeAgo } from "../../../utils/date";
import PropTypes from 'prop-types'

export default function QuestionCard({item}) {
    return (
        <Link
        to={`/soru/${item.id}-${item.slug}`}
        className='p-5 border hover:border-zinc-300 dark:hover:border-zinc-600 rounded-md flex flex-col bg-white dark:bg-zinc-900 dark:border-zinc-700 relative before:absolute before:w-[90%] before:h-full before:-bottom-1.5 before:left-1/2 before:-translate-x-1/2 before:bg-zinc-200/80 dark:before:bg-zinc-700  before:z-[-1] before:rounded-b '>
        <div className='flex items-center gap-x-2.5 text-sm text-zinc-600 dark:text-zinc-400 font-medium'>
            <img src={item.user.avatar} alt='' className='w-6 h-6 rounded-full object-cover' />
            {item.user.name}
        </div>
        <h6 className='line-clamp-1 text-lg mt-2.5 mb-1 font-semibold text-primary dark:text-white'>{item.title}</h6>
        <time dateTime={item.date} className='text-xs text-zinc-500'>{timeAgo(item.date)}</time>
    </Link>
    )
}

QuestionCard.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        slug: PropTypes.string.isRequired,
        user: PropTypes.shape({
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired
        }),
        date: PropTypes.string.isRequired
    })
}