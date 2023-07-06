import Categories from './sections/categories';
import LastQuestions from './sections/last-questions';
import Articles from './sections/articles';
import LastUsers from './sections/users';


function Home() {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <Categories/>
      <LastQuestions/>
      <Articles/>
      <LastUsers/>
    </div>
  )
}

export default Home