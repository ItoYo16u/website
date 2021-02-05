import React from "react"
import { BlogPage } from "./BlogPage"
import PostList from "./blog/PostList"
import { Post } from "../../utils/Post"
// show articles tagged with [pageContext.tag]
export const TagPage = ({
  pageContext,
}: {
  pageContext: { posts: Post[]; tag: string }
}) => {
  return (
    <BlogPage description="" title={"Tag: " + pageContext.tag}>
      <article className="p-1">
        <PostList posts={pageContext.posts} />
      </article>
    </BlogPage>
  )
}

export default TagPage
