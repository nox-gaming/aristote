import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link href={`/articles/${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>Hey </h1>
    <ul>
      <PostLink id="what-were-doing" title="What were doing ?" />
      <PostLink id="come-join-us" title="Why you should join us ?" />
      {/* <PostLink id="deploy-nextjs" title="" /> */}
    </ul>
  </Layout>
)
