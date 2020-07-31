import Head from 'next/head'
import PropTypes from 'prop-types'

import Box from './box'

const PageProps = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

const Page = ({ children, title = 'Lorenzo Pieri' }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>

    <Box>{children}</Box>
  </>
)

Page.propTypes = PageProps

export default Page
