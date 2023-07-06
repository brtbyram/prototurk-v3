import propTypes from "prop-types"
import MenuItem from "./item"

export default function SidebarMenu({ menu }) {
    return (
        <nav className='grid gap-y-1'>
            {menu.map((item, key) => <MenuItem item={item} key={key} />)}
        </nav>
    )
}

SidebarMenu.propTypes = {
    menu: propTypes.array
}
