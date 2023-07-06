import Categories from './sections/categories';
import LastQuestions from './sections/last-questions';
import Articles from './sections/articles';
import LastUsers from './sections/users';
import SocialCard from '../../components/cards/social';


function Home() {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <Categories/>
      <SocialCard type="twitter" ctaUrl="https://twitter.com/prototurkcom"/>
      <LastQuestions/>
      <SocialCard type="instagram" ctaUrl="https://instagram.com/prototurk.official"/>
      <Articles/>
      <SocialCard type="telegram" ctaUrl="https://t.me/prototurk" ctaText="Gruba katıl"/>
      <LastUsers/>
    </div>
  )
}

export default Home