import { categories } from '../../../../../../fake-api/categories'
import MenuItem from '../menu/item'

export default function Categories () {
    const filteredCategories = categories.reduce((acc, curr) => [...acc, {
        path: `/${curr.slug}`,
        title: curr.title
    }],[])
    return (
        <section className='mt-5 pt-5 border-t dark:border-zinc-700'>
            {filteredCategories.map((category,key) => <MenuItem item={category} key={key}/>)}
        </section>
    )
}