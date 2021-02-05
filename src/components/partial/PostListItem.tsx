import { css } from "@emotion/core"
import { Link } from "gatsby"
import React from "react"
import { cs, ss } from "../../styles"
import styled from "@emotion/styled"
import { DeepReadonly } from "ts-essentials"
import { Post } from "../../utils/Post"
import { PlainComponent } from "../../utils/PlainComponent"
import { Caption } from "../common/typography/caption"
import { SubTitle } from "../common/typography/subtitle"

export type LinkToPostProps = DeepReadonly<{
  post: Pick<Post, "excerpt" | "path" | "title">
}>

const Plain: PlainComponent<LinkToPostProps> = ({
  post: { excerpt, path, title },
  className,
}) => (
  <Link to={`${path}`} className={className}>
    <div>
      <SubTitle>{title}</SubTitle>
      <Caption>{excerpt}</Caption>
    </div>
  </Link>
)

const Styled = styled(Plain)`
  display: block;
  ${ss.boxShadowMedium};
  ${ss.hidden};
  height: 100%;
  background-color: ${cs.cardBackground};
  transition: 150ms filter ease-in-out;
  &:hover {
    filter: brightness(1.1);
  }
  div {
    padding: 8px 4px;
    padding-left: 6px;
  }
`

const Container: React.FC<LinkToPostProps> = (props) => (
  <Styled {...props} css={css``} />
)

export { Container as default, Container as PostListItem }
