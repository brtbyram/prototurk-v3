import { useParams } from "react-router-dom"

function ArticleDetail() {

    const {slug} = useParams()

  return (
    <div>
        makale detayı : {slug}
    </div>
  )
}

export default ArticleDetail