import { GatsbyNode } from "gatsby"
import Path from "path"
import { MdxConnection } from "../types/graphqlTypes"
import { Post, toPostStrict } from "../src/utils/Post"

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  type Data = {
    allMdx: Pick<MdxConnection, "edges">
  }
  const { createPage } = actions
  const result = await graphql<Data>(`
    query gatsbyNode {
      allMdx(
        sort: { fields: frontmatter___date, order: ASC }
        filter: { frontmatter: { status: { ne: "private" } } }
      ) {
        edges {
          node {
            id
            tableOfContents(maxDepth: 10)
            body
            excerpt
            frontmatter {
              path
              status
              tags
              title
              date
              description
            }
          }
          next {
            frontmatter {
              path
              title
            }
          }
          previous {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(result.errors)
    return
  }

  if (!result.data) return
  const { edges } = result.data.allMdx

  const classfiedPosts: { [index: string]: Post[] } = {}

  edges.forEach(e => {
    const { node, previous: pr, next: nx } = e

    const [post, previous, next] = [
      toPostStrict(node),
      pr && toPostStrict(pr),
      nx && toPostStrict(nx),
    ]

    if (post.tags) {
      post.tags.forEach(tag => {
        if (tag) {
          if (!classfiedPosts[tag]) {
            classfiedPosts[tag] = []
          }
          classfiedPosts[tag].push(post)
        } else {
        }
      })
    }
    createPage<[Post, Post | null | undefined, Post | null | undefined]>({
      path: post.path,
      component: Path.resolve(`./src/components/templates/BlogTemplate.tsx`),
      context: [post, previous, next],
    })
  })

  Object.keys(classfiedPosts).forEach(tag => {
    return createPage({
      path: `/tags/${tag}/`,
      component: Path.resolve(`./src/components/templates/TagPage.tsx`),
      context: { posts: classfiedPosts[tag], tag },
    })
  })

  createPage({
    path: "/tags/",
    component: Path.resolve(`./src/components/templates/TagsIndex.tsx`),
    context: { classfiedPosts },
  })
}
