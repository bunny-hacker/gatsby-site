import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../Page'
import Container from '../Container'
import IndexLayout from '../../layouts'

const BlogPost = ({ pageContext }: any) => {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>{pageContext.title}</h1>
          <p>
            <img src={pageContext.titleImage.file.url} alt={pageContext.titleImage.title} />
          </p>
          <p>{pageContext.bodyParsed.content[0].content[0].value}</p>
          <ul>
            <li>
              <Link to="/">Take me back home.</Link>
            </li>
          </ul>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default BlogPost
