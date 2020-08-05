import Head from 'next/head'
import PropTypes from 'prop-types'

import Box from './box'

const PageProps = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
  title: PropTypes.string,
}

const Page = ({ children, description = null, title = 'Lorenzo Pieri' }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name='description' content={description || title} />
    </Head>

    <Box as='main'>{children}</Box>
  </>
)

Page.propTypes = PageProps

export default Page
