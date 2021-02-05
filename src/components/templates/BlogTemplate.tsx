import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import BlogPostHead from "../organisms/BlogPostHead"
import { Warn } from "../molecules/Notes"
import PrevNextLink from "../organisms/PrevNextLink"
import blogArticleComponents from "../atoms/MDXComponents"
import { TableOfContents } from "../organisms/TableOfContents"
import { BlogPage } from "./BlogPage"
import { DeepReadonly } from "ts-essentials"
import { Post } from "../../utils/Post"

type BlogTemplateProps = DeepReadonly<{
  pageContext: [Post, Post | null | undefined, Post | null | undefined]
}>

export const BlogTemplate: React.FC<BlogTemplateProps> = (props) => {
  const post = props.pageContext[0]
  const previous = props.pageContext[1]
  const next = props.pageContext[2]
  return (
    <BlogPage title={`${post.title}`} description={post.description}>
      <BlogPostHead post={post} />
      <PrevNextLink {...{ previous, next }} />
      <article className="p-3 md:p-5">
        {post.status === "draft" ? <Warn>This article is draft!</Warn> : null}

        <TableOfContents TOC={post.tableOfContents} className="my-1" />
        <MDXProvider components={blogArticleComponents}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
      </article>
      <PrevNextLink {...{ previous, next }} />
    </BlogPage>
  )
}

export default BlogTemplate
