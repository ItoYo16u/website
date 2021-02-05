import React from "react"
import { PlainComponent } from "../../../utils/PlainComponent"
import styled from "@emotion/styled"
import { DeepReadonly } from "ts-essentials"
import { Post } from "../../../utils/Post"
import { Fragment } from "react"
import { Card } from "../../common/collection/card"
import { css } from "@emotion/core"

export type PostListProps = DeepReadonly<{
  posts: Pick<Post, "excerpt" | "id" | "title" | "path">[]
}>

export const Plain: PlainComponent<PostListProps> = ({ posts, className }) => (
  <Fragment>
    <div
      css={css`
        height: 50px;
      `}
    ></div>
    <div className="cards">
      {posts.map((post) => (
        <Card
          css={css`
            margin: 16px;
            margin-top: 0;
            -webkit-column-break-inside: avoid;
            page-break-inside: avoid;
            break-inside: avoid;
            display: inline-block;
            @media (max-width: 1024px) {
              margin-bottom: 16px;
            }
          `}
          key={post.id}
          path={`/${post.path}/`}
          excerpt={post.excerpt}
          title={post.title}
        ></Card>
      ))}
    </div>
  </Fragment>
)

export const PostList = styled(Plain)`
  list-style: none;
  padding: 0;
  @media (min-width: 640px) {
    flex-wrap: wrap;
    display: flex;
  }
  li {
    width: 100%;
    padding: 0.25rem;
    @media (min-width: 640px) {
      width: 50%;
    }
    @media (min-width: 1024px) {
      width: 33.333333%;
    }
  }
  & .cards {
    margin: 24px auto;
    padding: 5px;
    width: 90%;
    column-count: 3;
    column-gap: 0;
    max-width: 1024px;
    display: flex;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    &.card {
      margin: 16px;
      margin-top: 0;
      -webkit-column-break-inside: avoid;
      page-break-inside: avoid;
      break-inside: avoid;
      display: inline-block;
      @media (max-width: 1024px) {
        margin-bottom: 16px;
      }
    }
  }
`

export default PostList
