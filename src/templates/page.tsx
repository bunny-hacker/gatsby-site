import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
  }
}

const PageTemplate: React.FC<PageTemplateProps> = () => (
  <IndexLayout>
    <Page>
      <Container />
    </Page>
  </IndexLayout>
)

export default PageTemplate

export const query = graphql`
  query PageTemplateQuery {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
  }
`
