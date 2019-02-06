import css from "./scss/style.scss"

import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <title>Website</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className={css.example}>my website</div>
  </div>
)