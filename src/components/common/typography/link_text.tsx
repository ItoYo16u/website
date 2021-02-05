import { css } from "@emotion/core"
import React from "react"
import { GatsbyLinkProps } from "gatsby"
import { cs } from "../../../styles"
import AnchorOrLink from "../../atoms/AnchorOrLink"

export const LinkText: React.FC<GatsbyLinkProps<unknown>> = (props) => (
  <span>
    <AnchorOrLink
      css={css`
        color: ${cs.primaryAccent};
        transition: all 0.4s ease-in-out;
        &:hover {
          opacity: 0.6;
        }
      `}
      {...props}
    />
  </span>
)

export default LinkText
