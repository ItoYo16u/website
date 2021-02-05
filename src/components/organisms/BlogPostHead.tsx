import React, { Fragment } from "react"
import { PlainComponent } from "../../utils/PlainComponent"
import styled from "@emotion/styled"
import { DeepReadonly } from "ts-essentials"
import { Post } from "../../utils/Post"
import { Tag } from "../common/tag/tag"
import { Link } from "gatsby"
import { Caption } from "../common/typography/caption"
import { HorizontallySeparatedList } from "../layout/separating"

export type BlogPostHeadProps = DeepReadonly<{
  post: Pick<Post, "tags" | "title" | "date">
}>

export const Plain: PlainComponent<BlogPostHeadProps> = ({
  post: { date, tags, title },
  className,
}) => (
  <Fragment>
    <div className={className}>
      <HorizontallySeparatedList spacing={4}>
        {tags.map((v) => (
          <Link to={`/tags/${v}`}>
            <Tag>{v}</Tag>
          </Link>
        ))}
      </HorizontallySeparatedList>
    </div>
    <div>
      <Caption>published at {date}</Caption>
    </div>
  </Fragment>
)

const Styled = styled(Plain)`
  div {
    margin: 4px 0px;
  }
  ${Caption} {
    margin: 4px 0px;
  }
`

export default Styled
