import React from "react"
import { graphql } from "gatsby"
import { Mdx } from "../../types/graphqlTypes"
import { BlogPage } from "../components/templates/BlogPage"
import PostList from "../components/templates/blog/PostList"
import { PlainComponent } from "../utils/PlainComponent"
import { DeepReadonly } from "ts-essentials"
import styled from "@emotion/styled"
import { toPostStrict, toPostPartial } from "../utils/Post"

type Data = DeepReadonly<{
  allMdx: {
    edges: {
      node: Pick<Mdx, "excerpt" | "frontmatter" | "timeToRead" | "id">
    }[]
  }
}>

const Plain: PlainComponent<{ data: Data }> = ({
  data: {
    allMdx: { edges },
  },
  className,
}) => {
  const posts = edges.map(({ node }) =>
    toPostPartial<"excerpt" | "title" | "path" | "id">(node)
  )
  return (
    <BlogPage title="Welcome" description="110416's blog" className={className}>
      <article>
        <PostList posts={posts} />
      </article>
    </BlogPage>
  )
}

const Styled = styled(Plain)`
  & h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
  }
  & p {
    text-align: center;
  }
  & article {
    padding: 0.25rem;
  }
`

export const pageQuery = graphql`
  query BlogIndex {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { status: { ne: "private" } } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            tags
            title
            status
          }
          timeToRead
          id
        }
      }
    }
  }
`

export default Styled
