import PropTypes from 'prop-types'
import classNames from 'classnames'
import { NavLink } from "react-router-dom"

function MenuItem({item}) {
    return (
        <div>
            <NavLink className={({ isActive }) => classNames("px-3 h-9 flex items-center rounded text-15 font-medium transition-colors", {
                "text-zinc-800 dark:text-zinc-400": !isActive,
                "bg-zinc-100 text-primary dark:bg-blue-500/20 dark:text-white": isActive
            })} to={item.path}>
                {item.title}
            </NavLink>
        </div>
    )
}

MenuItem.propTypes = {
 item: PropTypes.shape({
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
 }) 
}

export default MenuItem