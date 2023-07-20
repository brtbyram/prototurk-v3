import PropTypes from 'prop-types'
import classNames from 'classnames'
import { NavLink } from "react-router-dom"

export default function MenuItem({ item }) {
    return (
        <div>
            <NavLink
                end={true}
                onClick={e => {
                    if (item?.onClick) {
                        e.preventDefault()
                        item?.onClick(e)
                    }
                }}
                to={item.path}
                className={({ isActive }) => classNames("px-3 h-9 flex items-center rounded text-15 font-medium transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-700", {
                    "text-zinc-800 dark:text-zinc-400": !isActive,
                    "text-red-600 dark:text-red-500": item?.sensitive,
                    "!bg-zinc-100 text-primary dark:!bg-blue-500/20 dark:text-white": (isActive && item?.path)
                })}>
                {item.title}
                {item.new && (
                    <span className='text-[11px] bg-red-600 text-white py-0.5 px-2.5 rounded ml-auto'>YENİ</span>
                )}
            </NavLink>
        </div>
    )
}

MenuItem.propTypes = {
    item: PropTypes.shape({
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        new: PropTypes.bool,
        sensitive: PropTypes.bool,
        onClick: PropTypes.func
    })
}

MenuItem.defaultProps = {
    new: false
}