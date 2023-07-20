import ArticleCard from '../../components/cards/article'
import Pagination from '../../components/pagination'
import Section from '../../components/section/index'
import { articles } from '../../fake-api/articles'

function Articles() {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <Section title='Makaleler'>
        <div className='grid md:grid-cols-2 gap-4 mb-4'>
          {articles.map((article, key) => <ArticleCard style={false} item={article} key={key}/>)}
        </div>
        <Pagination count={24}/>
      </Section>
    </div>
  )
}

export default Articles