/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { graphql, Link } from 'gatsby'
// import HTMLParser from 'html-react-parser'
import IndexLayout from '../layouts'
import Page from '../components/Page'
import Container from '../components/Container'

const StyledPost = styled.div`
  background-color: white;
  border-radius: 5px;
  h1 {
    border-bottom: 1px solid black;
  }
`

interface BlogProps {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          excerpt: string
          frontmatter: {
            title: string
          }
          fields: {
            slug: string
          }
        }
      }[]
    }
  }
}

export default function Blog({ data }: BlogProps) {
  return (
    <IndexLayout>
      <Page>
        <Container>
          {data.allMarkdownRemark.edges.map(({ node }, i) => {
            const {
              frontmatter: { title },
              fields: { slug },
              excerpt
            } = node
            return (
              <StyledPost key={`post_${i}`}>
                <Link to={slug}>
                  <h2>{title}</h2>
                </Link>
                <p>{excerpt}</p>
              </StyledPost>
            )
          })}
        </Container>
      </Page>
    </IndexLayout>
  )
}

export const query = graphql`
  query allBlogFiles {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
      edges {
        node {
          excerpt
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
