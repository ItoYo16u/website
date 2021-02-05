import React from "react"
import PostList from "./blog/PostList"
import { BlogPage } from "./BlogPage"
import MDXComponents from "../atoms/MDXComponents"
import { Post } from "../../utils/Post"
import { Link } from "gatsby"
import { SubTitle } from "../common/typography/subtitle"
// show articles grouped by tag
export const TagsIndex = ({
  pageContext,
}: {
  pageContext: {
    classfiedPosts: { [index: string]: Post[] }
  }
}) => {
  const { classfiedPosts } = pageContext
  return (
    <BlogPage title="Tags" description="">
      <article className="p-1">
        {Object.keys(classfiedPosts).map((tag) => {
          return (
            <section key={tag}>
              <MDXComponents.h1>
                <Link to={`${tag}`}>
                  <SubTitle>{`# ${tag}`}</SubTitle>
                </Link>
              </MDXComponents.h1>
              <PostList posts={classfiedPosts[tag]} />
            </section>
          )
        })}
      </article>
    </BlogPage>
  )
}

export default TagsIndex
